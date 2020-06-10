<template>
    <v-row justify="center">
        <v-col cols="12" md="8">
            <v-card :loading="loading" outlined pa-md-2> 
                <v-card-title> {{ course ? 'Edit course: '+course.title : 'New course' }}</v-card-title>
                <v-divider></v-divider>
                <v-card-text>                                         
                    <form @submit.prevent="submit">
                        <v-container>
                            <v-row justify="center" align="center">
                                <v-col cols="12">
                                    <x-input :errors="errors" name="title" type="text" v-model="form.title" label="Course title" />
                                    <x-textarea :errors="errors" name="description" v-model="form.description" label="Course description" />
                                    <x-input :errors="errors" name="price" type="number" v-model="form.price" label="Price" />
                                    <v-row>
                                        <v-col cols="12" lg="6">
                                            <x-date-picker :errors="errors" label="Starting date" name="start_date" :current="form.start_date" @change="(date) => form.start_date = date" />
                                        </v-col>
                                        <v-col cols="12" lg="6">
                                            <x-date-picker :errors="errors" label="Ending date" name="end_date" :current="form.end_date" @change="(date) => form.end_date = date" />
                                        </v-col>
                                    </v-row>
                                    <x-select :errors="errors" :value="form.course_type" label="Course type" name="course_type" :items="course_types" outlined @change="(selected) => form.course_type = selected" />
                                </v-col>

                                <v-col cols="12">
                                    <x-file-input :errors="errors" :src="form.cover_image" name="cover_image" label="Cover image" @change="(files) => form.cover_image = files[0]" />
                                </v-col>

                                <v-col cols="12">
                                     <v-switch v-model="form.send_instructions" label="Send instruction after enrollment" ></v-switch>
                                    <div>
                                        <small>Send a mail to your student after a successful enrollment. This could be an instruction on how to proceed with the course or a welcoming message</small>
                                    </div>
                                     <div v-if="form.send_instructions">
                                        <label>Message</label>
                                        <wysiwyg v-model="form.instructions" />
                                        <div v-if="errors && errors['instructions'] && errors['instructions'].length" class="text-danger">{{ errors['instructions'][0] }}</div>
                                     </div>
                                </v-col>

                                <!-- <v-col cols="12">
                                    <x-file-input :errors="errors" name="preview_video" label="Preview video" @change="(files) => form.preview_video = files[0]" />
                                </v-col> -->
                            </v-row>
                            <v-btn fixed dark fab bottom right x-large
                                :loading="loading" type="submit"
                                :color="account.theme_color">
                                <v-icon>mdi-check</v-icon>
                            </v-btn>
                            </v-container>
                    </form>                    
                </v-card-text>
            </v-card>
        </v-col>
    </v-row>
</template>

<script>
    import App from '@/layouts/App';

    export default {
        name: "CourseCreate",
        layout: (h, page) => h(App, [page]),
         metaInfo()
         {
             return{
                title: `${this.course ? this.course.title+' edit' : 'New course '+this.account.at_username}`,
                titleTemplate: '%s - AcadaApp',
             }
        },
        data(){
            return {
                loading: false,
                form: {},
                course_types: [
                    'Zoom', 'Google classroom'
                ]
            }
        },
        computed: {
            errors(){
                return this.$page.errors;
            },
        },
        props:{
            account: Object,
            course: Object,
        },
        methods: {
           async submit(){
               this.loading = true;
               if(this.course){
                await this.$inertia.post(this.route('account.course.update',{account: this.account.username, course: this.course.slug}), this.formData());
               }else{
                await this.$inertia.post(this.route('account.course.store',{account: this.account.username}), this.formData());
               }
               this.loading = false;
            },
            formData() {
                const form = new FormData;
                Object.keys(this.form).forEach(key => {
                    if(this.form[key] != null && this.form[key] != "null"){
                        form.append(key, this.form[key]);
                    }
                    
                })

                return form;
            },
        },
        mounted(){
            if(this.course){
                this.form = this.course;
                this.form.start_date = this.course.raw_dates.start;
                this.form.end_date = this.course.raw_dates.end;
            }
           
        }
    }
</script>