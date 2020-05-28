<template>
    <v-container>
        <div class="text-right">
            <inertia-link :href="route('course.create')">
                <v-btn color="primary"> <v-icon>add</v-icon> new course</v-btn>
            </inertia-link>
        </div>
        <v-row v-if="!courses.total" justify="center">
            <v-col md="6">
                <div class="text-center text-muted p-5">
                    <h4>No course available yet</h4>
                </div>
            </v-col>
        </v-row>
        <v-row v-else justify="center" align="center">
            <v-col v-for="course in courses.data" :key="course.id" md="4">
                <course-card :course="course" />
            </v-col>
        </v-row>
    </v-container>
</template>

<script>
    import App from '@/layouts/App';
    import CourseCard from './../Components/CourseCard';
    export default {
        name: "CourseList",
        components: { CourseCard },
        layout: (h, page) => h(App, [page]),
        props: {
            courses: Object
        },

        methods: {
          
        },

        mounted(){
            this.form = this.account;
        }
    }
</script>