<template>
    <div>
        <h2 class="my-2"><v-icon>library_books</v-icon> Courses</h2>
        <v-divider></v-divider>
        <div class="text-center text-muted my-5" v-if="!courses.total">
            <h3>No course yet</h3>
        </div>
        <div v-else>
             <v-row>
                <v-col cols="12" v-for="course in courses.data" :key="course.id">
                    <course-card :course="course" :showInstructor="false" display="list" :showStatus="true" />
                </v-col>
            </v-row>
             <pagination :resource="courses"/>
        </div>
    </div>
</template>

<script>
    import {mapGetters} from "vuex";
    import ProfileLayout from './../Layout';
    import CourseCard from '@/Domain/Course/Components/CourseCard';
    
    export default {
        name: "ProfileShow",
        layout: (h, page) => h(ProfileLayout, [page]),
        // metaInfo()
        //  {
        //      return{
        //         title: `${this.profile.fullname} - ${this.profile.at_username}`,
        //         titleTemplate: '%s - AcadaApp',
        //      }
        // },

        components: { CourseCard },
        props: {
            profile: Object,
            courses: Object,
        },
       
    }
</script>