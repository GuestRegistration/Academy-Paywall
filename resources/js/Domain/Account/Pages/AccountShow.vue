<template>

    <account-layout>
        <h2>Courses</h2>
        <div class="text-center text-muted py-5" v-if="!current_courses.total">
            <h5>No course yet</h5>
        </div>
        <div v-else>
            <v-row>
                <v-col cols="12" v-for="course in current_courses.data" :key="course.id">
                    <course-card :course="course" :account="account" :showInstructor="false" display="list" :showStatus="true" />
                </v-col>
            </v-row>
            <pagination :resource="current_courses" :color="account.theme_color"/>
        </div>

        <v-container v-if="instructors" class="mt-4">
            <h2>Instructors ({{instructors.length}}) </h2>
            <v-divider></v-divider>
            <div v-if="!instructors.length">
                <p class="text-muted">No instructor</p>
            </div>
             <v-row v-else>
                <v-col cols="12" md="6" v-for="user in instructors" :key="user.id">
                    <profile-card :account="account" :instructor="user">
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
                                        <v-list-item-title>View profile</v-list-item-title>
                                        </v-list-item-content>
                                    </v-list-item>
                                </v-list>
                            </v-menu>
                        </template>
                    </profile-card>
                </v-col>
            </v-row>    
        </v-container>

        <template v-slot:after-contact>
            <div class="pa-3">
                <h4>Past Courses</h4>
                <v-divider></v-divider>
                <div v-if="!past_courses.length" class="text-muted my-2">
                    No past course
                </div>
                <v-list v-else>
                    <v-list-item v-for="course in past_courses" :key="course.id">
                        <v-list-item-content>
                            <inertia-link :href="route('account.course.show', {account: account.username, course: course.slug})">
                                <v-list-item-title v-text="course.title"></v-list-item-title>
                            </inertia-link>
                            <small>Ended {{course.end_date}}</small>
                        </v-list-item-content>
                    </v-list-item>
                </v-list>
            </div>
            
        </template>

    </account-layout>
</template>

<script>
    import {mapActions, mapGetters} from "vuex";
    import AccountLayout from './../Layout';
    import CourseCard from '@/Domain/Course/Components/CourseCard';
    import ProfileCard from '@/Domain/User/Components/ProfileCard';
    
    const EVENT = 'organization_page_visit';

    export default {
        name: "AccountShow",
        metaInfo()
         {
             return{
                title: `${this.account.name} ${this.account.at_username}`,
                titleTemplate: '%s - AcadaApp',
             }
        },
        data(){
        return {
            // tab: null,
            // tabs: [
            //     { 
            //         heading: 'Ongoing',
            //         route: this.route('account.show', {account: this.account.username, course: 'ongoing'}) 
            //     },
            //     { 
            //         heading: 'Upcoming',
            //         route: this.route('account.show', {account: this.account.username, course: 'upcoming'}) 
            //     },
            //     { 
            //         heading: 'Past',
            //         route: this.route('account.show', {account: this.account.username, course: 'past'}) 
            //     },
            // ],
        }
        },
        components: { CourseCard, ProfileCard, AccountLayout },
        props: {
            account: Object,
            current_courses: Object,
            past_courses: Array,
            instructors: Array,
        },
        computed: {
            ...mapGetters([
                'auth', 'authenticated', 'isMyAccount', 'isOnMyAccount'
            ]),
        },

        methods: {
            ...mapActions([
                'pushGTMEvent'
            ])
        },

        mounted(){
            // this.tab = this.tabs.findIndex(tab => tab.heading.toLowerCase() == this.status);

            const event =  this.$page.account.gtm_events.find(e => e.slug == EVENT);
            if(this.$page.account.google_tag_manager && event){
                this.pushGTMEvent({
                    id: this.$page.account.google_tag_manager, 
                    events: event.triggers
                })
            }
        }
    }
</script>