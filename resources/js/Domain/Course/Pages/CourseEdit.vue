<template>
    <v-container class="p-0">
        <v-row justify="center">
            <v-col cols="12" md="8">
                <template v-if="course.started">
                    <div class="text-center">
                        <h4>{{ course.title }}</h4>
                        <div class="text-muted">
                            <v-icon :color="course.account.theme_color">date_range</v-icon> {{course.start_date}} - {{course.end_date}}
                        </div>
                    </div>
                    <v-alert  icon="info" prominent text type="info">
                        You can no longer edit course once started
                    </v-alert>
                    <div class="text-center">
                        <inertia-link :href="route('account.course.create', {account: account.username})" class="prevent-default">
                            <v-btn dark :color="account.theme_color">Add new course</v-btn>
                        </inertia-link>
                    </div>
                </template>
                <template v-else>
                    <h4> {{ 'Edit course: '+course.title }} </h4>
                    <hr>
                    <course-form @submit="submit" :course="course" :loading="loading" :color="account.theme_color"  :instructors="instructors" />
                </template>
            </v-col>
        </v-row>
    </v-container>
</template>

<script>
    import App from '@/layouts/App';
    import CourseForm from './../Components/CourseForm'

    export default {
        name: "CourseEdit",
        layout: (h, page) => h(App, [page]),
        components: {
            CourseForm
        },
         metaInfo()
         {
             return{
                title: `${this.course.title+' edit'}`,
                titleTemplate: '%s - AcadaApp',
             }
        },
        data(){
            return {
                loading: false,
            }
        },

        props:{
            account: Object,
            course: Object,
            instructors: Array,
        },
        methods: {
            async submit(formData){
               this.loading = true;
                await this.$inertia.post(this.route('account.course.update',{account: this.account.username, course: this.course.slug}), formData);
                this.loading = false;
            },

        },

    }
</script>