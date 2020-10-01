<template>
    <div>
        <v-alert v-if="status"
            border="left"
            colored-border
            color="info"
            class="my-2"
            elevation="2"
        >
            {{status}}
        </v-alert>
         <v-alert v-if="error"
            border="left"
            colored-border
            color="red"
            class="my-2"
            elevation="2"
        >
            {{error}}
        </v-alert>

        <!-- Form -->
        <form @submit.prevent="submit" class="my-3" v-if="!status">
            <x-input :errors="errors" name="email" type="email" v-model="form.email" label="Email" required />
            <x-button :loading="ui.loading" type="submit"  dark color="accent-4" class="primary" block>
                Sign in
            </x-button>
        </form>
    </div>
</template>

<script>
    import  jstz from 'jstz';

    export default {
        name: "SigninForm",
        
        data() {
            return {
                form: {},
                ui: {
                    loading: false,
                },
                status: null,
                error: null,
                errors: null
            };
        },
        
        methods: {
            async submit() {
                this.ui.loading = true;
                this.status = null;
                this.error = null;
                axios.post(this.route('signin.magic.link'), this.form)
                .then(response => {
                    this.status = response.data;
                })
                .catch(e => {
                    if(e.response && e.response.status !== 200){
                        this.error = "Something went wrong, try again";
                    }
                    this.errors = e.response ? e.response.data.errors : [];
                })
                .finally(() => {
                    this.ui.loading = false;                
                })
               
            },
        },
        created(){
            this.form.timezone = jstz.determine().name();
        }
    }
</script>