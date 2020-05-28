<template>
    <v-card :loading="loading" outlined pa-md-2> 
        <v-card-title> New course</v-card-title>
        <v-divider></v-divider>
        <v-card-text> 
            <v-container>
                <v-row justify="center" align="center">
                    <v-col cols="12" md="6">
                            <x-file-input :errors="errors" name="cover_image" label="Cover image" @change="getFile" />
                    </v-col>
                    <v-col cols="12" md="6">
                        <form @submit.prevent="submit">
                            <x-input :errors="errors" name="title" type="text" v-model="form.title" label="Course title" />
                            <x-textarea :errors="errors" name="description" v-model="form.description" label="Course description" />
                            <x-input :errors="errors" name="price" type="number" v-model="form.price" label="Price" />
                            <!-- Submit -->
                            <x-button :loading="loading" type="submit"  dark color="accent-4" class="primary">
                            Save
                            </x-button>
                        </form>                    
                    </v-col>
                </v-row>
            </v-container>
        </v-card-text>
    </v-card>
</template>

<script>
    import App from '@/layouts/App';

    export default {
        name: "CourseCreate",
        layout: (h, page) => h(App, [page]),
        data(){
            return {
                loading: false,
                form: {},
            }
        },
        computed: {
            errors(){
                return this.$page.errors;
            },
        },

        methods: {
           async submit(){
               this.loading = true;
               await this.$inertia.post(this.route('course.store'), this.formData());
               this.loading = false;
            },
            
            getFile(files){
                this.form.cover_image = files[0];
            },

            formData() {
                const form = new FormData;
                Object.keys(this.form).forEach(key => {
                    form.append(key, this.form[key]);
                })

                return form;
            },

        },
    }
</script>