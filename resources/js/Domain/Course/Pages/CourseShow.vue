<template>
    <div>
        <h4>{{course.title}}</h4>
        <v-img :src="course.cover_image" ></v-img>
        <div class="d-flex">
            <div class="text-muted mt-3">
                <div>
                    <v-icon :color="account.theme_color">date_range</v-icon> {{course.start_date}} - {{course.end_date}} 
                </div>
                <div>
                    <v-icon :color="account.theme_color">schedule</v-icon>  {{course.course_duration}}
                </div>
                <div>
                    <v-icon :color="account.theme_color">info</v-icon> {{course.course_type}}
                </div>                
            </div>
            <v-spacer></v-spacer>
            <course-status :course="course" />
        </div>
        <v-divider></v-divider>
        <div class="d-flex">
            <div>
                <h2 v-if="course.payment.require">{{course.price | money(course.payment.currency)}}</h2>
                <h2 v-else>FREE</h2>
            </div>
            <div class="ml-auto" >
                <v-btn @click="enroll" dark large :color="account.theme_color" :disabled="isOnMyAccount(course)">
                    Enroll Now <v-icon>arrow_forward</v-icon>
                </v-btn>
                <v-btn icon @click="shareCourse(course)" :title="`Share ${course.title}`">
                    <v-icon>share</v-icon>
                </v-btn>
                <v-menu origin="center center"  transition="scale-transition" v-if="isOnMyAccount(course)" >
                    <template v-slot:activator="{ on }">
                        <v-btn icon v-on="on">
                            <v-icon>mdi-dots-vertical</v-icon>
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
                <course-share :account="account" ref="courseShare" />
                <course-delete :account="account" ref="courseDelete" />
            </div>
        </div>
        <v-divider></v-divider>
        <div v-html="course.description">
        </div>
        <v-container v-if="course.users" class="mt-4">
            <h2>Instructors ({{course.users.length}}) </h2>
            <v-divider></v-divider>
            <div v-if="!course.users.length" >
                <p class="text-muted">No instructor yet</p>
            </div>
             <v-row v-else>
                <v-col cols="12" md="6" v-for="user in course.users" :key="user.id">
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
        <slot />
        <v-btn v-if="!isOnMyAccount(course)" fixed dark fab bottom right large :color="account.theme_color" :title="`Enroll for ${course.title}`" @click="enroll" >
            <v-icon>arrow_forward</v-icon>
        </v-btn>
         <v-btn v-else fixed dark fab bottom right large :color="account.theme_color" :title="`Edit ${course.title}`" @click="$inertia.visit(route('account.course.edit', {account: account.username, course: course.slug}))" >
            <v-icon>edit</v-icon>
        </v-btn>
    </div>
    
</template>

<script>
    import {mapGetters} from "vuex";
    import AccountLayout from '@/Domain/Account/Layout';
    import ProfileCard from '@/Domain/User/Components/ProfileCard';
    import CourseStatus from './../Components/CourseStatus';
    import CourseShare from './../Components/CourseShare';
    import CourseDelete from './../Components/CourseDelete';

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
                'auth', 'authenticated', 'isMyAccount', 'isOnMyAccount'
            ]),
            account(){
                return this.$page.account;
            },
            course(){
                return this.$page.course;
            }
        },

        methods: {
            enroll(){
                this.$inertia.visit(this.route('account.course.enroll', { account: this.account.username, course: this.course.slug }));
            },

            shareCourse(course){
                this.$refs.courseShare.show(course);
            },

            deleteCourse(course){
                this.$refs.courseDelete.show(course);
            }

        }

    }
</script>