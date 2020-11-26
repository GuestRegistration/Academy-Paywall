<template>
        <v-container>
        <v-row >
            <v-dialog v-model="dialog" scrollable  persistent max-width="500px">
                    <v-card>
                        <v-card-title>
                           Complete Payment with PayPal
                        </v-card-title>
                        <v-divider></v-divider>
                        <v-card-text>
                            <div class="py-5 text-center">
                                <div id="paypal-button"></div>
                            </div>
                        </v-card-text>
                        <v-card-actions>
                            <v-spacer></v-spacer>
                            <v-btn type="button" color="red" dark text @click="close">Cancel</v-btn>
                        </v-card-actions>
                    </v-card> 
            </v-dialog>  
        </v-row>    
    </v-container>
</template>

<script>
    export default {
        name: "PaypalGateway",
       
        data(){
            return {
                dialog: false,
                process: '',
                rendered: false,
            }
        },
        props: {
            amount: String,
            currency: String,
            client: Object,
            environment: String,
            description: String,
            buyerNote: String,
            charge_callback: Function,
        },

        computed: {
        },

        methods: {
            open(){
                this.dialog = true;
                this.initialize();
            },

            initialize()
            {
                this.setPaypal()
                .then(() => {
                    this.$emit('init-success');
                    this.paypalPayment();
                })
                .catch(e => {
                    this.$emit('init-failed');
                })
            },

            setPaypal()
            {
                return new Promise((resolve, reject) => {
                    if(document.querySelector("[data-paypal='true']") !== null){
                        resolve();
                        return;
                    }
                    this.$emit('process', 'Initializing payment gateway...');
                    let paypalScript = document.createElement('script')
                    paypalScript.setAttribute('src', 'https://www.paypalobjects.com/api/checkout.js');
                    document.head.appendChild(paypalScript);

                    paypalScript.onload = (e) => {
                        paypalScript.setAttribute('data-paypal', 'true');
                        this.$emit('process', null);
                        resolve();
                    };
                    
                    paypalScript.onerror = (e) => {
                        this.$emit('process', null);
                        reject(e);
                    }; 
                })
            },

            paypalPayment(){
               if(this.rendered) return;
                paypal.Button.render({
                    env: this.environment,
                    client: this.client,
                    locale: 'en_US',
                    style: {
                    size: 'responsive',
                    color: 'gold',
                    shape: 'rect',
                    },
                    commit: true,
                    payment: (data, actions) => {
                        return actions.payment.create({
                            transactions: [{
                                amount: {
                                    total: this.amount,
                                    currency: this.currency
                                },
                                description: this.description
                            }],
                            note_to_payer: this.buyerNote
                        });
                    },
                    // Execute the payment
                    onAuthorize: (data, actions) => {
                        const vm = this;
                        return actions.payment.execute().then(function() {
                            vm.$emit('payment-success');
                            vm.charge_callback(data)
                            .then((response) => {
                                vm.$emit('success', response);
                            })
                            .catch(e => {
                                vm.$emit('error', e);
                            })
                        });
                    }
                }, '#paypal-button');
                
                this.rendered = true;
            },

            close(){
                this.dialog = false
                this.process = '';
                this.$emit('aborted');
            }
        },
    }
</script>
