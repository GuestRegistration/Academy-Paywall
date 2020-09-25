<template>
    <v-container>
        <v-row justify="center">
            <v-col cols="12" md="4">
                <v-card outlined>
                    <v-card-text>
                        <div class="text-center">
                            <inertia-link :href="route('home')" class="prevent-default">
                                <img src="/images/acada-icon.png" width="200px" />
                            </inertia-link>
                            <h1>Sign in</h1>
                        </div>
                        <signin-form />
                    </v-card-text>
                </v-card>
            </v-col>
        </v-row>
    </v-container>
</template>

<script>
    import App from '@/layouts/App.vue';
    import SigninForm from './Components/SigninForm.vue';

    export default {
        name: 'SigninPage',
        layout: (h, page) => h(App, [page]),

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
