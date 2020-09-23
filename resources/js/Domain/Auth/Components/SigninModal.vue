<template>
    <v-dialog v-model="dialog" scrollable persistent max-width="300px">
        <v-card>
            <v-card-title class="text-center">
                <span class="headline">{{ title }}</span>
                <v-spacer></v-spacer>
                <v-btn @click="dialog = false" class="red--text" icon>
                    <v-icon>close</v-icon>
                </v-btn>
            </v-card-title>
            <v-card-text>
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
            open(title = "Signin"){
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