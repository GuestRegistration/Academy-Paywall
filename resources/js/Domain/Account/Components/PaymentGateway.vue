<template>
  <v-card
    class="mx-auto my-2"
    max-width="344"
  >
    <v-card-text>
      <v-row align="center" justify="center">
        <v-col cols="12">
          <img
            :src="gateway.image"
            width="100%"
            style="min-height: 100px"
          />
          <div class="d-flex">
            <v-btn
              color="green"
              :disabled="!f.active"
              icon
            >
              <v-icon>check_circle</v-icon>
            </v-btn>
             <v-spacer></v-spacer>
             <template  v-if="gateway.name == 'stripe'">
               <v-btn
                dark
                :color="auth.account.theme_color"
                type="button"
                v-if="f.credentials.stripe_user_id"
                >Connected</v-btn>
                <form
                  v-else  
                  ref="stripeConnect"
                  @submit.prevent="connectStripe"
                  :action="route('account.stripe.connect', { account: auth.account.id })"
                  method="post"
                >
                  <csrf />
                  <input type="hidden" name="country" v-model="f.country">
                  <v-btn
                    dark
                    :color="auth.account.theme_color"
                    :loading="stripe.connecting"
                    type="submit"
                  >
                    Connect
                  </v-btn>
                </form>
             </template>
             <v-btn
              icon
              @click="edit = !edit"
            >
              <v-icon>settings</v-icon>
            </v-btn>
          </div>
        </v-col>
        <v-col cols="12">
          <v-expand-transition>
            <div v-show="edit">
              <v-divider></v-divider>
              <v-card-text>
                <v-form ref="form" v-if="gateway.name == 'stripe'" @submit.prevent="submit">
                  <template v-if="f.credentials.stripe_user_id">
                    <v-switch v-model="f.active" label="Enable" :color="auth.account.theme_color" @change="gatewayActivated" ></v-switch>
                     <input 
                        v-model="f.credentials.stripe_user_id" 
                        type="hidden"
                      />
                      <div class="d-flex">
                        <x-button type="sumbit" :loading="loading"  :color="auth.account.theme_color" dark>Save</x-button>
                        <v-spacer></v-spacer>
                        <v-btn
                          dark
                          color="red"
                          :loading="stripe.disconnecting"
                          type="button"
                          @click="disconnectStripe"
                        >
                          Disconnect
                        </v-btn>
                        
                      </div>
                  </template>
                  <template v-else>
                    <v-alert type="info" icon="info">Connect your stripe account first</v-alert>
                  </template>
                </v-form>
                <v-form v-else ref="form" @submit.prevent="submit" >
                  <v-switch v-model="f.active" label="Enable" :color="auth.account.theme_color" @change="gatewayActivated" ></v-switch>
                  <template v-if="f.active && gateway.name !== 'stripe'">
                      <x-input 
                        v-for="(credential, c) in gateway.credentials" 
                        :key="c" :errors="errors" :name="`credentials.${credential.slug}`" 
                        :label="credential.name" 
                        v-model="f.credentials[credential.slug]" 
                        :disabled="!f.active"
                        :rules="[rules.required]"
                        :toggle-visibility="true"
                      />
                  </template>
                  <x-button type="sumbit" :loading="loading"  :color="auth.account.theme_color" dark>Save</x-button>
                </v-form>
              </v-card-text>
            </div>
        </v-expand-transition>
        </v-col>
      </v-row>
    </v-card-text>

  </v-card>
</template>

<script>
    import validation from '@/form_validation.js';
    export default {
        name: "PaymentGateway",
        props: {
            gateway: Object,
            form: Object,
        },
        data(){
            return {
                f: {},
                edit: false,
                loading: false,
                stripe: {
                  connecting: false,
                  disconnecting: false
                }
            }
        },
        computed: {
          auth() {
              return this.$page.auth
          },
          errors() {
              return this.$page.errors
          },
          rules(){
              return validation.rules;
          },
          // credentials(){
          //   const gateway = this.form.gateway ? this.gateways.find(gateway => gateway.name == this.form.gateway) : null;
          //   return gateway ? gateway.credentials : [];
          // }
        },
        methods: {
          async submit()
          {
            if(!this.$refs.form.validate()) return;
              this.loading = true;
              await this.$inertia.post(this.route('account.payment.gateway.store', { account: this.auth.account.username }), this.f);
              this.loading = false;
              this.edit = false;
              this.saved = true;
              this.$emit('gateway-updated', this.f);
          },

          gatewayActivated() {
              //this.$emit('gateway-updated', this.f);
          },

          connectStripe() {
            this.stripe.connecting = true;
            this.$refs.stripeConnect.submit();
          },

          async disconnectStripe() {
            this.stripe.disconnecting = true;
            await this.$inertia.post(this.route('account.stripe.disconnect', { account: this.auth.account.id }));
            this.stripe.disconnecting = false;
          }

        },

        watch: {
          form: {
            immediate: true,
            handler(form){
              this.edit = false;
              if(form.gateway == this.gateway.name){
                this.f = form
              }else{
                this.f = {
                  active: false,
                  country: form.country,
                  gateway: this.gateway.name,
                  credentials:  form.gateway == this.gateway.name ? form.credentials : {}
                }
              }
            } 
          }
        }
    }
</script>