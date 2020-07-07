<template>
    <v-dialog
        v-model="dialog"
        max-width="290"
    >
    <v-card> 
        <v-card-title class="headline red--text"><v-icon class="red--text">delete</v-icon> Delete course</v-card-title>
        <v-divider></v-divider>
        <v-card-text>
        <div class="text-center">
            <h4 >{{course.title}}</h4>
        </div>
        <p>Deleting the course will also delete all students and payment records for the course and it's not reversible</p>
        </v-card-text>
        <v-card-actions>
        <v-spacer></v-spacer>
        <v-btn
            text
            @click="cancel"
        >
            Cancel
        </v-btn>

        <v-btn
            color="red"
            text
            @click="confirm"
            :loading="loading"
        >
            Confirm
        </v-btn>
        </v-card-actions>
    </v-card>
    </v-dialog> 
</template>

<script>
export default {
    name: "CourseDelete",
    data(){
        return {
            loading: false,
            dialog: false,
            course: {}
        }
    },
    props: {
        account: Object
    },
    methods: {
        show(course){
            this.dialog = true;
            this.course = course;
        },

        async confirm(){
            this.loading = true;
             await this.$inertia.delete(
              this.route('account.course.delete', {account: this.account.username, course: this.course.slug})
            );
            this.loading = false;
        },

        cancel(){
            this.dialog = false;
            this.$emit('cancelled');
        }
    }
}
</script>