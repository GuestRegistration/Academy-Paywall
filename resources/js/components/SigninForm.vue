<template>
    <div>
        <div v-if="status" class="alert alert-info">
            {{status}}
        </div>
        <!-- Form -->
        <form @submit.prevent="submit" class="my-3">
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
            };
        },

        computed: {
            status(){
                return this.$page.status
            },
            errors(){
                return this.$page.errors
            }
        },
        
        methods: {
            async submit() {
                this.ui.loading = true;
                await this.$inertia.post(this.route('signin.magic.link'), this.form)
                this.ui.loading = false;
            },
        },
        created(){
            this.form.timezone = jstz.determine().name();
        }
    }
</script>