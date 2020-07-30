<template>
    <v-container>
        <v-row justify="center">
            <v-col cols="12" md="6">
                <form @submit.prevent="submit">
                    <v-expansion-panels
                        popout
                        focusable
                        >
                            <v-expansion-panel>
                                <v-expansion-panel-header>
                                    <h4>
                                        <v-icon v-if="Object.keys(errors).some(error => ['name', 'username', 'email', 'phone', 'bio'].includes(error))" color="red" class="mr-3" title="There is error in this section">report_problem</v-icon>
                                        Organization Information
                                    </h4>
                                </v-expansion-panel-header>
                                <v-expansion-panel-content class="py-3">
                                    <x-input :errors="errors" name="name" type="text" v-model="form.name" label="Organization name"  prependInnerIcon="account_box" />
                                    <x-input :errors="errors" name="username" type="text" v-model="form.username" @input="aliasInput" label="Alias" prependInnerIcon="alternate_email" />
                                    <x-input :errors="errors" name="email" type="email" v-model="form.email" label="Email"  prependInnerIcon="email"/>
                                    <x-input :errors="errors" name="phone" type="tel" v-model="form.phone" label="Phone"  prependInnerIcon="call" />
                                    <x-textarea :errors="errors" name="bio" v-model="form.bio" label="Bio" />
                                </v-expansion-panel-content>
                            </v-expansion-panel>

                            <v-expansion-panel>
                                <v-expansion-panel-header>
                                    <h4>
                                        <v-icon v-if="Object.keys(errors).some(error => ['theme_color', 'avatar', 'cover_image'].includes(error))" color="red" class="mr-3" title="There is error in this section">report_problem</v-icon>
                                        Appearance
                                    </h4>
                                </v-expansion-panel-header>
                                <v-expansion-panel-content class="py-3">
                                    <div class="text-center">
                                        <div class="my-2">
                                            <h5>Theme color</h5>
                                            <v-color-picker width="100%" hide-canvas v-model="form.theme_color"></v-color-picker>
                                        </div>
                                    
                                        <div class="my-2" >
                                            <h5>Avatar</h5>
                                            <x-file-input :errors="errors" name="avatar" label="Avatar" :src="account.avatar" :color="account.theme_color" :isAvatar="true" @change="getAvatar" />
                                        </div>
                                        <div class="my-2">
                                            <h5>Cover image</h5>
                                            <x-file-input :errors="errors" name="cover_image" label="Cover image" :src="account.cover_image" @change="getCoverImage" />
                                        </div>
                                    </div>
                                    
                                </v-expansion-panel-content>
                            </v-expansion-panel>

                            <v-expansion-panel>
                                <v-expansion-panel-header>
                                    <h4>
                                        <v-icon v-if="Object.keys(errors).some(error => ['caption', 'subcaption'].includes(error))" color="red" class="mr-3" title="There is error in this section">report_problem</v-icon>
                                        Header
                                    </h4>
                                </v-expansion-panel-header>
                                <v-expansion-panel-content class="py-3">
                                    <v-switch v-model="form.show_caption" label="Use headline caption" :color="form.theme_color"></v-switch>
                                    <div v-if="form.show_caption">
                                        <x-textarea :errors="errors" name="caption" v-model="form.caption" label="Headline caption" />
                                        <x-textarea :errors="errors" name="subcaption" v-model="form.subcaption" label="Headline subcaption" />
                                    </div>
                                </v-expansion-panel-content>
                            </v-expansion-panel>

                            <v-expansion-panel>
                                <v-expansion-panel-header>
                                   <h4>
                                        <v-icon v-if="Object.keys(errors).some(error => ['facebook_url', 'instagram_url', 'twitter_url', 'linkedin_url', 'youtube_url', 'website'].includes(error))" color="red" class="mr-3" title="There is error in this section">report_problem</v-icon>
                                        Links
                                    </h4>
                                </v-expansion-panel-header>
                                <v-expansion-panel-content class="my-3">
                                    <x-input :errors="errors" name="facebook_url" type="url" v-model="form.facebook_url" label="Facebook" prependInnerIcon="link" />
                                    <x-input :errors="errors" name="instagram_url" type="url" v-model="form.instagram_url" label="Instagram" prependInnerIcon="link" />
                                    <x-input :errors="errors" name="twitter_url" type="url" v-model="form.twitter_url" label="Twitter" prependInnerIcon="link" />
                                    <x-input :errors="errors" name="linkedin_url" type="url" v-model="form.linkedin_url" label="LinkedIn" prependInnerIcon="link" />
                                    <x-input :errors="errors" name="youtube_url" type="url" v-model="form.youtube_url" label="Youtube" prependInnerIcon="link" />
                                    <x-input :errors="errors" name="website" type="url" v-model="form.website" label="Website" prependInnerIcon="link" />
                                </v-expansion-panel-content>
                            </v-expansion-panel>
                        </v-expansion-panels>

                        <v-btn fixed dark fab bottom right x-large=""
                            :loading="loading" type="submit"
                            :color="form.theme_color">
                            <v-icon>mdi-check</v-icon>
                        </v-btn>
                </form>
            </v-col>
        </v-row>
        
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
                title: 'Organization account set up',
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
            aliasInput(value){
                this.form.username = value.trim().toLowerCase().replace(/[^a-zA-Z0-9]/g,'_').trim();
            },

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