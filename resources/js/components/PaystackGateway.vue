<template>
    <div >
        <slot />
    </div>
</template>

<script>
    export default {
        name: "PaystackGateway",
        data(){
            return {
                process: '',
            }
        },
        props: {
            data: Object,
            publicKey: String,
            email: String,
            amount: Number,
            currency: String,
            charge_callback: Function,
            color: {
                type: String,
                default: () => '#000'
            }
        },

        computed: {
            processing(){
                return this.process === '' ? false : true
            }
        },

        methods: {
            open(){
                this.initialize();
            },

            initialize()
            {
                this.setPaystack()
                .then(() => {
                    this.$emit('init-success');
                    this.paystackPayment();
                })
                .catch(e => {
                    this.$emit('init-failed');
                })
            },

            setPaystack()
            {
                return new Promise((resolve, reject) => {
                    if(document.querySelector("[data-paystack='true']") !== null){
                        resolve();
                        return;
                    }
                    this.$emit('process', 'Initializing payment gateway...');
                    let paystackScript = document.createElement('script')
                    paystackScript.setAttribute('src', 'https://js.paystack.co/v1/inline.js');
                    document.head.appendChild(paystackScript);

                    paystackScript.onload = (e) => {
                        paystackScript.setAttribute('data-paystack', 'true');
                        this.$emit('process', null);
                        resolve();
                    };
                    
                    paystackScript.onerror = (e) => {
                        this.$emit('process', null);
                        reject(e);
                    }; 
                })
            },

        paystackPayment(){
            const handler = PaystackPop.setup({
                 ...this.data,
              key: this.publicKey,
              email: this.email,
              amount: this.amount,
              currency: this.currency,
              callback: (response) => {
                 this.$emit('payment-success');
                  this.charge_callback(response)
                  .then((response) => {
                      this.$emit('success', response);
                  })
                  .catch(e => {
                       this.$emit('error', e);
                  })
              },
              onClose: () => {
                  this.$emit('aborted');
              }
            });
            this.$emit('process', null);
            handler.openIframe();
          },

        },
    }
</script>
