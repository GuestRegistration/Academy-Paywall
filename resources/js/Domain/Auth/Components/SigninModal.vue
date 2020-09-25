<template>
    <v-dialog v-model="dialog" scrollable persistent max-width="300px">
        <v-card>
            <v-card-title class="text-center">
                <v-spacer></v-spacer>
                <v-btn @click="dialog = false" class="red--text" icon>
                    <v-icon>close</v-icon>
                </v-btn>
            </v-card-title>
            <v-card-text>
                <div class="text-center">
                    <img src="/images/acada-icon.png" width="150px" />
                    <h1>{{ title }}</h1>
                </div>
                <signin-form />
            </v-card-text>
        </v-card>
    </v-dialog>
</template>

<script>
    import SigninForm from './SigninForm.vue';

    export default {
        name: "SigninModal",
        components: { SigninForm },
        data(){
            return {
                dialog: false,
                title: '',
            }
        },

        methods:{
            open(title = "Sign in"){
                this.title = title;
                this.dialog = true;
            },
            close(){
                this.title = '';
                this.dialog = false;
            }
        }
    }
</script>

<style lang="scss">
    .modal-open{
        padding: 0 !important;
    }
</style>