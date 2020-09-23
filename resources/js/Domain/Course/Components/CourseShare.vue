<template>
    <v-dialog
        v-model="dialog"
        max-width="600"
        v-if="course"
    >
    <v-card> 
        <v-card-title class="headline" :color="account.theme_color"><v-icon>share</v-icon> <span class="ml-3">Share course</span></v-card-title>
        <v-divider></v-divider>
        <v-card-text>
        <div class="text-center my-5">
            <h2>{{course.title}}</h2>
        </div>
        <div class="text-center">
            <v-text-field
                v-model="link"
                id="course-link"
                class="text-center"
                append-icon="link"
                readonly
                shaped
                solo
            ></v-text-field>
            <v-btn @click="copyLink" :color="account.theme_color" text>copy link</v-btn>
        </div>
        </v-card-text>
        <v-card-actions>
        <v-spacer></v-spacer>
        <v-btn
            text
            class="red--text"
            @click="close"
        >
            close
        </v-btn>
        </v-card-actions>
    </v-card>
    </v-dialog> 
</template>

<script>
export default {
    name: "CourseShare",
    data(){
        return {
            loading: false,
            dialog: false,
            course: null
        }
    },
    props: {
        account: Object
    },
    computed: {
        link(){
            return this.course ? route('account.course.show', { account: this.account.username, course: this.course.slug }) : '';
        }
    },
    methods: {
        show(course){
            this.dialog = true;
            this.course = course;
        },

        copyLink(){
            let input = document.getElementById('course-link');
            input.select();
            if(document.execCommand('copy')){
                toastr.success('Course link copied to clipboard');
            }else{
                toastr.error('Failed to copy the course.');
            }
        },

        close(){
            this.dialog = false;
            this.$emit('closed');
        }
    }
}
</script>