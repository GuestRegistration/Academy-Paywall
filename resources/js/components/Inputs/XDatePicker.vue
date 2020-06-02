<template>
    <div>
        <v-row justify="center">
            <label v-if="label">{{ label }}</label>
            <v-date-picker v-model="picker" :show-current="selected" @change="(date) => $emit('change', date)"></v-date-picker>
        </v-row>
        <div v-if="errorString" class="text-danger text-center">
            {{ errorString }}
        </div>
    </div>
</template>

<script>
  export default {
    name: 'XDatePicker',
    data () {
      return {
        picker: new Date().toISOString().substr(0, 10),
        selected: false,
      }
    },
    props: {
        errors: null,
        label: String,
        current: {
            default: () => {
                const date = new Date();
                const padZero = (number) => number < 10 ? '0'+number : number;
                return `${date.getFullYear()}-${padZero(date.getMonth()+1)}-${padZero(date.getDate())}`           
           },
        }
    },
    computed: {
        errorString() {
            if (typeof this.errors === 'string') return this.errors;
            if (!(this.errors && this.errors[this.$attrs.name])) return null;
            const error = this.errors[this.$attrs.name];
            return error.constructor === Array ? error[0] : error;
        },
    },

    watch:{
      current: {
        immediate: true,
        handler(date){
           this.picker = new Date(date).toISOString().substr(0, 10)
        }
      }
    }
  }
</script>
