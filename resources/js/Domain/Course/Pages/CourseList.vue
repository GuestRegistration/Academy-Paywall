<template>
    <v-container>
      <div class="d-flex">
        <div>
          <h4>Courses ({{ courses.total }})</h4>
          <small class="grey--text">{{ filter }}</small>
        </div>
        <v-spacer></v-spacer> 
        <course-filter @filter="applyFilter" :filter="filter" />
          <v-btn class="d-none d-md-inline-block" icon v-if="display == 'grid'" @click="display = 'list'" title="List view">
            <v-icon>view_list</v-icon>
          </v-btn>
          <v-btn icon class="d-none d-md-inline-block" v-if="display == 'list'" @click="display = 'grid'" title="Grid view">
            <v-icon>view_module</v-icon>
          </v-btn>
      </div>
      <v-row>
        <v-col cols="12" md="4">
          <course-search :account="auth.account" />
        </v-col>
        <v-col cols="12" md="8">
          <div class="text-center text-muted my-5" v-if="!courses.total">
            No course available
          </div>
          <div v-else>
            <v-row>
                <v-col cols="12" :md="display == 'grid' ? 6 : 12" :lg="display == 'grid' ? 6 : 12"  v-for="course in courses.data" :key="course.id">
                    <course-card :account="account" :course="course" :showStatus="true" :showInstructor="false" :display="display">
                      <template v-slot:options>
                        <v-menu v-if="isOnMyAccount(course)" origin="center center"  transition="scale-transition">
                            <template v-slot:activator="{ on }">
                                <v-btn icon v-on="on">
                                    <v-icon>more_vert</v-icon>
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

                                <v-list-item @click="deleteCourse(course)">
                                    <v-list-item-icon>
                                    <v-icon>delete</v-icon>
                                    </v-list-item-icon>
                                    <v-list-item-content>
                                    <v-list-item-title>Delete</v-list-item-title>
                                    </v-list-item-content>
                                </v-list-item> 

                            </v-list>
                        </v-menu>
                      </template>
                    </course-card>
                </v-col>
                <course-delete :account="account" ref="courseDelete" />
                
            </v-row> 
            <pagination :resource="courses" :color="auth.account.theme_color"/>
          </div>
        </v-col>
      </v-row>
    
      <v-btn
          :color="account.theme_color"
          dark
          large
          fixed
          bottom
          right
          fab
          title="Create  course"
          @click="$inertia.visit(route('account.course.create', {account: account.username}))"
        >
          <v-icon>add</v-icon>
      </v-btn>
    </v-container>
</template>

<script>
 import {mapGetters} from "vuex";
 import App from '@/layouts/App';
 import CourseCard from './../Components/CourseCard';
 import CourseDelete from './../Components/CourseDelete';
 import CourseFilter from './../Components/CourseFilter.vue';
 import CourseSearch from './../Components/CourseSearch.vue';

  export default {
    name: "CourseList",
    layout: (h, page) => h(App, [page]),
    components: {
        CourseCard, CourseDelete, CourseFilter, CourseSearch
    },

    metaInfo()
        {
            return{
              
            title: `Courses (${this.filter})`,
            titleTemplate: '%s - AcadaApp',
            }
    },

    data(){
      return {
        display: 'grid'
      }
    },

    props: {
        account: Object,
        courses: Object,
    },

    computed: {
      ...mapGetters([
          'auth', 'authenticated', 'isMyAccount', 'isOnMyAccount'
      ]),
      filter(){
        return this.$page.filter
      },

      auth() {
          return this.$page.auth
      }

    },

    methods: {
      deleteCourse(course){
        this.$refs.courseDelete.show(course);
      },

      applyFilter(select){
        this.$inertia.visit(`?filter=${select.value}`);
      }

    },

  }
</script>