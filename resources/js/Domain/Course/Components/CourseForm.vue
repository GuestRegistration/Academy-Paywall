<template>
    <form @submit.prevent="submit">
        <v-container fluid style="overflow: auto">
            <v-alert icon="report_problem" prominent text type="error" v-if="Object.keys(errors).length">
                Could not save the course, some information are not valid
            </v-alert>
            <v-expansion-panels
            popout
            focusable
            >
                <v-expansion-panel>
                    <v-expansion-panel-header>
                        <h4>
                            <v-icon v-if="Object.keys(errors).some(error => ['title', 'description', 'course_type'].includes(error))" color="red" class="mr-3" title="There is error in this section">report_problem</v-icon>
                            Course Information
                        </h4>
                    </v-expansion-panel-header>
                    <v-expansion-panel-content class="py-3">
                        <x-input :errors="errors" name="title" type="text" v-model="form.title" label="Course title" />
                        <x-select :errors="errors" :value="form.course_type" label="Course type" name="course_type" :items="course_types" outlined @change="(selected) => form.course_type = selected" />
                        <div class="form-group" style="overflow: auto">
                            <label>Course description</label>
                            <wysiwyg v-model="form.description" />
                            <div v-if="errors && errors.description && errors.description.length" class="text-danger">{{ errors.description[0] }}</div>
                        </div>
                    </v-expansion-panel-content>
                </v-expansion-panel>

                <v-expansion-panel>
                    <v-expansion-panel-header>
                        <h4>
                            <v-icon v-if="Object.keys(errors).some(error => ['price'].includes(error))" color="red" class="mr-3" title="There is error in this section">report_problem</v-icon>
                            Payment
                        </h4>
                    </v-expansion-panel-header>
                    <v-expansion-panel-content class="py-3">
                        <v-switch v-model="form.requires_payment" label="Require payment for enrollment" :color="account.theme_color" ></v-switch>
                        <template v-if="form.requires_payment">
                            <div v-if="paymentGateway && paymentGateway.active">
                                <v-alert icon="info" prominent text type="info">
                                    Payment would will be received in <strong>{{paymentGateway.currency}}</strong> via {{paymentGateway.gateway}}
                                </v-alert>
                                <div class="text-right">
                                    <inertia-link :href="route('account.payment.gateway', {account: account.username})" class="prevent-default">
                                        <v-icon>settings</v-icon> Payment method settings
                                    </inertia-link>                                </div>
                                <x-input  :errors="errors" name="price" type="number" v-model="form.price" label="Price" />
                            </div>
                            <div v-else>
                                <v-alert icon="report_problem" prominent text type="error">
                                You do not have any payment method enabled yet.
                                </v-alert>
                                <div class="text-right">
                                    <inertia-link :href="route('account.payment.gateway', {account: account.username})" class="prevent-default">
                                        <v-icon>settings</v-icon> Payment method settings
                                    </inertia-link>
                                </div>
                            </div>
                        </template>
                    </v-expansion-panel-content>
                </v-expansion-panel>

                <v-expansion-panel>
                    <v-expansion-panel-header>
                        <h4>
                            <v-icon v-if="Object.keys(errors).some(error => ['start_date', 'start_time'].includes(error))" color="red" class="mr-3" title="There is error in this section">report_problem</v-icon>
                            Starting Date and Time
                        </h4>
                    </v-expansion-panel-header>
                    <v-expansion-panel-content class="py-3">
                        <v-row>
                            <v-col cols="12" lg="6">
                                <x-date-picker :errors="errors" label="Date" name="start_date" :current="start_date" @change="(date) => {start_date = date; end_date = date}"  :color="account.theme_color" />
                            </v-col>
                            <v-col cols="12" lg="6">
                                <x-time-picker :errors="errors" label="Time" name="start_date" @input="(time) => {start_time = time; end_time = time}" :value="start_time"  :color="account.theme_color" />
                            </v-col>
                        </v-row>
                    </v-expansion-panel-content>
                </v-expansion-panel>

                    <v-expansion-panel>
                    <v-expansion-panel-header>
                        <h4>
                            <v-icon v-if="Object.keys(errors).some(error => ['end_date','end_time'].includes(error))" color="red" class="mr-3" title="There is error in this section">report_problem</v-icon>
                            Ending Date and Time
                        </h4>
                    </v-expansion-panel-header>
                    <v-expansion-panel-content class="py-3">
                        <v-row>
                            <v-col cols="12" lg="6">
                                <x-date-picker :errors="errors" label="Date" name="end_date" :current="end_date" @change="(date) => end_date = date"  :color="account.theme_color" />
                            </v-col>
                            <v-col cols="12" lg="6">
                                <x-time-picker :errors="errors" label="Time" name="end_time" v-model="end_time" :color="account.theme_color" />
                            </v-col>
                        </v-row>
                    </v-expansion-panel-content>
                </v-expansion-panel>

                <v-expansion-panel>
                    <v-expansion-panel-header>
                        <h4>
                            <v-icon v-if="Object.keys(errors).some(error => ['cover_image'].includes(error))" color="red" class="mr-3" title="There is error in this section">report_problem</v-icon>
                            Cover Image
                        </h4>
                    </v-expansion-panel-header>
                    <v-expansion-panel-content class="py-3">
                        <x-file-input :errors="errors" :src="form.cover_image" name="cover_image" label="Cover image" @change="(files) => form.cover_image = files[0]" />
                        <!-- <v-col cols="12">
                            <x-file-input :errors="errors" name="preview_video" label="Preview video" @change="(files) => form.preview_video = files[0]" />
                        </v-col> -->
                    </v-expansion-panel-content>
                </v-expansion-panel>

                <v-expansion-panel>
                    <v-expansion-panel-header>
                        <h4>
                            <v-icon v-if="errors && errors.instructors && errors.instructors.length" color="red" class="mr-3" title="There is error in this section">report_problem</v-icon>
                            Instructors
                        </h4>
                    </v-expansion-panel-header>
                    <v-expansion-panel-content class="py-3">
                        <label for="">Select instructors that are facilitating this course</label>
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
                                        <v-icon  :color="`${selectedInstructors.includes(data.item) ? account.theme_color : 'grey'}`">check_circle</v-icon>
                                    </div>
                                    <div class="mr-2">
                                        <avatar :src="getInstructor(data.item).profile.avatar" :color="account.theme_color" size="40" :text="getInstructor(data.item).profile.initials" />
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
                                    <avatar :src="getInstructor(data.item).profile.avatar" :color="account.theme_color" size="30" :text="getInstructor(data.item).profile.initials" />
                                    <span class="ml-2">{{ getInstructor(data.item).profile.fullname}}</span>

                                </v-chip>
                            </template>
                        </v-combobox>
                    </v-expansion-panel-content>
                </v-expansion-panel>

                <v-expansion-panel>
                    <v-expansion-panel-header>
                        <h4>
                            <v-icon v-if="errors && errors.instructions && errors.instructions.length" color="red" class="mr-3" title="There is error in this section">report_problem</v-icon>
                            Onboarding Email
                        </h4>
                    </v-expansion-panel-header>
                    <v-expansion-panel-content class="py-3">
                        <div>
                            <p>Send a mail to your student after a successful enrollment. This could be an instruction on how to proceed with the course or a welcoming message</p>
                        </div>
                        <v-switch v-model="form.send_instructions" :color="account.theme_color" label="Send welcome email" ></v-switch>
                        <div v-if="form.send_instructions" style="overflow: auto">
                            <label>Compose message</label>
                            <wysiwyg v-model="form.instructions" />
                            <div v-if="errors && errors['instructions'] && errors['instructions'].length" class="text-danger">{{ errors['instructions'][0] }}</div>
                        </div>
                    </v-expansion-panel-content>
                </v-expansion-panel>

            </v-expansion-panels>

            <v-btn fixed dark fab bottom right x-large
                :loading="loading" type="submit"
                :color="account.theme_color">
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
                selectedInstructors: [],
                start_date: null,
                start_time: null,
                end_date: null,
                end_time: null,
            }
        },
        computed: {
            errors(){
                return this.$page.errors;
            },
            instructorIds(){
                return this.instructors.map(instructor => instructor.id);
            },
            paymentGateway(){
                return this.$page.payment_gateway;
            },
            account(){
                return this.$page.account
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
                this.form.start_date = `${this.start_date} ${this.start_time}`;
                this.form.end_date = `${this.end_date} ${this.end_time}`;

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
                this.start_date = this.course.raw_dates.start.date;
                this.start_time =  this.course.raw_dates.start.time;
                this.end_date = this.course.raw_dates.end.date;
                this.end_time = this.course.raw_dates.end.time;

                this.form = {
                    ...this.course,
                    requires_payment: this.course.payment.require,
                };
                this.selectedInstructors = this.course.users.map(user => user.id);
            }else{
                this.start_date = new Date().toISOString().substr(0, 10);
                this.start_time =  null;
                this.end_date = new Date().toISOString().substr(0, 10);
                this.end_time = null;
            }
        }
    }
</script>