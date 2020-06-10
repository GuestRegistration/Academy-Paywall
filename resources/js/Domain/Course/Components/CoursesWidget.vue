<template>
    <div>
        <div v-if="loading">
            <v-row>
                <v-col cols="12" md="4" v-for="i in [1,2,3]" :key="i">
                    <v-skeleton-loader
                        type="list-item-avatar-three-line"
                        class="mx-auto"
                    ></v-skeleton-loader>
                </v-col>
            </v-row>
        </div>

        <div v-else>
            <div class="text-center text-muted my-5" v-if="!data.length">
                No course available
            </div>
            <v-row v-else>
                <v-col cols="12" md="4"  v-for="course in data" :key="course.id">
                    <course-card :course="course" />
                </v-col>
            </v-row>
        </div>
    </div>
</template>

<script>
  import {mapState} from 'vuex'
  import CourseCard from './CourseCard';

  export default {
      name: "CoursesWidget",
      components: {
        CourseCard
      },
      data(){
          return {
              loading: false,
              data: [],
          }
      },
      props: {
          courses: {
              type: Array,
          }
      },
      computed: {
        ...mapState({
          authenticated: state => state.authenticated,
          auth: state=> state.auth,
        })
      },

      methods: {
          getCourses(){
              this.loading = true;
              axios.get(this.route('course.list'))
              .then(response => {
                  this.loading = false;
                  this.data = response.data.data;
              })
          }
      },

     watch:{
         courses: {
             immediate: true,
             handler(courses){
                 if(!courses){
                    this.getCourses();
                    return;
                 }
                 this.data = courses;
             }
         }
     }
  }
</script>