<template>
    <v-card :loading="loading" outlined pa-md-2> 
        <v-card-title> New course</v-card-title>
        <v-divider></v-divider>
        <v-card-text>                                         
            <form @submit.prevent="submit">
                <v-container>
                    <v-row justify="center" align="center">
                        <v-col cols="12" md="6">
                            <x-input :errors="errors" name="title" type="text" v-model="form.title" label="Course title" />
                            <x-textarea :errors="errors" name="description" v-model="form.description" label="Course description" />
                            <x-input :errors="errors" name="price" type="number" v-model="form.price" label="Price" />
                        </v-col>
                        <v-col cols="12" md="6">
                            <x-file-input :errors="errors" name="cover_image" label="Cover image" @change="getFile" />
                        </v-col>
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
</template>

<script>
    import AccountLayout from '@/Domain/Account/Layout';

    export default {
        name: "CourseCreate",
        layout: (h, page) => h(AccountLayout, [page]),
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
        props:{
            account: Object,
        },
        methods: {
           async submit(){
               this.loading = true;
               await this.$inertia.post(this.route('account.course.store',{account: this.account.username}), this.formData());
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