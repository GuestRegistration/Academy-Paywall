<template>
    <div class="form-group mb-4">
        <v-text-field
            outlined
            v-bind="$attrs"
            v-on="$listeners"
            :value="value"
            :label="label"
            prepend-inner-icon="local_phone"
            @focus="edit = true"
            :disabled="edit"
        >
        </v-text-field>    
        <div class="d-flex mb-3" v-if="edit">
            <div style="width: 90%">
                <VuePhoneNumberInput v-model="phone"
                    @input="phoneInput"
                    @update="phoneUpdated"
                    :error="thereIsError"
                    :no-use-browser-locale="true"
                    />
                <small v-if="errorString" 
                    class="error--text"
                >
                    {{ errorString }}
                </small>
            </div>
            <v-spacer></v-spacer>
            <v-btn icon @click="edit = false">
                <v-icon>close</v-icon>
            </v-btn>
        </div>       
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
                inputPayload: {},
                oldValue: '',
            }
        },
        computed: {
            errorString() {
                if(this.inputPayload.phoneNumber && !this.inputPayload.isValid) return 'Invalid phone number'
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
                this.$emit('input', this.inputPayload.isValid ? value.replace(/ /g,'') : undefined);
            },

            cancelEdit()
            {
                this.$emit('input', this.oldValue)
            }
        },

       
    }
</script>
