<template>
    <v-container>
        <form @submit.prevent="submit">
            <v-row justify="center" align="center">
                <v-col cols="12" md="6">
                    <h4>Personal Information</h4>
                    <v-divider></v-divider>
                     <div class="text-center mb-3" >
                        <h5>Avatar</h5>
                        <x-file-input :errors="errors" name="avatar" label="Avatar" :src="auth.profile.avatar" color="primary" :isAvatar="true" @change="getAvatar" />
                    </div>
                    <x-input :errors="errors" name="first_name" type="text" v-model="form.first_name" label="First name"  prependInnerIcon="account_box" />
                    <x-input :errors="errors" name="last_name" type="text" v-model="form.last_name" label="Last name"  prependInnerIcon="account_box" />
                    <x-input :errors="errors" name="username" type="text" v-model="form.username" label="Username" prependInnerIcon="alternate_email" />
                    <x-input :errors="errors" name="email" type="email" v-model="form.email" label="Email"  prependInnerIcon="email"/>
                    <x-input :errors="errors" name="phone" type="tel" v-model="form.phone" label="Phone"  prependInnerIcon="call" />
                    <x-textarea :errors="errors" name="bio" v-model="form.bio" label="Bio" />
                </v-col>
                
            </v-row>
            <v-btn fixed dark fab bottom right x-large=""
                :loading="loading" type="submit"
                color="primary">
                <v-icon>mdi-check</v-icon>
            </v-btn>
        </form>
    </v-container>
</template>

<script>
    import {mapState} from "vuex";
    import App from '@/layouts/App';

    export default {
        name: "ProfileEdit",
        layout: (h, page) => h(App, [page]),
        metaInfo()
         {
             return{
                title: `Profile Edit ${this.profile.at_username}`,
                titleTemplate: '%s - AcadaApp',
             }
        },

        data(){
            return {
                loading: false,
                form: {},
            }
        },
        props: {
            profile: Object,
           
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
            formData() {
                const form = new FormData;
                Object.keys(this.form).forEach(key => {
                    if(this.form[key]){
                        form.append(key, this.form[key]);
                    }
                });

                return form;
            },
           async submit(){
               this.loading = true;
               await this.$inertia.post(this.route('profile.update.alt', {profile: this.profile.id}), this.formData());
               this.loading = false;
            },

            getAvatar(files){
                this.form.avatar = files[0];
            },

        },

        mounted(){
            this.form = {...this.profile};
        }
    }
</script>