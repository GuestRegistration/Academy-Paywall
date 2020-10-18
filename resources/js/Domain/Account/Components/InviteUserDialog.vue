<template>
        <v-dialog v-model="dialog" scrollable  persistent max-width="500px">
            
            <form  @submit.prevent="submit">
                    <v-card>
                        <v-card-title>
                            <span class="headline"><v-icon>person_add</v-icon> Invite instructor</span>
                            <v-spacer></v-spacer>
                            <v-btn icon color="red" @click="set(false)"><v-icon>close</v-icon></v-btn>
                        </v-card-title>
                        <v-divider></v-divider>

                        <v-card-text  v-if="!account.is_payg">
                            <p class="text-muted">Invite instructor to {{account.name}}</p>
                            <v-alert
                                icon="info"
                                prominent
                                text
                                type="info"
                                >
                                You can invite {{ account.users_slot }} users
                            </v-alert>

                            <v-combobox v-if="hasSlot"
                                v-model="selected"
                                :items="items"
                                hide-selected
                                label="Enter emails to invite"
                                :search-input.sync="search"
                                multiple
                                persistent-hint
                                deletable-chips
                                counter
                                :loading="loading"
                                :error="errors && errors.emails && errors.emails.length ? true : false"
                                :error-messages="errors && errors.emails && errors.emails.length ? errors.emails[0] : ''"
                                @change="inputChanged"
                                :allow-overflow="false"
                                >
                                <template v-slot:selection="data">
                                    <v-chip
                                        :key="data.item"
                                        v-bind="data.attrs"
                                        :input-value="data.selected"
                                        :disabled="data.disabled"
                                        :color="errors && errors[`emails.${selected.findIndex(s => s == data.item)}`] ? 'red' : account.theme_color"
                                        @click:close="data.parent.selectItem(data.item)"
                                        dark
                                        close
                                    >
                                        <span>{{data.item}}</span>
                                        <v-icon
                                        small
                                        @click="data.parent.selectItem(data.item)"
                                        class="ml-1"
                                        >
                                            close
                                        </v-icon>
                                    </v-chip>
                                </template>
                                <template v-slot:no-data v-if="search">
                                    <v-list-item>
                                        <v-list-item-icon>
                                            <v-icon>person_add</v-icon>
                                        </v-list-item-icon>
                                        <v-list-item-content>
                                            <v-list-item-title>
                                                Press <kbd>enter</kbd> to add "<strong>{{ search }}</strong>"
                                            </v-list-item-title>
                                        </v-list-item-content>
                                    </v-list-item>
                                </template>
                            </v-combobox>
                            <v-alert
                                v-if="warning"
                                border="left"
                                colored-border
                                type="error"
                                elevation="2"
                            >
                            {{ warning }}
                        </v-alert>
                        <v-alert
                            v-if="errors && Object.keys(errors).length"
                            border="left"
                            colored-border
                            type="error"
                            elevation="2"
                        >
                            Invitation not sent, check the emails
                        </v-alert>
                    </v-card-text>
                    
                    <v-card-text v-else>
                        <v-alert
                        border="left"
                        colored-border
                        color="primary"
                        class="my-2"
                        elevation="2"
                        >
                            Upgrade your subscription to be able to invite multiple instructors
                        </v-alert>
                        <div class="text-right">
                            <inertia-link :href="route('account.subscription.show', {account: account.username})">View subscriptions</inertia-link>
                        </div>
                    </v-card-text>

                    <v-card-actions v-if="hasSlot && !limitReached">
                        <v-spacer></v-spacer>
                        <v-btn type="submit" v-if="selected.length" :loading="loading" :color="account.theme_color" dark >Invite {{selected.length}} user<span v-if="selected.length > 1">s</span></v-btn>
                    </v-card-actions>
                </v-card>
            </form>
                
    </v-dialog>
</template>

<script>
import { mapGetters } from 'vuex'
    export default {
        name: "InviteUserDialog",
       
        data(){
            return {
                 dialog: false,
                 loading: false, 
                 search: null,
                 selected: [],
                 items: [],
                 warning: null
            }
        },

        computed: {
            ...mapGetters([
                'auth'
            ]),

            errors(){
                return this.$page.errors;
            },

            account(){
                return this.$page.account;
            },
            hasSlot(){
                if(this.account.is_unlimited) return true;
                return this.account.users_slot > 0 ? true : false;
            },

            limitReached(){
                if(this.account.is_unlimited) return false;

                if(this.selected.length > this.account.users_slot){
                    this.warning = `Cannot invite ${this.selected.length} users`;
                    return true;
                }

                this.warning = null;
                return false;
            }

        },
        methods: {
            set(show){
                this.dialog = show;
            },

            async submit(){
                this.loading = true;
                await this.$inertia.post(this.route('account.instructor.invite.send', {account: this.account.username}), {
                    emails: this.selected
                });
                this.loading = false;
                if(!Object.keys(this.errors).length){
                    this.selected = [];
                    this.set(false);
                }
            },

            inputChanged(){
                this.$page.errors = {};
            }
        }
    }
</script>