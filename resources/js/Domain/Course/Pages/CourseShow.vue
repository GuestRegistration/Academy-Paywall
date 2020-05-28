<template>
    <v-container>
        <v-row justify="center" align="center">
           
        </v-row>
    </v-container>
</template>

<script>
    import App from '@/layouts/App';

    export default {
        name: "AccountShow",
        layout: (h, page) => h(App, [page]),
        data(){
            return {
                loading: false,
                form: {},
            }
        },
        props: {
            account: Object
        },
        computed: {
            errors(){
                return this.$page.errors;
            },
        },

        methods: {
           async submit(){
               this.loading = true;
               await this.$inertia.put(this.route('account.update'), this.form);
               this.loading = false;
            }
        },

        mounted(){
            this.form = this.account;
        }
    }
</script>