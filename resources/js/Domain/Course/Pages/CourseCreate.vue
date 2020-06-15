<template>
    <v-container>
        <stripe-gateway ref="stripeGateway" :pk="stripe_pk" :amount="payg.amount" :currency="payg.currency" :color="account.theme_color" :charge_callback="paymentCallback" @success="paymentSuccessful" @error="paymentError" />
        
        <v-row justify="center">
            <v-col cols="12" md="8">
                <template v-if="payment || (account.subscription && !account.subscription.expired)">
                    <v-alert v-if="payment"  icon="info" prominent text type="info">
                        You are adding this course with the "Pay As You Go" payment of {{payment.amount | money(payment.currency)}} on {{payment.time}}
                    </v-alert>
                    <v-alert v-else-if="account.subscription && !account.subscription.expired"  icon="info" prominent text type="info">
                        You are adding this course with your subscription
                    </v-alert>
                    
                    <v-card :loading="loading" outlined pa-md-2> 
                        <v-card-title> New Course</v-card-title>
                        <v-divider></v-divider>
                        <v-card-text>                                         
                            <course-form @submit="submit" :loading="loading" :color="account.theme_color" />              
                        </v-card-text>
                    </v-card>
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