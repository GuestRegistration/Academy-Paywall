<template>
    <v-container>
        <v-row justify="center">
            <v-col cols="12" md="8">
                <h2 class="text-center">Payment Gateway</h2>
                <v-alert icon="report_problem" prominent text type="error" v-if="Object.keys(errors).length">
                    Set up a payment gateway
                </v-alert>

                 <form @submit.prevent="saveGateway" >
                    <v-combobox
                        v-model="form.country"
                        :items="countryOptions"
                        label="Select country"
                        append-icon="arrow_drop_down"
                        outlined
                        :error="errors && errors.country && errors.country.length ? true : false"
                        :error-messages="errors && errors.country && errors.country.length ? errors.country[0] : ''"
                       e :filter="filterCountries"
                        @change="countryChanged"
                        >
                            <template v-slot:item="data" >
                                <div class="d-flex align-items-center py-1">
                                    <div class="mr-2">
                                        <span :class="`flag-icon flag-icon-${data.item.toLowerCase()}`"></span>
                                    </div>
                                    <div>
                                        {{ countries[data.item].name }}
                                    </div>
                                </div>
                            </template>
                            <template v-slot:selection="data">
                                <div class="d-flex align-items-center">
                                    <div class="mr-2">
                                        <span :class="`flag-icon flag-icon-${data.item.toLowerCase()}`"></span>
                                    </div>
                                    <div>{{ countries[data.item].name }}</div>
                                </div>
                            </template>
                    </v-combobox>

                    <!-- <x-select :errors="errors" :value="form.currency" label="Currency" name="currency" :items="availableCurrencies" outlined @change="currencyChanged" /> -->
                     <template v-if="form.country">
                        <h4 class="text-center">Available gateway in  <span :class="`flag-icon flag-icon-${form.country.toLowerCase()}`"></span> {{ countries[form.country].name }}</h4>
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
                            <p class="grey--text">No payment gateway integrated in {{ countries[form.country].name }} yet</p>
                        </div>
                     </template>
                     <template v-else>
                          <div class="text-center grey--text">
                              <p>Select country</p>
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
    import 'flag-icon-css/css/flag-icon.min.css';

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
            countries: Object,
        },
        computed: {
            ...mapState({
              auth: state => state.auth,
              authenticated: state => state.authenticated,
            }),

            errors(){
                return this.$page.errors;
            },

            // availableCurrencies(){
            //     return this.currencies.map((currency) => currency.currency.toUpperCase());
            // },

            gateways(){
               return this.form.country ? this.countries[this.form.country].gateways : [];
            },

            countryCodes(){
                return Object.keys(this.countries);
            },

            countryOptions(){
                return this.countryCodes
                    .map(code => this.countries[code].name).sort()
                    .map(country => this.countryCodes.find(code => this.countries[code].name == country));
            }
        },

        methods: {
            countryChanged(country){
                if(this.gateway && country == this.gateway.country){
                    this.form = { ...this.gateway };
                }else{
                    this.form =  {
                        country,
                        active: false,
                        gateway: this.gateway ? this.gateway.gateway : undefined,
                        credentials: this.gateway ? this.gateway.credentials : {}
                    }
                }
            },

            filterCountries(item, queryText, itemText){
                return this.countries[itemText].name.toLocaleLowerCase().indexOf(queryText.toLocaleLowerCase()) > -1
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
