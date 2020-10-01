<template>
    <v-dialog
        v-model="dialog"
        max-width="400"
        v-if="user"
    >
    <v-card> 
        <v-card-title class="headline red--text">
            <v-icon class="red--text mr-2">delete</v-icon> Remove Instructor
            <v-spacer></v-spacer>
            <v-btn icon color="red" @click="cancel"><v-icon>close</v-icon></v-btn>
        </v-card-title>
        <v-divider></v-divider>
        <v-card-text>
        <div class="text-center mt-3">
            <h2>{{user.profile.fullname}}</h2>
            <p>Remove instructor from your organization</p>
        </div>
        </v-card-text>
        <v-card-actions>
        <v-spacer></v-spacer>
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
    name: "RemoveUserDialog",

    data(){
        return {
            loading: false,
            dialog: false,
            user: null
        }
    },
    props: {
        account: Object,
    },
    computed: {
        errors(){
            return this.$page.errors;
        },
    },
    methods: {
        show(user){
            this.dialog = true;
            this.user = user;
        },

        async confirm(){
            this.loading = true;
             await this.$inertia.post(
              this.route('account.instructor.remove', {account: this.account.username}),
              { users: [this.user.id ]}
            );
            this.loading = false;
            if(!Object.keys(this.errors).length){
                this.dialog = false;
            }
        },

        cancel(){
            this.dialog = false;
            this.$emit('cancelled');
        }
    }
}
</script>