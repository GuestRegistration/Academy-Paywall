<template>
<v-app light>
        <div class="d-flex align-items-center border-top border-top-5 border-primary bg-gray-700">
            <div class="container mt-lg-5">
                <div class="row justify-content-center">
                    <div class="col-12 col-sm-9 col-md-6 col-lg-4 my-5">
                        <div class="text-center">
                            <h1>
                                <inertia-link :href="route('home')" class="prevent-default">
                                    {{ $page.config.app_name }}
                                </inertia-link>
                            </h1>
                        </div>
                        
                        <v-card outlined class="py-5">
                            <v-card-text>
                                 <h2 class="text-center my-3">
                                    Sign in
                                </h2>

                                <signin-form />

                            </v-card-text>
                        </v-card>
                    </div>
                </div> <!-- / .row -->
            </div>
        </div>
        </v-app>
</template>

<script>
    import SigninForm from '@/components/SigninForm';

    export default {
        name: 'SigninPage',
        components: { SigninForm },
         metaInfo()
         {
             return{
                title: `Signin`,
                titleTemplate: '%s - AcadaApp',
             }
        },

    }
</script>
