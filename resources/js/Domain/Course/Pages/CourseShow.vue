<template>
    <div>
        <h1>{{course.title}}</h1>
        <v-img :src="course.cover_image" ></v-img>
        <div>
            <div class="text-muted mt-3">
                <div class="d-flex align-center">
                    <div><v-icon :color="account.theme_color" size="50">date_range</v-icon></div>
                    <div class="ml-2">
                        <div class="my-2"> Start: {{course.start_date}} ({{course.account.user.timezone}})</div>
                        <v-divider></v-divider>
                        <div class="my-2">End: {{course.end_date}} ({{course.account.user.timezone}}) </div>
                        <v-divider></v-divider>
                        <div class="my-2">{{ localDate(course.raw_dates.start.timestamp)}} - {{ localDate(course.raw_dates.end.timestamp) }} in your local time</div>
                        <v-divider></v-divider>
                        <div class="my-2"><v-icon :color="account.theme_color" size="20" class="mr-2">schedule</v-icon>{{course.course_duration}}</div>
                    </div>
                </div>
            </div>
        </div>
        <div class="d-flex align-center">
            <div>
                <v-icon :color="account.theme_color">info</v-icon> {{course.course_type}}
            </div>
            <v-spacer></v-spacer>
            <course-status :course="course" />
        </div>

        <v-divider></v-divider>
        <div class="d-flex my-3">
            <div>
                <h4 v-if="course.payment.require">{{course.price | money(course.payment.currency)}}</h4>
                <h4 v-else>FREE</h4>
            </div>
            <div class="ml-auto text-right" >
                <v-btn @click="enroll" dark :color="account.theme_color" :disabled="isOnMyAccount(course)">
                    Enroll Now <v-icon>arrow_forward</v-icon>
                </v-btn>
                <v-btn icon @click="shareCourse(course)" :title="`Share ${course.title}`">
                    <v-icon>share</v-icon>
                </v-btn>
                <v-menu origin="center center"  transition="scale-transition" v-if="isOnMyAccount(course) || affiliated" >
                    <template v-slot:activator="{ on }">
                        <v-btn icon v-on="on">
                            <v-icon>more_vert</v-icon>
                        </v-btn>
                    </template>
                    <v-list>
                        <v-list-item v-if="isOnMyAccount(course)" @click="$inertia.visit(route('account.course.edit', {account: account.username, course: course.slug}))">
                            <v-list-item-icon>
                            <v-icon>edit</v-icon>
                            </v-list-item-icon>
                            <v-list-item-content>
                            <v-list-item-title>Edit course</v-list-item-title>
                            </v-list-item-content>
                        </v-list-item>

                        <v-list-item v-if="isOnMyAccount(course) || affiliated " @click="$inertia.visit(route('account.course.student.list', {account: account.username, course: course.slug}))">
                            <v-list-item-icon>
                            <v-icon>people</v-icon>
                            </v-list-item-icon>
                            <v-list-item-content>
                            <v-list-item-title>View students</v-list-item-title>
                            </v-list-item-content>
                        </v-list-item>

                        <v-list-item v-if="isOnMyAccount(course)" @click="deleteCourse(course)">
                              <v-list-item-icon>
                              <v-icon>delete</v-icon>
                              </v-list-item-icon>
                              <v-list-item-content>
                              <v-list-item-title>Delete</v-list-item-title>
                              </v-list-item-content>
                          </v-list-item>
                    </v-list>
                </v-menu>
                <course-share :account="account" ref="courseShare" />
                <course-delete :account="account" ref="courseDelete" />
            </div>
        </div>
        <v-divider></v-divider>
        <div v-html="course.description"></div>
        <v-container v-if="course.users" class="mt-4">
            <h2>Instructors ({{course.users.length}}) </h2>
            <v-divider></v-divider>
            <div v-if="!course.users.length" >
                <p class="text-muted">No instructor yet</p>
            </div>
             <v-row v-else>
                <v-col cols="6" md="3" v-for="user in course.users" :key="user.id">
                    <profile-card :account="account" :instructor="user">
                        <template v-slot:options >
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
        <slot />
        
        <v-btn v-if="!isOnMyAccount(course)" fixed dark bottom right large style="z-index: 100; right: 30px" :color="account.theme_color" :title="`Enroll for ${course.title}`" :disabled="course.ended" @click="enroll" >
            <v-icon>arrow_forward</v-icon> Enroll
        </v-btn>
         <v-btn v-else fixed dark fab bottom right large :color="account.theme_color" :title="`Edit ${course.title}`" @click="$inertia.visit(route('account.course.edit', {account: account.username, course: course.slug}))" >
            <v-icon>edit</v-icon>
        </v-btn>
    </div>
    
</template>

<script>
    import {mapActions, mapGetters} from "vuex";
    import AccountLayout from '@/Domain/Account/Layout';
    import ProfileCard from '@/Domain/User/Components/ProfileCard';
    import CourseStatus from './../Components/CourseStatus';
    import CourseShare from './../Components/CourseShare';
    import CourseDelete from './../Components/CourseDelete';

    const EVENT = 'course_page_visit';

    export default {
        name: "CourseShow",
        layout: (h, page) => h(AccountLayout, [page]),
        components: {
            CourseStatus, ProfileCard, CourseShare, CourseDelete
        },
         metaInfo()
         {
             return{
                title: `${this.course.title} ${this.account.at_username}`,
                titleTemplate: '%s - AcadaApp',
             }
        },
        computed: {
            ...mapGetters([
                'auth', 'authenticated', 'isMyAccount', 'isOnMyAccount', 'localDate'
            ]),
            account(){
                return this.$page.account;
            },
            course(){
                return this.$page.course;
            },
            affiliated(){
                return this.course.users.find(user => user.id == this.auth.id) ? true : false;
            }
        },

        methods: {
            ...mapActions([
                'pushGTMEvent'
            ]),

            enroll(){
                this.$inertia.visit(this.route('account.course.enroll', { account: this.account.username, course: this.course.slug }));
            },

            shareCourse(course){
                this.$refs.courseShare.show(course);
            },

            deleteCourse(course){
                this.$refs.courseDelete.show(course);
            }

        },

        mounted(){
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