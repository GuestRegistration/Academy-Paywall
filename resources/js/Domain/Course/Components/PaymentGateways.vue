<template>
  <v-row justify="center">
    <v-dialog v-model="dialog" scrollable max-width="300px">      
      <v-card>
        <v-card-title>Payment method</v-card-title>
        <v-divider></v-divider>
        <v-card-text style="height: 300px;">
          <v-radio-group v-if="gateways.length" v-model="gateway" column>
            <v-radio v-for="g in gateways" :key="g.gateway" :label="g.gateway" :value="g.gateway"></v-radio>
          </v-radio-group>
          <div v-else class="text-muted text-center">
              <small>No payment gateway available yet</small>
          </div>
        </v-card-text>
        <v-divider></v-divider>
        <v-card-actions>
          <v-btn color="red" text @click="$emit('cancel')">Cancel</v-btn>
          <v-spacer></v-spacer>
          <v-btn v-if="gateway !== null" :color="account.theme_color" @click="$emit('continue', gateway)" dark>Continue</v-btn>
        </v-card-actions>
      </v-card>
    </v-dialog>
  </v-row>
</template>

<script>
  export default {
    name: "PaymentGateways",
    data () {
      return {
        gateway: null,
        dialog: false,
      }
    },
    props: {
        gateways: Array,
        account: Object,
        show: Boolean
    },

    watch:{
        show: {
            immediate: true,
            handler(show){
                this.dialog = show;
            }
        }
    }
  }
</script>