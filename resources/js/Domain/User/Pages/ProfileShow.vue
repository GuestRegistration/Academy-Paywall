<template>
    <div>
        <h4><v-icon>library_books</v-icon> Courses</h4>
        <v-divider></v-divider>
        <div class="text-center text-muted" v-if="!courses.total">
            <h5>No course yet</h5>
        </div>
        <div v-else>
             <v-row>
                <v-col cols="12" v-for="course in courses.data" :key="course.id">
                    <course-card :course="course" :showInstructor="false" display="list" :showStatus="true" />
                </v-col>
            </v-row>
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
        metaInfo()
         {
             return{
                title: `${this.profile.fullname} - ${this.profile.at_username}`,
                titleTemplate: '%s - AcadaApp',
             }
        },

        components: { CourseCard },
        props: {
            profile: Object,
            courses: Object,
        },
       
    }
</script>