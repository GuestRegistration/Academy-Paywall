<template>
    <v-container>
        <v-row >
            <v-dialog v-model="dialog.payment" scrollable  persistent max-width="400px">
                <v-card>
                    <v-card-title>
                        <label :for="`card-element-${_uid}`">
                            <v-icon :color="color" size="30">credit_card</v-icon> Credit or Debit Card
                        </label>
                    </v-card-title>
                    <v-divider></v-divider>
                    <v-card-text>
                        <div class="my-3">
                            <credit-card v-model="card" />
                            <v-alert
                                :color="color"
                                border="left"
                                elevation="2"
                                colored-border
                                v-if="processing"
                                >
                                {{ process }}
                            </v-alert>
                        </div>
                    </v-card-text>
                    <v-card-actions>
                        <v-btn @click="midtransPayment" :color="color" dark :loading="processing" >Pay {{ amount | money(currency) }}</v-btn>
                        <v-spacer></v-spacer>
                        <v-btn type="button" color="red" dark text @click="close">Cancel</v-btn>
                    </v-card-actions>
                </v-card> 
            </v-dialog> 

            <v-dialog v-model="dialog.authentication" scrollable  persistent max-width="500px">
                <v-card>
                    <v-card-title>
                        <label :for="`card-element-${_uid}`">
                            <v-icon :color="color" size="30">security</v-icon> Authentication
                        </label>
                    </v-card-title>
                    <v-divider></v-divider>
                    <v-card-text>
                        <iframe :src="authentication_redirect_url" frameborder="0" width="100%" height="400px"></iframe>
                    </v-card-text>
                </v-card> 
            </v-dialog> 

        </v-row>    
    </v-container>
</template>

<script>
import CreditCard from '@fracto/vue-credit-card/src/VCreditCard';

export default {
    name: "MidtransGateway",
    components: {
        CreditCard
    },
    props:{
        amount: Number,
        currency: String,
        clientKey: String,
        charge: Function,
        charge_callback: Function,
        environment: {
            type: String,
            default: () => 'sandbox'
        },
        color: {
            type: String,
            default: () => '#000'
        },
    },
    data(){
        return {
            dialog: {
                payment: false,
                authentication: false,
            },
            card: {},
            process: '',
            authentication_redirect_url: '',
        }
    },
    computed:{
        processing(){
            return this.process === '' ? false : true
        }
    },

    methods: {
        open(){
            this.dialog.payment = true;
            this.initialize();
        },

        close(){
            this.dialog.payment = false;
            this.dialog.authentication = false;
            this.process = '';
            this.$emit('aborted');
        },

        initialize()
        {
            this.setMidtrans3ds()
            .then(() => {
                this.$emit('init-success');
            })
            .catch(e => {
                this.$emit('init-failed');
            })
        },

        setMidtrans3ds()
        {
            return new Promise((resolve, reject) => {
                if(document.querySelector("[data-midtrans='true']") !== null){
                    resolve();
                    return;
                }

                // console.log('client key using:', this.clientKey);

                this.$emit('process', 'Initializing payment gateway...');
                let midtrans3ds = document.createElement('script')

                midtrans3ds.setAttribute('src', 'https://api.midtrans.com/v2/assets/js/midtrans-new-3ds.min.js');
                midtrans3ds.setAttribute('id', 'midtrans-script');
                midtrans3ds.setAttribute('type', 'text/javascript');
                midtrans3ds.setAttribute('data-environment', this.environment);
                midtrans3ds.setAttribute('data-client-key', this.clientKey);

                document.head.appendChild(midtrans3ds);

                midtrans3ds.onload = (e) => {
                    midtrans3ds.setAttribute('data-midtrans', 'true');
                    this.$emit('process', null);
                    resolve();
                };
                
                midtrans3ds.onerror = (e) => {
                    this.$emit('process', null);
                    reject(e);
                }; 
            })
        },

        midtransPayment()
        {
            
            var cardData = {
                card_number: this.card.number,
                card_exp_month: this.card.month,
                card_exp_year: this.card.year.length == 2 ? `20${this.card.year}` : this.card.year,
                card_cvv: this.card.cvv,
            };

            this.process = 'processing card...';

            // trigger `getCardToken` function
            MidtransNew3ds.getCardToken(cardData, {
                onSuccess: (response) => {
                    // Success to get card token_id, implement as you wish here
                    // console.log('Success to get card token_id, response:', response);
                    this.process = 'charging card...';

                    this.charge(response.token_id)
                    .then((response) => {
                        // console.log('Response from charge:', response);

                        // if transaction has been completed
                        if(response.status_code == 200){
                            this.runChargeCallback(response);
                        }
                        // If authentication is required
                        else if(response.status_code == 201 && response.redirect_url){
                            this.authentication_redirect_url = response.redirect_url;
                            this.midtransAuthentication();
                        }else{
                            this.$emit('error', {message: `Unable to charge card. ${response.status_message}`});
                        }
                    })
                    .catch(e => {
                        // console.log('Error from charging card:', e);
                        this.$emit('error', e);
                    })
                    .finally(() => {
                        this.process = '';
                    })
                },
                onFailure: (response) => {
                    this.process = '';
                    this.dialog.payment = false;
                    this.$emit('error', {message: `Couldn't process card`});
                }
            });
        },

        midtransAuthentication()
        {

            MidtransNew3ds.authenticate(this.authentication_redirect_url, {

                performAuthentication: (redirect_url) => {
                    this.dialog.authentication = true;
                },
                onSuccess: response => {
                    // console.log('onSuccess response:',response);
                    this.dialog.authentication = false;
                    this.dialog.payment = false;
                    this.runChargeCallback(response)
                },
                onFailure: response => {
                    // 3ds authentication failure, implement payment failure scenario
                    // console.log('onFailure response:', response);
                    this.dialog.authentication = false;
                    this.$emit('error', {message: `Authentication failed: ${response.status_message}`});
                },
                onPending: function(response){
                    // transaction is pending, transaction result will be notified later via POST notification, implement as you wish here
                    console.log('onPending response:', response);
                    this.dialog.authentication = false;
                }

            });
        },

        runChargeCallback(charge_response){
            this.charge_callback(charge_response)
            .then(response => {
                this.$emit('success', response);
            })
            .catch(e => {
                this.$emit('error', e);
            })
            .finally(() => {
                this.process = '';
            })
        }
    }
}
</script>