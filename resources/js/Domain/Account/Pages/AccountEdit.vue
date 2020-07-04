<template>
    <v-container>
        <form @submit.prevent="submit">
            <v-row justify="center" align="center">
                <v-col cols="12" md="6">
                    <h4>Academy Information</h4>
                    <v-divider></v-divider>
                    <x-input :errors="errors" name="name" type="text" v-model="form.name" label="Academy name"  prependInnerIcon="account_box" />
                    <x-input :errors="errors" name="username" type="text" v-model="form.username" label="Username" prependInnerIcon="alternate_email" />
                    <x-input :errors="errors" name="email" type="email" v-model="form.email" label="Email"  prependInnerIcon="email"/>
                    <x-input :errors="errors" name="phone" type="tel" v-model="form.phone" label="Phone"  prependInnerIcon="call" />
                    <x-textarea :errors="errors" name="bio" v-model="form.bio" label="Bio" />
                </v-col>
                <v-col cols="12" md="6"> 
                    <h4>Socials</h4>
                    <v-divider></v-divider>
                    <x-input :errors="errors" name="facebook_url" type="url" v-model="form.facebook_url" label="Facebook" prependInnerIcon="link" />
                    <x-input :errors="errors" name="instagram_url" type="url" v-model="form.instagram_url" label="Instagram" prependInnerIcon="link" />
                    <x-input :errors="errors" name="twitter_url" type="url" v-model="form.twitter_url" label="Twitter" prependInnerIcon="link" />
                    <x-input :errors="errors" name="linkedin_url" type="url" v-model="form.linkedin_url" label="LinkedIn" prependInnerIcon="link" />
                    <x-input :errors="errors" name="youtube_url" type="url" v-model="form.youtube_url" label="Youtube" prependInnerIcon="link" />
                    <x-input :errors="errors" name="website" type="url" v-model="form.website" label="Website" prependInnerIcon="link" />
                </v-col>
            </v-row>

            <v-row>
                <v-col cols="12">
                    <h4>Header</h4>
                    <v-switch v-model="form.show_caption" label="Use headline caption" ></v-switch>
                    <v-divider></v-divider>
                    <v-row v-if="form.show_caption">
                        <v-col cols="12" md="6">
                            <x-textarea :errors="errors" name="caption" v-model="form.caption" label="Headline caption" />
                        </v-col>
                        <v-col>
                            <x-textarea :errors="errors" name="subcaption" v-model="form.subcaption" label="Headline subcaption" />
                        </v-col>
                    </v-row>
                </v-col>
            </v-row>

            <v-row>
                <v-col cols="12">
                    <h4>Appearance</h4>
                    <v-divider></v-divider>
                    <v-row>
                        <v-col cols="12" md="4">
                            <h5>Theme color</h5>
                            <v-color-picker class="ma-2" v-model="form.theme_color"></v-color-picker>
                        </v-col>

                        <v-col cols="12" md="4">
                            <div class="text-center mb-3" >
                                <h5>Avatar</h5>
                                <x-file-input :errors="errors" name="avatar" label="Avatar" :src="account.avatar" :color="account.theme_color" :isAvatar="true" @change="getAvatar" />
                            </div>
                        </v-col>

                        <v-col cols="12" md="4">
                            <div class="text-center">
                                <h5>Cover image</h5>
                                <x-file-input :errors="errors" name="cover_image" label="Cover image" :src="account.cover_image" @change="getCoverImage" />
                            </div>
                        </v-col>
                    </v-row>
                </v-col>
            </v-row>
            <v-btn fixed dark fab bottom right x-large=""
                :loading="loading" type="submit"
                :color="form.theme_color">
                <v-icon>mdi-check</v-icon>
            </v-btn>
        </form>
    </v-container>
</template>

<script>
    import {mapState} from "vuex";
    import App from '@/layouts/App';

    export default {
        name: "AccountEdit",
        layout: (h, page) => h(App, [page]),
        metaInfo()
         {
             return{
                title: 'Academy account set up',
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
            account: {
                type: Object,
                default: () => ({
                    theme_color: '#3F51B5'
                })
            },
            new_account: {
                type: Boolean,
                default: () => false,
            }
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
               if(this.new_account){
                   await this.$inertia.post(this.route('account.setup.store'), this.formData());
               }else{
                    await this.$inertia.post(this.route('account.update', {account: this.auth.account.username}), this.formData());
               }
               
               this.loading = false;
            },

            getCoverImage(files){
                this.form.cover_image = files[0];
            },

            getAvatar(files){
                this.form.avatar = files[0];
            },

        },

        mounted(){
            if(this.account){
                this.form = {...this.account};
            }
        }
    }
</script>