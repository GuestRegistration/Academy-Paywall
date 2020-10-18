<template>
  <v-card
    class="mx-auto my-2"
    max-width="344"
  >

    <v-card-text>
      <img
      :src="gateway.image"
      width="100%"
      style="min-height: 100px"
      />
    </v-card-text>

    <v-card-actions>
      <v-btn
        color="green"
        :disabled="!f.active"
        icon
      >
       <v-icon>check_circle</v-icon>
      </v-btn>
      <v-spacer></v-spacer>
      <v-btn
        icon
        @click="edit = !edit"
      >
        <v-icon>settings</v-icon>
      </v-btn>
    </v-card-actions>

    <v-expand-transition>
      <div v-show="edit">
        <v-divider></v-divider>

        <v-card-text>
          <v-form ref="form" @submit.prevent="submit">
            <v-switch v-model="f.active" label="Enable" :color="auth.account.theme_color" @change="gatewayActivated" ></v-switch>
            <template v-if="f.active">
                <x-input 
                  type="password" 
                  v-for="(credential, c) in gateway.credentials" 
                  :key="c" :errors="errors" :name="`credentials.${credential.slug}`" 
                  :label="credential.name" 
                  v-model="f.credentials[credential.slug]" 
                  :disabled="!f.active"
                  :rules="[rules.required]" 
                />
                <x-button type="sumbit" :loading="loading"  :color="auth.account.theme_color" dark>Save</x-button>
            </template>
          </v-form>
        </v-card-text>
      </div>
    </v-expand-transition>
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
            credentials(){
              const gateway = this.form.gateway ? this.gateways.find(gateway => gateway.name == this.form.gateway) : null;
              return gateway ? gateway.credentials : [];
          }
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
          }
        },

        watch: {
          form: {
            immediate: true,
            handler(form){
              if(form.gateway == this.gateway.name){
                this.f = form
              }else{
                this.f = {
                  active: false,
                  currency: form.currency,
                  gateway: this.gateway.name,
                  credentials: {}
                }
              }
            } 
          }
        }
    }
</script>