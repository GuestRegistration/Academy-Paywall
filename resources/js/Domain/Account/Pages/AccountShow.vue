<template>
    <div>
        
        <h2 class="font-weight-bold display-3 basil--text text-center">Courses</h2>
        <v-tabs
        v-model="tab"
        :background-color="account.theme_color"
        dark
        >
            <v-tab
            v-for="(tab, i) in tabs"
            :key="i"
            @click="$inertia.visit(tab.route)"
            >
                {{ tab.heading }}
            </v-tab>
        </v-tabs>
        <div class="text-center text-muted py-5" v-if="!courses.total">
            <h5>No <span style="text-transform: capitalize">{{status}}</span> Course</h5>
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
        data(){
        return {
            tab: null,
            tabs: [
                { 
                    heading: 'Ongoing',
                    route: this.route('account.show', {account: this.account.username, course: 'ongoing'}) 
                },
                { 
                    heading: 'Upcoming',
                    route: this.route('account.show', {account: this.account.username, course: 'upcoming'}) 
                },
                { 
                    heading: 'Past',
                    route: this.route('account.show', {account: this.account.username, course: 'past'}) 
                },
            ],
        }
        },
        components: { CourseCard },
        props: {
            account: Object,
            courses: Object,
            status: String,
        },
        computed: {
            ...mapGetters([
                'auth', 'authenticated', 'isMyAccount', 'isOnMyAccount'
            ]),
        },

        mounted(){
            this.tab = this.tabs.findIndex(tab => tab.heading.toLowerCase() == this.status);
        }
    }
</script>