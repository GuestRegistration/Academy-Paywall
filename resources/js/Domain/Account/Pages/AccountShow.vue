<template>
    <div>
        <h2>Courses</h2>
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
                                        <v-icon>mdi-dots-vertical</v-icon>
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
    </div>
</template>

<script>
    import {mapGetters} from "vuex";
    import AccountLayout from './../Layout';
    import CourseCard from '@/Domain/Course/Components/CourseCard';
    import ProfileCard from '@/Domain/User/Components/ProfileCard';
    
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
        components: { CourseCard, ProfileCard },
        props: {
            account: Object,
            courses: Object,
            status: String,
            instructors: Array,
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