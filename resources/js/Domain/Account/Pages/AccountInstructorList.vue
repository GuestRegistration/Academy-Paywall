<template>
    <div>
      <div class="d-flex">
        <h4>Instructors ({{ data.length }})<v-btn icon class="ml-5" @click="$refs.inviteUserDialog.set(true)"><v-icon>person_add</v-icon></v-btn></h4>
        <div class="ml-auto">
          <a href="#invitations" @click="showPendingInvitations = !showPendingInvitations" class="prevent-default"><v-icon>hourglass_empty</v-icon> Pending Invitations ({{invitations.length}})</a> 
        </div>
      </div>
      <v-alert
          v-if="$page.status"
          icon="info"
          prominent
          text
          type="info"
          dismissible
          >
          {{$page.status}}
      </v-alert>
      <v-row>
        <v-col cols="12" :md="showPendingInvitations ? 8 : 12">
          <div class="text-center text-muted my-5" v-if="!data.length">
            No instructor
          </div>
          <v-row v-else>
              <v-col cols="6" md="3"  v-for="user in data" :key="user.id">
                  <profile-card :account="account" :instructor="user" :has-options="true">
                    <template v-slot:options v-if="isMyAccount(account)">
                      <v-menu origin="center center"  transition="scale-transition">
                          <template v-slot:activator="{ on }">
                              <v-btn icon v-on="on">
                                  <v-icon>more_vert</v-icon>
                              </v-btn>
                          </template>
                          <v-list>
                              <v-list-item @click="$inertia.visit(route('profile.show', {profile: user.profile.username}))">
                                  <v-list-item-icon>
                                  <v-icon>account_circle</v-icon>
                                  </v-list-item-icon>
                                  <v-list-item-content>
                                  <v-list-item-title>view profile</v-list-item-title>
                                  </v-list-item-content>
                              </v-list-item>
                              <v-list-item v-if="user.id !== auth.id" @click="removeInstructor(user)">
                                  <v-list-item-icon>
                                  <v-icon class="red--text">delete</v-icon>
                                  </v-list-item-icon>
                                  <v-list-item-content>
                                  <v-list-item-title>Remove</v-list-item-title>
                                  </v-list-item-content>
                              </v-list-item> 
                          </v-list>
                        </v-menu>
                    </template>
                  </profile-card>
              </v-col>
          </v-row>    
        </v-col>
        <v-col v-if="showPendingInvitations" cols="12" md="4" id="invitations">
          <v-card>
            <v-card-title class="text-center">
              Pending Invitations
              <v-spacer></v-spacer>
              <v-btn icon @click="showPendingInvitations = false" color="red"><v-icon>close</v-icon></v-btn>
            </v-card-title>
            <v-divider></v-divider>
            <v-card-text>
              <div class="text-center text-muted my-5" v-if="!invitations.length">
                No pending invitation
              </div>
              <v-list v-else>
                <v-list-item v-for="invitation in invitations" :key="invitation.id">
                  <v-list-item-content>
                    <v-list-item-title v-text="invitation.email"></v-list-item-title>
                    <v-list-item-subtitle>Invited {{invitation.sent_time}}</v-list-item-subtitle>
                  </v-list-item-content>
                  <v-list-item-icon>
                    <v-btn icon @click="$refs.deleteInvitationDialog.show(invitation)"><v-icon color="red">delete</v-icon></v-btn>
                  </v-list-item-icon>
                </v-list-item>
              </v-list>
            </v-card-text>
            <v-card-actions>
              <v-btn text @click="$refs.inviteUserDialog.set(true)"><v-icon class="mr-2">person_add</v-icon> Invite</v-btn>
            </v-card-actions>
          </v-card>
        </v-col>
      </v-row>

     <invite-user-dialog ref="inviteUserDialog" />
     <remove-user-dialog ref="removeUserDialog" :account="account" />
     <delete-invitation-dialog ref="deleteInvitationDialog" :account="account" />
    </div>
</template>

<script>
 import {mapGetters} from "vuex";
 import App from '@/layouts/App';
 import ProfileCard from '@/Domain/User/Components/ProfileCard.vue';
 import InviteUserDialog from '../Components/InviteUserDialog.vue';
 import RemoveUserDialog from '../Components/RemoveUserDialog.vue';
 import DeleteInvitationDialog from '../Components/DeleteInvitationDialog.vue'
  export default {
    name: "AccountInstructorList",
    layout: (h, page) => h(App, [page]),
    
    components: {
        ProfileCard, InviteUserDialog, RemoveUserDialog, DeleteInvitationDialog
    },

    metaInfo()
        {
            return{
            title: `Instructors (${this.instructors.length})`,
            titleTemplate: '%s - AcadaApp',
            }
    },

    data(){
      return {
        data: [],
        showPendingInvitations: true
      }
    },

    props: {
        account: Object,
        instructors: Array,
        invitations: Array
    },

    computed: {
      ...mapGetters([
          'auth', 'authenticated', 'isMyAccount', 'isOnMyAccount'
      ]),
    },

    methods: {
      removeInstructor(user){
        this.$refs.removeUserDialog.show(user);
      },

      deleteInvitation(invitation){

      }
    },

    watch: {
      instructors: {
        immediate: true,
        handler(instructors){
          this.data = instructors;
        }
      }
    }
  }
</script>