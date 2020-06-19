<template>
    <v-row justify="center" v-if="courses">
        <v-dialog v-model="dialog" scrollable :max-width="`${course !== null ? '800px' : '300px'}`">
        <template v-slot:activator="{ on }">
            <v-btn :color="account.theme_color" dark v-on="on" large>Enroll for a course <v-icon>arrow_forward</v-icon></v-btn>
        </template>
        <v-card>
            <v-card-title>Courses available</v-card-title>
            <v-card-text class="px-0" style="max-height: 500px">
                <template v-if="!courses.length">
                    <div class="text-center text-muted">
                    <small>No course is available for now. You can check back.</small>
                    </div>
                </template>
                <template v-else>
                    <v-container fluid>
                        <v-row>
                            <v-col cols="12" :md="`${course !== null ? '6' : '12'}`">
                                <v-list flat>
                                    <v-list-item-group v-model="course_index" :color="account.theme_color">
                                        <v-list-item
                                        v-for="(course, i) in courses"
                                        :key="i"
                                        >
                                        <v-list-item-icon>
                                            <v-icon>library_books</v-icon>
                                        </v-list-item-icon>
                                        <v-list-item-content>
                                            <v-list-item-title v-text="course.title"></v-list-item-title>
                                        </v-list-item-content>
                                        </v-list-item>
                                    </v-list-item-group>
                                </v-list>
                            </v-col>
                            <v-col v-if="course !== null" cols="12" md="6" style="max-height: 500px">
                                 <course-card :course="course" :account="account" :showInstructor="false" display="grid" :showStatus="true" />
                            </v-col>
                        </v-row>
                    </v-container>
                </template>
            </v-card-text>
            <v-divider></v-divider>
            <v-card-actions>
            <v-btn color="red" text @click="dialog = false">Cancel</v-btn>
            </v-card-actions>
        </v-card>
        </v-dialog>
    </v-row>
</template>

<script>
    import CourseCard from '@/Domain/Course/Components/CourseCard'
    export default {
        name: "CoursesQuickEnroll",
        components: {
            CourseCard
        },
        data(){
            return {
                dialog: false,
                course_index: null
            }
        },
        props: {
            courses: {
                type: Array,
                default: () => [],
            },
            account: {
                type: Object,
                default: () => ({}),
            }
        },
        computed: {
            course(){
                return this.course_index === null ? null : this.courses[this.course_index]
            }
        }
    }
</script>