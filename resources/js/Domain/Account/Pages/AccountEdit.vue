<template>
    <v-container>
        <v-row justify="center">
            <v-col cols="12" md="6">
                <div class="mb-3">
                    <h2>Organization Setup</h2>
                    <v-divider></v-divider>
                </div>
                <form @submit.prevent="submit">
                    <v-expansion-panels
                        popout
                        focusable
                        >
                            <v-expansion-panel>
                                <v-expansion-panel-header>
                                    <h3>
                                        <v-icon v-if="Object.keys(errors).some(error => ['name', 'username', 'email', 'phone', 'bio'].includes(error))" color="red" class="mr-3" title="There is error in this section">report_problem</v-icon>
                                        Organization Information
                                    </h3>
                                </v-expansion-panel-header>
                                <v-expansion-panel-content class="py-3">
                                    <x-input :errors="errors" name="name" type="text" v-model="form.name" label="Organization name"  prependInnerIcon="account_box" />
                                    <x-input :errors="errors" name="username" type="text" v-model="form.username" @input="aliasInput" label="Alias" prependInnerIcon="alternate_email" />
                                    <x-input :errors="errors" name="email" type="email" v-model="form.email" label="Email"  prependInnerIcon="email" disabled/>
                                    <tel-input :errors="errors" name="phone" v-model="form.phone" label="Phone" />
                                    <x-textarea :errors="errors" name="bio" v-model="form.bio" label="About" />
                                </v-expansion-panel-content>
                            </v-expansion-panel>

                            <v-expansion-panel>
                                <v-expansion-panel-header>
                                    <h3>
                                        <v-icon v-if="Object.keys(errors).some(error => ['theme_color', 'avatar', 'cover_image'].includes(error))" color="red" class="mr-3" title="There is error in this section">report_problem</v-icon>
                                        Appearance
                                    </h3>
                                </v-expansion-panel-header>
                                <v-expansion-panel-content class="py-3">
                                    <div class="text-center">
                                        <div class="my-2">
                                            <h5>Theme color</h5>
                                            <v-color-picker width="100%" hide-canvas v-model="form.theme_color"></v-color-picker>
                                        </div>
                                    
                                        <div class="my-2" >
                                            <h5>Avatar</h5>
                                            <x-file-input :errors="errors" name="avatar" label="Avatar" :src="account.avatar" :color="account.theme_color" :is-avatar="true" :removable="true" @change="getAvatar" />
                                        </div>
                                        <div class="my-2">
                                            <h5>Cover image</h5>
                                            <x-file-input :errors="errors" name="cover_image" label="Cover image" :src="account.cover_image" aspect-ratio="8.1" @change="getCoverImage" />
                                            <small>Recommended Aspect Ratio: 8:1</small>
                                        </div>
                                    </div>
                                    
                                </v-expansion-panel-content>
                            </v-expansion-panel>

                            <!-- <v-expansion-panel>
                                <v-expansion-panel-header>
                                    <h3>
                                        <v-icon v-if="Object.keys(errors).some(error => ['caption', 'subcaption'].includes(error))" color="red" class="mr-3" title="There is error in this section">report_problem</v-icon>
                                        Header
                                    </h3>
                                </v-expansion-panel-header>
                                <v-expansion-panel-content class="py-3">
                                    <v-switch v-model="form.show_caption" label="Use headline caption" :color="form.theme_color"></v-switch>
                                    <div v-if="form.show_caption">
                                        <x-textarea :errors="errors" name="caption" v-model="form.caption" label="Headline caption" />
                                        <x-textarea :errors="errors" name="subcaption" v-model="form.subcaption" label="Headline subcaption" />
                                    </div>
                                </v-expansion-panel-content>
                            </v-expansion-panel> -->

                            <v-expansion-panel>
                                <v-expansion-panel-header>
                                   <h3>
                                        <v-icon v-if="Object.keys(errors).some(error => ['facebook_url', 'instagram_url', 'twitter_url', 'linkedin_url', 'youtube_url', 'website'].includes(error))" color="red" class="mr-3" title="There is error in this section">report_problem</v-icon>
                                        Links
                                    </h3>
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

                            <v-expansion-panel>
                                <v-expansion-panel-header>
                                   <h3>
                                        <v-icon v-if="Object.keys(errors).some(error => ['facebook_url', 'instagram_url', 'twitter_url', 'linkedin_url', 'youtube_url', 'website'].includes(error))" color="red" class="mr-3" title="There is error in this section">report_problem</v-icon>
                                        Google Tag Manager
                                    </h3>
                                </v-expansion-panel-header>
                                <v-expansion-panel-content class="my-3">
                                    <x-input :errors="errors" name="google_tag_manager" type="text" v-model="form.google_tag_manager" label="Google Tag Manager" placeholder="GTM-xxxxxx" />
                                    <h5>Event Tracking</h5>
                                    <v-divider></v-divider>
                                     <div>
                                        <v-simple-table
                                        :dense="true"
                                        :fixed-header="true"
                                        :height="300"
                                        >
                                            <template v-slot:default>
                                                <thead>
                                                    <tr>
                                                        <th class="text-left">Native Events</th>
                                                        <th class="text-left">GTM Triggers</th>
                                                    </tr>
                                                </thead>
                                                <tbody>
                                                    <tr v-for="(event, i) in form.gtm_events" :key="event.slug">
                                                        <td>{{ event.name }}</td>
                                                        <td class="pt-5">
                                                            <x-input type="text" v-model="form.gtm_events[i].triggers" label="Triggers seperated by comma (,)" />
                                                        </td>
                                                    </tr>
                                                </tbody>
                                            </template>
                                        </v-simple-table>

                                    </div>
                                </v-expansion-panel-content>
                            </v-expansion-panel>
                        </v-expansion-panels>

                        <v-btn fixed dark bottom right x-large
                            style="z-index:100; bottom: 40px"
                            :loading="loading" type="submit"
                            :color="form.theme_color">
                            <v-icon>done</v-icon> Save
                        </v-btn>

                </form>
            </v-col>
        </v-row>
        
    </v-container>
</template>

<script>
    import {mapState} from "vuex";
    import App from '@/layouts/App';
    import TelInput from '@/components/Inputs/XTelInput.vue';

    export default {
        name: "AccountEdit",
        layout: (h, page) => h(App, [page]),
        components: {
            TelInput
        },
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
                default: function(){
                    return {
                        theme_color: this.$vuetify.theme.themes.light.secondary
                    }
                }
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

                const fileKeys = ['avatar', 'cover_image'];

                Object.keys(this.form).forEach(key =>{
                    if(this.form[key] === null || this.form[key] === 'null'){
                        delete this.form[key]
                    }
                });
                
                Object.keys(this.form).forEach(key => {
                    if(this.form[key] instanceof Object && !fileKeys.includes(key)){
                        form.append(key, JSON.stringify(this.form[key]))
                    }else{
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
                this.form.cover_image = files ? files[0] : null;
            },

            getAvatar(files){
                this.form.avatar = files ? files[0] : null;
            },

        },

        mounted(){
            if(this.account){
                this.form = {...this.account};
                this.form.gtm_events = this.$page.events.map(event => {
                    const gtmEvent = {
                        name: event.name,
                        slug: event.slug,
                        triggers: ''
                    }
                    if(this.account.gtm_events){
                        let e = this.account.gtm_events.find( e => e.slug == event.slug);
                        gtmEvent.triggers = e ? e.triggers.join(',') : ''
                    }
                    return gtmEvent;
                    
                })
            }
        }
    }
</script>