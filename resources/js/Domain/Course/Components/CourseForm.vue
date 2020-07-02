<template>
    <form @submit.prevent="submit">
        <v-container fluid style="overflow: auto">
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
                    <v-combobox
                    v-model="selectedInstructors"
                    :items="instructorIds"
                    label="Instructors"
                    multiple
                    deletable-chips
                    counter
                    :error="errors && errors.instructors && errors.instructors.length ? true : false"
                    :error-messages="errors && errors.instructors && errors.instructors.length ? errors.instructors[0] : ''"
                    :filter="(item, queryText, itemText) =>  true"
                    >
                     <template v-slot:item="data" >
                         <div class="d-flex align-items-center">
                             <div class="mr-3">
                                <v-icon  :color="`${selectedInstructors.includes(data.item) ? color : 'grey'}`">check_circle</v-icon>
                            </div>
                             <div class="mr-2">
                                <avatar :src="getInstructor(data.item).avatar" :color="color" size="40" :text="getInstructor(data.item).profile.initials" />
                             </div>
                            <div>{{getInstructor(data.item).profile.fullname }}</div>
                         </div>
                    </template>
                    <template v-slot:selection="data">
                        <v-chip 
                            :key="data.item"
                            v-bind="data.attrs"
                            :input-value="data.selected"
                            :disabled="data.disabled"
                            @click:close="data.parent.selectItem(data.item)"
                            close
                        >
                            <avatar :src="getInstructor(data.item).profile.avatar" :color="color" size="30" :text="getInstructor(data.item).profile.initials" />
                            <span class="ml-2">{{ getInstructor(data.item).profile.fullname}}</span>

                        </v-chip>
                    </template>
                    </v-combobox>
                </v-col>

                <v-col cols="12">
                    <v-switch v-model="form.send_instructions" label="Send instruction after enrollment" ></v-switch>
                    <div>
                        <small>Send a mail to your student after a successful enrollment. This could be an instruction on how to proceed with the course or a welcoming message</small>
                    </div>
                    <div v-if="form.send_instructions" style="overflow: auto">
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
                :color="color">
                <v-icon>mdi-check</v-icon>
            </v-btn>
        </v-container>
    </form>  
</template>

<script>
    export default {
        name: "CourseForm",
        props: {
            course: Object,
            loading: Boolean,
            color: String,
            instructors: Array,
        },
        data(){
            return {
                form: {},
                course_types: [
                    'Zoom', 'Google classroom'
                ],
                selectedInstructors: []
            }
        },
        computed: {
            errors(){
                return this.$page.errors;
            },
            instructorIds(){
                return this.instructors.map(instructor => instructor.id);
            }
        },

        methods: {
            getInstructor(id){
                return this.instructors.find(instructor => instructor.id === id)
            },
            submit(){
                this.$emit('submit', this.formData())
            },

           formData() {
                const form = new FormData;
                this.form.instructors = JSON.stringify(this.selectedInstructors);

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
                this.selectedInstructors = this.course.users.map(user => user.id);
            }
        }
    }
</script>