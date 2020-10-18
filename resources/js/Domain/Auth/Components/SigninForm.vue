<template>
    <div>
        <v-alert v-if="status"
            v-model="alert"
            dismissible
            border="left"
            colored-border
            color="info"
            class="my-2"
            elevation="2"
            close-icon="close"
        >
            {{status}}
        </v-alert>
         <v-alert v-if="error"
            v-model="alert"
            dismissible
            border="left"
            colored-border
            color="red"
            class="my-2"
            elevation="2"
            close-icon="close"
        >
            {{error}}
        </v-alert>

        <!-- Form -->
        <v-form @submit.prevent="submit" class="my-3" v-if="!alert" ref="signInForm">
            <x-input :errors="errors" name="email" type="email" v-model="form.email" label="Email" :rules="[rules.required, rules.email]" />
            <x-button :loading="ui.loading" type="submit"  dark color="accent-4" class="primary" block>
                Sign in
            </x-button>
        </v-form>
    </div>
</template>

<script>
    import  jstz from 'jstz';
    import validation from '@/form_validation.js';

    export default {
        name: "SigninForm",
        
        data() {
            return {
                alert: false,
                form: {},
                ui: {
                    loading: false,
                },
                status: 'fuck',
                error: null,
                errors: null
            };
        },

        computed: {
            rules(){
                return validation.rules;
            }
        },
        
        methods: {
            async submit() {
                if(!this.$refs.signInForm.validate()) return;

                this.ui.loading = true;
                this.status = null;
                this.error = null;
                axios.post(this.route('signin.magic.link'), this.form)
                .then(response => {
                    this.status = response.data;
                    this.form.email = '';
                })
                .catch(e => {
                    if(e.response && e.response.status !== 200){
                        this.error = "Something went wrong, try again";
                    }
                    this.errors = e.response ? e.response.data.errors : [];
                })
                .finally(() => {
                    this.ui.loading = false;  
                    this.alert = true;
                })
               
            },
        },
        created(){
            this.form.timezone = jstz.determine().name();
        }
    }
</script>