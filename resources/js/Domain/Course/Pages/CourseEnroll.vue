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

    <v-dialog v-model="dialog" persistent max-width="600px">
        <form @submit.prevent="submit">
          <v-card>
            <v-card-title>
              <span class="headline">Enroll for "{{course.title}}"</span>
              <v-spacer></v-spacer>
              <h4 :style="`color: ${account.theme_color}`">{{ course.price | money }}</h4>
            </v-card-title>
            <v-divider></v-divider>
            <v-card-text>
                <x-input :errors="errors" name="first_name" type="text" v-model="student.first_name" label="First name*" />
                <x-input :errors="errors" name="last_name" type="text" v-model="student.last_name" label="Last name*" />
                <x-input :errors="errors" name="email" type="text" v-model="student.email" label="Email*" />
                <x-input :errors="errors" name="phone" type="text" v-model="student.phone" label="Phone*" />
                <small color="red">*indicates required field</small>
            </v-card-text>
            <v-card-actions>
              <v-btn type="button" color="red darken-1" text @click="$inertia.visit(route('account.course.show', {account: account.username, course: course.slug}))">Cancel</v-btn>
              <v-spacer></v-spacer>
              <v-btn type="submit" :loading="loading" :color="account.theme_color" dark >Proceed to payment  <v-icon>arrow_forward</v-icon></v-btn>
            </v-card-actions>
          </v-card>
        </form>
    </v-dialog>
    <payment-gateways :account="account" :gateways="payment_gateways" :show="selectPaymentGateway" @continue="initializeGateway" @cancel="selectPaymentGateway = false; freeProcess()" />
    <student-enrollment  :account="account"  :student="student" :show="showEnrollment" @close="$inertia.visit(route('account.show', {account: account.username}))" />

  </v-row>
</template>

<script>
    import AccountLayout from '@/Domain/Account/Layout';
    import CourseShow from './CourseShow';
    import StudentEnrollment from './../Components/StudentEnrollment'
    import PaymentGateways from './../Components/PaymentGateways'

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
            StudentEnrollment, PaymentGateways
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
            return this.process === '' ? false : true;
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

            payment_gateways: {
              type: Array,
              default: () => []
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
            this.process = `Validating your information...`;
            this.register({
                    ...this.student,
                    raw: true,
                    for_real: false,
            })
            .then(response => {
               this.errors = null;
               this.selectPaymentGateway = true; 
               this.process = '';
             
            })
            .catch(e => {
                this.errors = e.response ? e.response.data.errors : [];
                this.freeProcess();
            })
          },

          initializeGateway(selectedGateway){
            this.selectPaymentGateway = false;
            const gateway = this.payment_gateways.find(g => g.gateway == selectedGateway);
            switch(selectedGateway){
              case 'paystack':
                this.initializePaystack(gateway);
              break;

              default:
                toastr.error("We do not support that payment gateway yet. We are working on it.");
                this.freeProcess();
              break;
            }
          },

          initializePaystack(gateway){
            this.process = `Initializing payment gateway...`;
             let paystackScript = document.createElement('script')
              paystackScript.setAttribute('src', 'https://js.paystack.co/v1/inline.js');
              document.head.appendChild(paystackScript);

              paystackScript.onload = (e) => {
                this.init_payment = false;
                toastr.success('Payment gateway initialized');
                this.paystackPayment(gateway);
              };

              paystackScript.onerror = (e) => {
                 this.init_payment = false;
                 toastr.error('Payment gateway initialization failed');
                 this.freeProcess()
              };
          },

          paystackPayment(gateway){
            const handler = PaystackPop.setup({
              key: gateway.credentials.public_key,
              email: this.student.email,
              amount: this.course.price * 100,
              currency: "NGN",
              ref: this.student.id,
              firstname: this.student.first_name,
              lastname:  this.student.first_name,
              metadata: {
                custom_fields: [
                    {
                        course: this.course.title,
                    }
                ]
              },
              callback: (response) => {
                  toastr.success(`Payment successful`);
                  this.process = `Registering you as ${this.student.first_name} ${this.student.last_name}`;
                  console.log(response);
                  this.register({
                    ...this.student,
                    payment_ref: response.reference,
                    raw: true,
                    for_real: true,
                    payment_gateway_id: gateway.id
                  })
                  .then(response => {
                    this.student = response.data;
                    this.loading = false;
                    this.showEnrollment = true;
                  })
                  .catch(e => {
                    toastr.error(`Registration failed: ${e.message}`)
                  })
                  .finally(() => {
                      this.freeProcess();
                  })
                  
              },
              onClose: () => {
                  toastr.warning(`Enrollment aborted`);
                  this.freeProcess()
              }
            });
            this.process = '';
            handler.openIframe();
          },
        }

    }
</script>