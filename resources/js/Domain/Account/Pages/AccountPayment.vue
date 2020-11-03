<template>
    <v-container>
        <v-row justify="center">
            <v-col cols="12" md="8">
                <h4 class="text-center">Payment Gateways</h4>
                <v-alert icon="report_problem" prominent text type="error" v-if="Object.keys(errors).length">
                    Set up a payment gateway
                </v-alert>
                 <form @submit.prevent="saveGateway" >
                    <x-select :errors="errors" :value="form.currency" label="Currency" name="currency" :items="availableCurrencies" outlined @change="currencyChanged" />
                     <template v-if="form.currency"> 
                        <h4 class="text-center">Available gateway for {{form.currency}}</h4>
                        <div v-if="gateways.length">
                            <v-row justify="center">
                                <v-col v-for="(gateway, g) in gateways" :key="g"
                                cols="12"
                                >
                                    <payment-gateway :gateway="gateway" :form="form" @gateway-updated="gatewayUpdated" />
                                </v-col>
                            </v-row>
                        </div>
                        <div v-else class="text-center">
                            <p class="grey--text">No payment gateway available for {{ form.currency }} yet</p>
                        </div>
                     </template>
                </form> 
            </v-col>
        </v-row>
    </v-container>
</template>

<script>
    import {mapState} from "vuex";
    import App from '@/layouts/App';
    import PaymentGateway from '../Components/PaymentGateway.vue';

    export default {
        name: "AccountPayment",
        layout: (h, page) => h(App, [page]),
        components: {
            PaymentGateway
        },
        metaInfo()
         {
             return{
                title: `Payment setup ${this.account.at_username}`,
                titleTemplate: '%s - AcadaApp',
             }
        },

        data(){
            return {
                loading: null,
                form: {},
            }
        },
        props: {
            account: Object,
            gateway: Object,
            currencies: Array,
        },
        computed: {
            ...mapState({
              auth: state => state.auth,
              authenticated: state => state.authenticated,
            }),

            errors(){
                return this.$page.errors;
            },

            availableCurrencies(){
                return this.currencies.map((currency) => currency.currency.toUpperCase());
            },

            gateways(){
               return this.form.currency ? this.currencies.find(currency => currency.currency == this.form.currency).gateways || [] : [];
            },

        },

        methods: {
            currencyChanged(currency){
                if(this.gateway && currency == this.gateway.currency){
                    this.form = { ...this.gateway };
                }else{
                    this.form =  {
                        currency,
                        active: false,
                        gateway: this.gateway ? this.gateway.gateway : undefined,
                        credentials: this.gateway ? this.gateway.credentials : {}
                    }
                }
            },

            gatewayUpdated(gateway) {
                this.form = gateway
            },
            
        },

        mounted(){
            if(this.gateway){
                this.form = {
                    ...this.gateway
                }
            }
        }
    }
</script>