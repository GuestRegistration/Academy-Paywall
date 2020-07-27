<template>
    <v-container>
        <v-row justify="center">
            <v-col cols="12" md="8" lg="6">
                <h4 class="text-center">Payment Gateways</h4>
                 <form @submit.prevent="saveGateway" >
                    <x-select :errors="errors" :value="form.currency" label="Currency" name="currency" :items="availableCurrencies" outlined @change="currencyChanged" />
                     <template v-if="form.currency"> 
                        <h5>Available gateway for {{form.currency}}</h5>
                        <v-card outlined >
                            <v-card-text v-if="gateways.length">
                                <v-radio-group v-model="form.gateway">
                                        <v-radio v-for="(gateway, g) in gateways" :key="g" :label="gateway.label" :value="gateway.name" :color="account.theme_color"></v-radio>
                                    </v-radio-group>
                                    <template v-if="form.gateway">
                                        <h5 class="text-center">{{gateways.find(g=>g.name==form.gateway).label}} Setup</h5>
                                        <v-switch v-model="form.active" label="Enable" :color="account.theme_color" ></v-switch>
                                        <x-input v-for="(credential, c) in credentials" :key="c" :errors="errors" :name="`credentials.${credential.slug}`" :label="credential.name" v-model="form.credentials[credential.slug]" :disabled="!form.active" />
                                        <x-button type="sumbit" :loading="loading"  :color="account.theme_color" dark>Save</x-button>
                                    </template>
                            </v-card-text>
                            <v-card-text v-else class="text-muted text-center">
                                <p class="text-muted">No supported gateway support for {{form.currency}}  yet</p>
                            </v-card-text>
                        </v-card>
                     </template>
                </form> 
            </v-col>
        </v-row>
    </v-container>
</template>

<script>
    import {mapState} from "vuex";
    import App from '@/layouts/App';

    export default {
        name: "AccountPayment",
        layout: (h, page) => h(App, [page]),
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

            credentials(){
                const gateway = this.form.gateway ? this.gateways.find(gateway => gateway.name == this.form.gateway) : null;
                return gateway ? gateway.credentials : [];
            }

        },

        methods: {
            currencyChanged(currency){
                if(this.gateway && currency == this.gateway.currency){
                    this.form = { ...this.gateway };
                    return;
                }
                this.form =  {
                    currency,
                    active: false,
                    gateway: undefined,
                    credentials: {}
                }
            },
            
           async saveGateway(){
                this.loading = true;
                await this.$inertia.post(this.route('account.payment.gateway.store', { account: this.account.username }), this.form);
                this.loading = false;
            }
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