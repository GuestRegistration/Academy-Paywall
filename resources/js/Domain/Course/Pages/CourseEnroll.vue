<template>

  <v-row justify="center">
    <v-dialog
      v-model="processing"
      hide-overlay
      persistent
      width="300"
    >
      <v-card
        :color="account.theme_color"
        dark
      >
        <v-card-text>
          {{process}}
          <v-progress-linear
            indeterminate
            color="white"
            class="mb-0"
          ></v-progress-linear>
        </v-card-text>
      </v-card>
    </v-dialog>

    <v-dialog v-model="dialog" scrollable  persistent max-width="600px">
        <div v-if="course.ended">
          <v-card>
            <v-card-text>
              <div class="text-center">
                You can no longer enroll for this course. It ended since {{course.end_date}}
                <v-divider></v-divider>
                <v-btn type="button" color="red darken-1" text @click="$inertia.visit(route('account.course.show', {account: account.username, course: course.slug}))">Cancel</v-btn>
              </div>
            </v-card-text>
          </v-card>
        </div>
        <div v-else-if="course.payment.require && (!course.payment.gateway_active || !course.payment.gateway_clear)">
          <v-card>
            <v-card-text>
              <div class="text-center">
                  <h1>Ooops!</h1>
                  Enrollment for this course requires payment but payment gateway is currently not available
                <v-divider></v-divider>
                <v-btn type="button" color="red darken-1" text @click="$inertia.visit(route('account.course.show', {account: account.username, course: course.slug}))">Go back</v-btn>
              </div>
            </v-card-text>
          </v-card>
        </div>
        <form v-else @submit.prevent="submit">
          <v-card>
            <v-card-title>
              <span class="headline">Enrollment</span>
            </v-card-title>
            <v-divider></v-divider>
            <v-card-text>
                <div class="d-flex mb-5">
                  <div>
                    <div>
                       Course: {{ course.title }}
                    </div>
                    <div>
                      Organizer: {{ account.name }}
                    </div>
                  </div>
                  <v-spacer></v-spacer>
                  <div>
                    <h4 v-if="course.payment.require">{{course.price | money(course.payment.currency)}}</h4>
                    <h4 v-else>FREE</h4>
                  </div>
                </div>               
                <x-input :errors="errors" name="first_name" type="text" v-model="student.first_name" label="First name*" />
                <x-input :errors="errors" name="last_name" type="text" v-model="student.last_name" label="Last name*" />
                <x-input :errors="errors" name="email" type="text" v-model="student.email" label="Email*" />
                <x-input :errors="errors" name="phone" type="text" v-model="student.phone" label="Phone*" />
                <small color="red">*indicates required field</small>
            </v-card-text>
            <v-card-actions>
              <v-btn type="button" color="red darken-1" text @click="$inertia.visit(route('account.course.show', {account: account.username, course: course.slug}))">Cancel</v-btn>
              <v-spacer></v-spacer>

              <v-btn v-if="course.payment.require" type="submit" :loading="loading" :color="account.theme_color" dark >Proceed to payment  <v-icon>arrow_forward</v-icon></v-btn>
              <v-btn v-else type="submit" :loading="loading" :color="account.theme_color" dark >Submit <v-icon>arrow_forward</v-icon></v-btn>
            </v-card-actions>
          </v-card>
        </form>
        
    </v-dialog>
    
    <paystack-gateway ref="paystack" :public-key="payment_gateway.credentials.public_key" 
      :email="student.email" 
      :amount="course.price * 100" 
      :currency="course.payment.currency"
      :charge_callback="paystackCallBack"   
      :data="{
        ref: student.id,
        firstname: student.first_name,
        lastname:  student.last_name,
        metadata: {
          custom_fields: [
              {
                  course: course.title,
              }
          ]
        },
      }" 
      @process="(p) => { process = p }"
      @success="registrationSuccessfull"
      @error="registrationFailed"
    >
    </paystack-gateway>

    <student-enrollment 
      :account="account"  
      :student="student" 
      :show="showEnrollment" 
      @close="$inertia.visit(route('account.show', {account: account.username}))" />
  </v-row>
</template>

<script>
    import AccountLayout from '@/Domain/Account/Layout';
    import CourseShow from './CourseShow';
    import StudentEnrollment from './../Components/StudentEnrollment';
    import PaystackGateway from '@/components/PaystackGateway';

    export default {
        name: 'CourseEnroll',
        metaInfo()
         {
             return{
                title: `Enroll ${this.course.title} ${this.account.at_username}`,
                titleTemplate: '%s - AcadaApp',
             }
        },

        layout: (h, page) => h(AccountLayout, [
                              h(CourseShow, [page])
                            ]),
        components: {
            StudentEnrollment, PaystackGateway
        },

        data(){
            return {
                dialog: true,
                loading: false,
                student: {},
                errors: null,
                process: '',
                selectPaymentGateway: false,
                showEnrollment: false,
            }
        },

        computed: {
          processing(){
            return !this.process || this.process === '' ? false : true;
          }
        },

        props: {
            account: {
                type: Object,
                default: () => ({}),
            },
            course: {
                type: Object,
                default: () => ({}),
            },

            payment_gateway: {
              type: Object,
              default: () => ({})
            }
        },

        methods: {
          freeProcess(){
            this.process = '';
            this.loading = false;
          },
          
          register(student){
            return axios.post(this.route('account.course.register', {account: this.account.username, course: this.course.slug}), student)
          },

          submit(){
            this.loading = true;
            this.process = `Hold on...`;
            this.register({
                    ...this.student,
                    raw: true,
                    for_real: !this.course.payment.require,
            })
            .then(response => {
               this.errors = null;
               this.process = null;
               if(this.course.payment.require){
                this.initializeGateway(this.course.payment.gateway);
               }else{
                 this.registrationSuccessfull(response);
               }
            })
            .catch(e => {
                this.errors = e.response ? e.response.data.errors : [];
                this.freeProcess();
            })
          },

          initializeGateway(gateway){
            switch(gateway){
              case 'paystack':
                this.$refs.paystack.open();
              break;

              default:
                toastr.error("We do not support that payment gateway yet. We are working on it.");
                this.freeProcess();
              break;
            }
          },

          paystackCallBack(paystackResponse){
            return new Promise((resolve, reject) => {
                this.process = `Registering you as ${this.student.first_name} ${this.student.last_name}`;
                this.register({
                  ...this.student,
                  payment_ref: paystackResponse.reference,
                  raw: true,
                  for_real: true,
                  payment_gateway: this.course.payment.gateway,
                  currency: this.course.payment.currency,
                  amount: this.course.price
                })
                .then(response => {
                  resolve(response);
                })
                .catch(e => {
                  reject(e);
                })
              })
          },

          registrationSuccessfull(response){
              this.freeProcess();
              this.student = response.data;
              this.showEnrollment = true;
          },

          registrationFailed(e){
              toastr.error(`Registration failed: ${e.message}`);
          }

        }

    }
</script>