<template>
    <div>
      <h4>Instructors ({{ data.length }})</h4>
      <div class="text-center text-muted my-5" v-if="!data.length">
                No instructor
      </div>
      <v-row v-else>
          <v-col cols="12" md="6" lg="4"  v-for="course in data" :key="course.id">
              <course-card :account="account" :course="course" :showStatus="true" :showInstructor="false">
                <template v-slot:options>
                  <v-menu v-if="isOnMyAccount(course)" origin="center center"  transition="scale-transition">
                      <template v-slot:activator="{ on }">
                          <v-btn icon v-on="on">
                              <v-icon>mdi-dots-vertical</v-icon>
                          </v-btn>
                      </template>
                      <v-list>

                          <v-list-item @click="$inertia.visit(route('account.course.edit', {account: account.username, course: course.slug}))">
                              <v-list-item-icon>
                              <v-icon>edit</v-icon>
                              </v-list-item-icon>
                              <v-list-item-content>
                              <v-list-item-title>Edit course</v-list-item-title>
                              </v-list-item-content>
                          </v-list-item>

                          <v-list-item @click="$inertia.visit(route('account.course.student.list', {account: account.username, course: course.slug}))">
                              <v-list-item-icon>
                              <v-icon>people</v-icon>
                              </v-list-item-icon>
                              <v-list-item-content>
                              <v-list-item-title>View students</v-list-item-title>
                              </v-list-item-content>
                          </v-list-item>

                      </v-list>
                  </v-menu>
                </template>
              </course-card>
          </v-col>
      </v-row>    
     
    </div>
</template>

<script>
 import {mapGetters} from "vuex";
 import App from '@/layouts/App';
 import ProfileCard from './../Components/ProfileCard'

  export default {
    name: "ProfileList",
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
        courses: Array,
    },

    computed: {
      ...mapGetters([
          'auth', 'authenticated', 'isMyAccount', 'isOnMyAccount'
      ]),
    },

    watch: {
      courses: {
        immediate: true,
        handler(courses){
          this.data = courses;
        }
      }
    }
  }
</script>