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
                    <course-card :course="course" :account="account" :showInstructor="false" display="list" :showStatus="true" />
                </v-col>
            </v-row>
        </div>
    </div>
</template>

<script>
    import {mapGetters} from "vuex";
    import AccountLayout from './../Layout';
    import CourseCard from '@/Domain/Course/Components/CourseCard';
    
    export default {
        name: "AccountShow",
        layout: (h, page) => h(AccountLayout, [page]),
        metaInfo()
         {
             return{
                title: `${this.account.name} ${this.account.at_username}`,
                titleTemplate: '%s - AcadaApp',
             }
        },

        components: { CourseCard },
        props: {
            account: Object,
            courses: Object,
        },
        computed: {
            ...mapGetters([
                'auth', 'authenticated', 'isMyAccount', 'isOnMyAccount'
            ]),
        },

    }
</script>