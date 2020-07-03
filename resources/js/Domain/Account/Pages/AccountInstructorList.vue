<template>
    <div>
      <h4>Instructors ({{ data.length }})</h4>
      <div class="text-center text-muted my-5" v-if="!data.length">
                No instructor
      </div>
      <v-row v-else>
          <v-col cols="12" md="6" lg="4"  v-for="user in data" :key="user.id">
              <profile-card :account="account" :instructor="user">
                <template v-slot:options v-if="isMyAccount(account)">
                  <v-menu origin="center center"  transition="scale-transition">
                      <template v-slot:activator="{ on }">
                          <v-btn icon v-on="on">
                              <v-icon>mdi-dots-vertical</v-icon>
                          </v-btn>
                      </template>
                      <v-list>

                          <v-list-item @click="() => {}">
                              <v-list-item-icon>
                              <v-icon>delete</v-icon>
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
     
    </div>
</template>

<script>
 import {mapGetters} from "vuex";
 import App from '@/layouts/App';
 import ProfileCard from '@/Domain/User/Components/ProfileCard';

  export default {
    name: "AccountInstructorList",
    layout: (h, page) => h(App, [page]),
    components: {
        ProfileCard
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
        data: []
      }
    },

    props: {
        account: Object,
        instructors: Array,
    },

    computed: {
      ...mapGetters([
          'auth', 'authenticated', 'isMyAccount', 'isOnMyAccount'
      ]),
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