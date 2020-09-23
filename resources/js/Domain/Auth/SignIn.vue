<template>
    <v-container>
        <v-row justify="center">
            <v-col cols="12" md="4">
                <div class="text-center mb-3">
                    <h1>
                        <inertia-link :href="route('home')" class="prevent-default">
                            {{ $page.config.app_name }}
                        </inertia-link>
                    </h1>
                    <p class="text-muted"> Sign in</p>
                </div>
                <v-card outlined class="py-2">
                    <v-card-text>
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
