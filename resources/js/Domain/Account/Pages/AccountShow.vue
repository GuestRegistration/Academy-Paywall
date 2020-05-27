<template>
    <v-container>
        <v-row justify="center" align="center">
           
            <v-col md="6">
                <div class="text-center mb-3" >
                    <v-avatar color="primary" size="100">
                        <v-icon dark size="100">mdi-account-circle</v-icon>
                    </v-avatar>
                </div>
                <v-card :loading="loading" outlined pa-2>  
                    <v-card-text>
                        <form @submit.prevent="submit">
                            <x-input :errors="errors" name="first_name" type="text" v-model="form.first_name" label="First name" />
                            <x-input :errors="errors" name="last_name" type="text" v-model="form.last_name" label="Last name" />
                            <x-input :errors="errors" name="email" type="email" v-model="form.email" label="Email" />
                            <x-input :errors="errors" name="phone" type="tel" v-model="form.phone" label="Phone" />
                            <!-- Submit -->
                            <x-button :loading="loading" type="submit"  dark color="accent-4" class="primary">
                               Save
                            </x-button>
                        </form>
                    </v-card-text>
                </v-card>
            </v-col>
        </v-row>
    </v-container>
</template>

<script>
    import App from '@/layouts/App';

    export default {
        name: "AccountShow",
        layout: (h, page) => h(App, [page]),
        data(){
            return {
                loading: false,
                form: {},
            }
        },
        props: {
            account: Object
        },
        computed: {
            errors(){
                return this.$page.errors;
            },
        },

        methods: {
           async submit(){
               this.loading = true;
               await this.$inertia.put(this.route('account.update'), this.form);
               this.loading = false;
            }
        },

        mounted(){
            this.form = this.account;
        }
    }
</script>