<template>
    <v-dialog
        v-model="dialog"
        max-width="400"
        v-if="invitation"
    >
    <v-card> 
        <v-card-title class="headline red--text"><v-icon class="red--text mr-2">delete</v-icon> Delete Invitation</v-card-title>
        <v-divider></v-divider>
        <v-card-text>
        <div class="text-center mt-3">
            <p>Delete invitation sent to {{ invitation.email }}</p>
        </div>
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
    name: "DeleteInvitationDialog",

    data(){
        return {
            loading: false,
            dialog: false,
            invitation: null
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
        show(invitation){
            this.dialog = true;
            this.invitation = invitation;
        },

        async confirm(){
            this.loading = true;
             await this.$inertia.post(
              this.route('account.instructor.invite.delete', {account: this.account.username}),
              { invitations: [this.invitation.id ]}
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