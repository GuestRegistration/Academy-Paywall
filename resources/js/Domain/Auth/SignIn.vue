<template>
<v-app light>
        <div class="d-flex align-items-center border-top border-top-5 border-primary bg-gray-700">
            <div class="container mt-lg-5">
                <div class="row justify-content-center">
                    <div class="col-12 col-sm-9 col-md-6 col-lg-4 my-5">
                        <!-- Heading -->
                        <v-card outlined class="py-5">
                            <v-card-text>
                                 <h2 class="text-center my-3">
                                    Sign in
                                </h2>
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

    export default {
        name: 'Login',

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
        methods: {
            async submit() {
                this.ui.loading = true;
                await this.$inertia.post(this.route('signin.magic.link'), this.form)

                this.ui.loading = false;
            },
        },
    }
</script>
