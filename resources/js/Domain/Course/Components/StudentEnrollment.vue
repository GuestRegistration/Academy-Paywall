<template>
    <v-row justify="center">
    <v-dialog v-model="dialog" fullscreen hide-overlay transition="dialog-bottom-transition">
      <v-card>
        <v-toolbar dark :color="account.theme_color">
          <v-toolbar-title>Enrollment info</v-toolbar-title>
          <v-spacer></v-spacer>
           <v-btn icon dark @click="$emit('close')">
            <v-icon>close</v-icon>
          </v-btn>
        </v-toolbar>
        <v-card-text>
          <div class="text-center">
            <v-icon :color="account.theme_color" size="100">check_circle</v-icon>
            <h1>Enrollment successful!</h1>
          </div>
        </v-card-text>
      </v-card>
    </v-dialog>
  </v-row>
</template>

<script>
    export default {
        name: 'StudentEnrollment',
        data(){
          return {
            dialog: false
          }
        },
        props: {
            account: Object,
            student: Object,
            show: Boolean,
        },
        watch: {
          show: {
            immediate: true,
            handler(show){
              this.dialog = show;
            }
          }
        }
    }
</script>