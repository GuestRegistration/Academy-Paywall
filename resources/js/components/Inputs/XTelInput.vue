<template>
    <div class="form-group mb-4">
        <div class="d-flex">
            <div>
                <label :for="$attrs.id" v-if="label">{{ label }} : {{ value }}</label>
                <div v-if="inputPayload.phoneNumber && !inputPayload.isValid" class="red--text">
                    Invalid phone number
                </div>
            </div>
            <v-spacer></v-spacer>
            <v-btn icon @click="edit = !edit">
                <v-icon>create</v-icon>
            </v-btn>
        </div>
       <VuePhoneNumberInput v-if="edit" v-model="phone"
        @input="phoneInput"
        @update="phoneUpdated"
        :error="thereIsError"
        :no-use-browser-locale="false"
        />
        <span v-if="errorString" class="red--text">
            {{ errorString }}
        </span>
    </div>

</template>

<script>
    import VuePhoneNumberInput from 'vue-phone-number-input';
    import 'vue-phone-number-input/dist/vue-phone-number-input.css';

    export default {
        name: 'XTelInput',
        components: {
            VuePhoneNumberInput
        },
        props: {
            errors: null,
            label: String,
            rule: String,
            value: String,
        },
        data(){
            return {
                phone: '',
                edit: false,
                inputPayload: {}
            }
        },
        computed: {
            errorString() {
                if (typeof this.errors === 'string') return this.errors;
                if (!(this.errors && this.errors[this.$attrs.name])) return null;
                const error = this.errors[this.$attrs.name];
                return error.constructor === Array ? error[0] : error;
            },
            
            thereIsError(){
                if(this.inputPayload.phoneNumber && this.inputPayload.isValid) return false;
                if(this.errorString) return true;
            }
        },

        methods:{
            phoneUpdated(payload){
                this.inputPayload = payload;
            },

            phoneInput(value){
                this.$emit('input', this.inputPayload.isValid ? value : undefined)
            }
        }
    }
</script>
