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
                  <p>Enrollment for this course requires payment but payment gateway is currently not set by the organizer</p>
                <v-divider></v-divider>
                <v-btn type="button" color="red darken-1" text @click="$inertia.visit(route('account.course.show', {account: account.username, course: course.slug}))">Go back</v-btn>
              </div>
            </v-card-text>
          </v-card>
        </div>
        <div v-else-if="!course.payment.gateway_supported">
          <v-card>
            <v-card-text>
              <div class="text-center">
                  <h1>Ooops!</h1>
                  <p>Payment gateway not supported</p>
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
                    <course-status :course="course" />
                  </div>
                  <v-spacer></v-spacer>
                  <div>
                    <h4 v-if="course.payment.require">{{course.price | money(course.currency)}}</h4>
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
    
    <paystack-gateway ref="paystackGateway" v-if="course.payment.require && course.payment.gateway == 'paystack'"
      :public-key="payment_gateway.credentials.public_key"
      :email="student.email" 
      :amount="course.price * 100" 
      :currency="course.currency"
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
      @aborted="freeProcess" />

    <stripe-gateway ref="stripeGateway" v-else-if="course.payment.require && course.payment.gateway == 'stripe'"
      :publishable-key="payment_gateway.publishable_key" 
      :amount="course.price" 
      :currency="course.currency" 
      :color="account.theme_color" 
      :charge_callback="stripeCallBack" 
      @success="registrationSuccessfull" 
      @error="registrationFailed"
      @aborted="freeProcess" />

    <midtrans-gateway ref="midtransGateway" v-else-if="course.payment.require && course.payment.gateway == 'midtrans'"
      :client-key="payment_gateway.credentials.client_key"
      :amount="course.price" 
      :currency="course.currency"
      :color="account.theme_color"
      :charge="midtransCharge"
      :charge_callback="midtransRegister"
      @success="registrationSuccessfull" 
      @error="registrationFailed"  
      @aborted="freeProcess"
    />

    <student-enrollment 
      :account="account"  
      :student="student" 
      :show="showEnrollment" 
      @close="$inertia.visit(route('account.show', {account: account.username}))" />

  </v-row>
</template>

<script>

    import {mapActions} from "vuex";
    import AccountLayout from '@/Domain/Account/Layout.vue';
    import CourseShow from './CourseShow.vue';
    import CourseStatus from '../Components/CourseStatus.vue'
    import StudentEnrollment from './../Components/StudentEnrollment.vue';

    const EVENT = 'open_enrollment_form';

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
            StudentEnrollment, CourseStatus
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
          ...mapActions([
                'pushGTMEvent'
          ]),

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
                this.$refs.paystackGateway.open();
              break;

              case 'stripe':
                this.$refs.stripeGateway.open();
              break;

              case 'midtrans':
                this.$refs.midtransGateway.open();
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

          stripeCallBack(token){
            return new Promise((resolve, reject) => {
                axios.post(this.route('course.stripe.charge', {course: this.course.slug}), {
                    token,
                    stripe_account: this.payment_gateway.credentials.stripe_user_id,
                    receipt_email: this.student.email
                })
                .then(response => {
                  this.process = `Registering you as ${this.student.first_name} ${this.student.last_name}`;
                  return this.register({
                      ...this.student,
                      payment_ref: response.data.charge.id,
                      raw: true,
                      for_real: true,
                      payment_gateway: this.course.payment.gateway,
                      currency: this.course.currency,
                      amount: this.course.price
                    })
                })
                .then(response => {
                  resolve(response);
                })
                .catch(e => {
                    reject(e);
                })
            })
          },

          midtransCharge(token){
            return new Promise((resolve, reject) => {
              axios.post(this.route('course.midtrans.charge', {course: this.course.slug}), {
                    token, ...this.student,
                    server_key: this.payment_gateway.credentials.server_key,
                }).then(response => {
                  resolve(response.data.charge);
                })
                .catch(e => {
                    reject(e);
                })
            });
          },

          midtransRegister(charge){
            return new Promise((resolve, reject) => {
                this.process = `Registering you as ${this.student.first_name} ${this.student.last_name}`;
                this.register({
                  ...this.student,
                  payment_ref: charge.transaction_id,
                  raw: true,
                  for_real: true,
                  payment_gateway: this.course.payment.gateway,
                  currency: this.course.currency,
                  amount: this.course.price
                })
                .then(response => {
                  resolve(response, true);
                })
                .catch(e => {
                    reject(e);
                });
            });
          },
          
          registrationSuccessfull(response){
            this.freeProcess();
            this.student = response.data;
            this.showEnrollment = true;
          },

          registrationFailed(e){
              toastr.error(`Registration failed: ${e.message}`);
          }

        },

        mounted(){
            const event =  this.$page.account.gtm_events.find(e => e.slug == EVENT);

            if(this.$page.account.google_tag_manager && event){
              this.pushGTMEvent({
                  id: this.$page.account.google_tag_manager, 
                  events: event.triggers
              })
            }
        }

    }
</script>