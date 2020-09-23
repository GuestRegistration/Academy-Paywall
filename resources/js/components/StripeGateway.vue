<template>
    <v-container>
        <v-row >
            <v-dialog v-model="dialog" scrollable  persistent max-width="500px">
                <form @submit.prevent="submit" action="/" method="post" class="payment-form">
                    <v-card>
                        <v-card-title>
                            <label :for="`card-element-${_uid}`">
                                <v-icon :color="color" size="30">credit_card</v-icon> Credit or debit card
                            </label>
                        </v-card-title>
                        <v-divider></v-divider>
                        <v-card-text>
                            <div class="my-3">
                                
                                <div  class="my-3" :id="`card-element-${_uid}`">
                                <!-- A Stripe Element will be inserted here. -->
                                </div>
                                <!-- Used to display Element errors. -->
                                <div id="card-errors" class="text-danger" role="alert">{{error}}</div>
                            </div>
                            <v-alert 
                                v-if="processing"
                                border="left"
                                colored-border
                                :color="color"
                                elevation="2"
                            >
                                {{process}}
                            </v-alert>
                        </v-card-text>
                        <v-card-actions>
                            <v-btn type="submit" :color="color" dark :loading="processing" >Pay {{ amount | money(currency) }}</v-btn>
                            <v-spacer></v-spacer>
                            <v-btn type="button" color="red" dark text @click="close">Cancel</v-btn>
                        </v-card-actions>
                    </v-card> 
                </form>
            </v-dialog>  
        </v-row>    
    </v-container>
</template>

<script>
    export default {
        name: "StripeGateway",
        data(){
            return {
                dialog: false,
                process: '',
                error: '',
                stripe: null,
                card: null,
            }
        },
        props: {
            publishableKey: String,
            amount: Number,
            currency: String,
            charge_callback: Function,
            color: {
                type: String,
                default: () => '#000'
            }
        },

        computed: {
            processing(){
                return this.process === '' ? false : true
            }
        },

        methods: {
            open(){
                this.dialog = true;
                this.initialize();
            },

            initialize()
            {
                this.setStripe()
                .then(() => {
                    const elements = this.stripe.elements();
                    const style = {
                        base: {
                            fontSize: '16px',
                            color: '#32325d',
                        },
                    };
                    // Create an instance of the card Element.
                    this.card = elements.create('card', {style: style});
                    // Add an instance of the card Element into the `card-element` <div>.
                    this.card.mount(`#card-element-${this._uid}`);
                })
                .catch(e => {
                    toastr.error('Payment gateway initialization failed');
                })
            },

            setStripe()
            {
                return new Promise((resolve, reject) => {

                    if(document.querySelector("[data-stripe='true']") !== null){
                        this.stripe = Stripe(this.publishableKey);
                        this.$emit('gateway-initailized');
                        resolve();
                        return;
                    }
                    this.process = `Initializing payment gateway...`;
                    let stripeScript = document.createElement('script')
                    stripeScript.setAttribute('src', 'https://js.stripe.com/v3/');
                    document.head.appendChild(stripeScript);
                    stripeScript.onload = (e) => {
                        this.$emit('gateway-initailized');
                        stripeScript.setAttribute('data-stripe', 'true');
                        toastr.success('Payment gateway initialized');
                        this.process = '';
                        this.stripe = Stripe(this.publishableKey);
                        resolve();
                    };
                    stripeScript.onerror = (e) => {
                        this.process = '';
                        reject(e);
                    }; 
                })
            },

            submit()
            {
               const vm = this
               this.process = "Processing your payment...";
                // Create a token or display an error when the form is submitted.
                vm.stripe.createToken(this.card).then((response) => {
                    if (response.error) {
                        vm.error = response.error.message;
                        vm.process = '';
                    } else {
                        vm.error = '';
                        vm.charge_callback(response.token.id)
                        .then(response => {
                            this.$emit('success', response);
                        })
                        .catch(e => {
                            this.$emit('error', e);
                        })
                        .finally(() => {
                            vm.process = '';
                        })
                    }
                });
            },

            close(){
                this.dialog = false
                this.process = '';
                this.card = null;
                this.$emit('aborted');
            }
        },
    }
</script>

<style scoped>
    /* *
    * The CSS shown here will not be introduced in the Quickstart guide, but shows
    * how you can use CSS to style your Element's container.
    */
    .StripeElement {
    box-sizing: border-box;

    height: 40px;

    padding: 10px 12px;

    border: 1px solid transparent;
    border-radius: 4px;
    background-color: white;

    box-shadow: 0 1px 3px 0 #e6ebf1;
    -webkit-transition: box-shadow 150ms ease;
    transition: box-shadow 150ms ease;
    }

    .StripeElement--focus {
    box-shadow: 0 1px 3px 0 #cfd7df;
    }

    .StripeElement--invalid {
    border-color: #fa755a;
    }

    .StripeElement--webkit-autofill {
    background-color: #fefde5 !important;
    }
</style>