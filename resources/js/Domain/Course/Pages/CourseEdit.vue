<template>
    <v-container>
        <v-row justify="center">
            <v-col cols="12" md="8">
                <template>
                    <v-card :loading="loading" outlined pa-md-2> 
                        <v-card-title> {{ 'Edit course: '+course.title }}</v-card-title>
                        <v-divider></v-divider>
                        <v-card-text>                                         
                            <course-form @submit="submit" :course="course" :loading="loading" :color="account.theme_color" />              
                        </v-card-text>
                    </v-card>
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
            payg: Object,
            stripe_pk: String,
        },
        methods: {
            async submit(formData){
               this.loading = true;
                await this.$inertia.post(this.route('account.course.update',{account: this.account.username, course: this.course.slug}), formData);
                this.loading = false;
            },

        },

        mounted(){
            this.payment = this.$page.payment;
           
        }
    }
</script>