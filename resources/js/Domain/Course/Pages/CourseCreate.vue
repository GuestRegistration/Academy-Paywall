<template>
    <v-container class="p-0">        
        <v-row justify="center">
            <v-col cols="12" md="8">
                <template v-if="payment || (account.subscription && !account.subscription.expired)">
                    <h3 class="mb-2">New Course</h3>
                    <v-divider></v-divider>
                    <v-alert v-if="payment"  icon="info" prominent text type="info" class="my-2">
                        You are adding this course with the "Pay As You Go" payment of {{payment.amount | money(payment.currency)}} on {{payment.time}}
                    </v-alert>
                    <v-alert v-else-if="account.subscription && !account.subscription.expired"  icon="info"  class="my-2" prominent text type="info">
                        You are adding this course with your subscription
                        <br>
                        Slot Remaining: {{ account.courses_slot }}
                    </v-alert>
                    <course-form v-if="account.is_unlimited || account.courses_slot > 0" @submit="submit" :loading="loading" :color="account.theme_color" :instructors="instructors" />
                </template>
                <template v-else-if="account.subscription && account.subscription.expired">
                    <v-alert  icon="info" prominent text type="info">
                    Your subscription has expired. Go to <inertia-link :href="route('account.subscription.show', {account: account.username})">YOUR SUBSCRIPTIONS</inertia-link> to subscribe
                    </v-alert>
                    <div class="my-5 text-center">
                        <h4>Pay As You Go</h4>
                        <p>You can pay {{payg.amount | money(payg.currency)}} to add a course if you are not ready to renew your subscription</p>
                        <v-btn @click="openStripeGateway" dark :color="account.theme_color" >Do "Pay As You Go"</v-btn>
                    </div>
                </template>
                <template v-else-if="!payment">
                    <v-alert icon="info" prominent text type="info">
                        You are currently on the "Pay As You Go" Plan. Adding a new courses cost {{payg.amount | money(payg.currency)}}
                    </v-alert>
                    <v-btn @click="openStripeGateway" dark :color="account.theme_color" >Pay {{payg.amount | money(payg.currency)}}</v-btn>
                    <inertia-link :href="route('account.subscription.show', {account: account.username})" class="prevent-default">
                        <v-btn dark :color="account.theme_color" >View subscription</v-btn>
                    </inertia-link>
                </template>
            </v-col>
        </v-row>
        <stripe-gateway ref="stripeGateway" :publishable-key="stripe_pk" :amount="payg.amount" :currency="payg.currency" :color="account.theme_color" :charge_callback="paymentCallback" @success="paymentSuccessful" @error="paymentError" />
    </v-container>

</template>

<script>
    import App from '@/layouts/App';
    import CourseForm from './../Components/CourseForm'
    export default {
        name: "CourseCreate",
        layout: (h, page) => h(App, [page]),
        components: {
            CourseForm
        },
         metaInfo()
         {
             return{
                title: `${this.course ? this.course.title+' edit' : 'New course '+this.account.at_username}`,
                titleTemplate: '%s - AcadaApp',
             }
        },
        data(){
            return {
                payment: null,
                loading: false,
            }
        },
        props:{
            account: Object,
            course: Object,
            payg: Object,
            instructors: Array,
            stripe_pk: String,
        },
        methods: {
           async submit(formData){
               this.loading = true;
              await this.$inertia.post(this.route('account.course.store',{account: this.account.username}), formData);
               this.loading = false;
            },

           paymentCallback(token){
               return new Promise((resolve, reject) => {
                   axios.post(this.route('subscription.payg', {account: this.account.username}), {
                       token,
                   })
                   .then(response => {
                       resolve(response);
                   })
                   .catch(e => {
                       reject(e);
                   })
               })
           },

           paymentSuccessful(response){
              toastr.success("Subscription successfull");
              this.payment = response.data.payment;
              this.closeStripeGateway();
           },

          paymentError(error){
               toastr.error("There was an error "+error.message);
                this.closeStripeGateway();
           },
          openStripeGateway(){
              this.$refs.stripeGateway.open();
          },

           closeStripeGateway(){
              this.$refs.stripeGateway.close();
           }

        },

        mounted(){
            this.payment = this.$page.payment;           
        }
    }
</script>