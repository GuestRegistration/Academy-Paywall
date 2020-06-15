<template>
    <div>
        <v-container>
            <stripe-gateway ref="stripeGateway" :pk="stripe_pk" :amount="plan.amount" :currency="plan.currency" :color="account.theme_color" :charge_callback="chargeCallback" @success="paymentSuccessful" @error="paymentError" />
            <v-row justify="center">
                <v-col cols="12" md="8" lg="6">
                    <h4>Subscriptions</h4>
                    <template v-if="!account.subscription">
                        <v-alert
                            icon="info"
                            prominent
                            text
                            type="info"
                            >
                            You are currently on the Pay As You Go Plan. Each course upload cost {{payg.amount | money(payg.currency)}}
                        </v-alert>
                    </template>
                    <v-expansion-panels
                    popout
                    focusable
                    >
                    <v-expansion-panel v-for="plan in plans" :key="plan.id" >
                        <v-expansion-panel-header>
                            {{ plan.name }}
                            <v-spacer></v-spacer>
                            <v-icon v-if="isSubscribed(plan)" color="success" title="Credentials complete">check_circle</v-icon>
                        </v-expansion-panel-header>
                        <v-expansion-panel-content>
                            <div class="m-3 text-center">
                                {{ plan.description }}
                                <div>
                                    <h1>{{plan.amount | money(plan.currency)}}</h1>
                                </div>
                                <template v-if="plan.amount > 0">
                                    <template v-if="!isSubscribed(plan)">
                                        <div>
                                            <v-btn @click="subscribe(plan)" :color="account.theme_color" dark>Subscribe</v-btn>
                                        </div>
                                    </template>
                                </template>
                                <template v-else>
                                   <v-alert
                                        v-if="!isSubscribed(plan)"
                                        icon="info"
                                        prominent
                                        text
                                        type="info"
                                        >
                                        This is an exclusive package. Contact <a href="mailto: support@acadaapp.com">support@acadaapp.com</a> for more information
                                    </v-alert>
                                </template>

                                <v-alert
                                        v-if="isSubscribed(plan)"
                                        icon="check_circle"
                                        prominent
                                        text
                                        type="success"
                                        my-2
                                    >
                                        You are currently subscribed
                                    </v-alert>
                               
                            </div>
                        </v-expansion-panel-content>
                    </v-expansion-panel>
                    </v-expansion-panels>
                </v-col>
            </v-row>
        </v-container>
    </div>
</template>

<script>
    import {mapState} from "vuex";
    import App from '@/layouts/App';

    export default {
        name: "AccounSubscription",
        layout: (h, page) => h(App, [page]),
        metaInfo()
         {
             return{
                title: `Subsription ${this.account.at_username}`,
                titleTemplate: '%s - AcadaApp',
             }
        },

        data(){
            return {
              plan: {},
            }
        },
        
        props: {
            account: Object,
            plans: Array,
            payg: Object,
            stripe_pk: String,
        },
        computed: {
            ...mapState({
              auth: state => state.auth,
              authenticated: state => state.authenticated,
            }),

            processing(){
                return this.process === '' ? false : true;
            },

            errors(){
                return this.$page.errors;
            },
        },

        methods: {
           isSubscribed(plan){
               if(!this.account.subscription) return false;
               return plan.id === this.account.subscription.subscription_plan_id ? true : false;
           },

           subscribe(plan){
              this.plan = plan;
              this.$refs.stripeGateway.open();
           },

           chargeCallback(token){
               return new Promise((resolve, reject) => {
                   axios.post(this.route('subscription.subscribe', {account: this.account.username}), {
                       token,
                       plan: this.plan.id,
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
              toastr.success("Subscription successfull")
              if(response.subscription){
                this.account.subscription = response.subscription
              }
              this.closeGateway();
           },

          paymentError(error){
               toastr.error("There was an error "+error.message);
                this.closeGateway();
           },

           closeGateway(){
              this.plan = {};
              this.$refs.stripeGateway.close();
           }
        }
    }
</script>

