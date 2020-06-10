<template>
    <v-container>
        <v-row justify="center">
            <v-col cols="12" md="8" lg="6">
                <v-expansion-panels
                popout
                focusable
                >
                <v-expansion-panel
                    v-for="(gateway, g) in gateways"
                    :key="g"
                >
                    <v-expansion-panel-header>
                        {{ gateway.gateway_name }}
                        <v-spacer></v-spacer>
                        <v-icon v-if="gateway.data.credentials_complete" color="success" title="Credentials complete">check_circle</v-icon>
                        <v-icon v-else color="red" title="Some credentials are missing">report_problem</v-icon>
                    </v-expansion-panel-header>
                    <v-expansion-panel-content>
                        <div class="my-3">
                            <form @submit.prevent="saveGateway(g)" >
                                <v-switch v-model="gateway.data.active" :label="`Activate ${gateway.gateway_name}`" ></v-switch>
                                <template v-if="gateway.data.active">
                                    <template v-for="(credential, c) in gateway.credentials">
                                        <x-input :key="c" :errors="errors" :name="credential.slug" :label="credential.name" v-model="gateway.data.credentials[credential.slug]" />
                                    </template>
                                </template>

                                <x-button type="sumbit" :loading="loading == g"  :color="account.theme_color" dark>Save</x-button>
                            </form> 
                    </div>
                    
                    </v-expansion-panel-content>
                </v-expansion-panel>
                </v-expansion-panels>
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
            gateways: Array,
        },
        computed: {
            ...mapState({
              auth: state => state.auth,
              authenticated: state => state.authenticated,
            }),

            errors(){
                return this.$page.errors;
            },
        },

        methods: {
            saveGateway(i){
                this.loading = i;
                const data = {
                    gateway: this.gateways[i].gateway,
                    ...this.gateways[i].data,
                }
                axios.post(this.route('account.payment.gateway.store', { account: this.account.username }), data)
                .then(response => {
                   this.gateways[i].data = response.data
                    toastr.success(`${this.gateways[i].gateway_name} settings saved`)
                })
                .catch(e => {
                    toastr.error(`${this.gateways[i].gateway_name} settings not saved`)
                })
                .finally(() => {
                    this.loading = null
                })
            }
        },

        mounted(){

        }
    }
</script>