<template>
<v-app light>
        <div class="d-flex align-items-center border-top border-top-5 border-primary bg-gray-700">
            <div class="container mt-lg-5">
                <div class="row justify-content-center">
                    <div class="col-12 col-sm-9 col-md-6 col-lg-4 my-5">
                        <div class="text-center">
                            <h1>
                                <inertia-link :href="route('home')" class="prevent-default">
                                    AcadaApp
                                </inertia-link>
                            </h1>
                        </div>
                        
                        <v-card outlined class="py-5">
                            <v-card-text>
                                 <h2 class="text-center my-3">
                                    Sign in
                                </h2>
                                 <v-alert
                                    v-if="status"
                                    icon="info"
                                    prominent
                                    text
                                    type="info"
                                    >
                                   {{status}}
                                </v-alert>
                                <!-- Form -->
                                <form @submit.prevent="submit">
                                    <div  class="tab-content py-3">
                                        <x-input :errors="errors" name="email" type="email" v-model="form.email" label="Email" />
                                        <!-- Submit -->
                                        <x-button :loading="ui.loading" type="submit"  dark color="accent-4" class="primary" block>
                                            Sign in
                                        </x-button>
                                    </div>
                                </form>
                            </v-card-text>
                        </v-card>
                    </div>
                </div> <!-- / .row -->
            </div>
        </div>
        </v-app>
</template>

<script>
    import  jstz from 'jstz';
    
    export default {
        name: 'SigninPage',
         metaInfo()
         {
             return{
                title: `Signin`,
                titleTemplate: '%s - AcadaApp',
             }
        },

        props: {
            errors: Object,
        },
        data() {
            return {
                form: {},
                ui: {
                    loading: false,
                },
            };
        },

        computed: {
            status(){
                return this.$page.status
            }
        },
        
        methods: {
            async submit() {
                this.ui.loading = true;
                await this.$inertia.post(this.route('signin.magic.link'), this.form)
                this.ui.loading = false;
            },
        },
        created(){
            this.form.timezone = jstz.determine().name();
        }
    }
</script>
