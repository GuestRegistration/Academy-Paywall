<template>
    <div>
        <v-row justify="center">
         <v-col cols="12">
           <div class="text-center">
            <label v-if="label" >{{ label }}</label>
           </div>
         </v-col>
         <v-col cols="12">
           <div class="text-center">
            <v-time-picker :color="$attrs.color" v-model="picker" @input="(time) => $emit('input', time)"></v-time-picker>
           </div>
         </v-col>
        </v-row>
        <div v-if="errorString" class="text-danger text-center">
            {{ errorString }}
        </div>
    </div>
</template>

<script>
  import {mapGetters} from 'vuex';

  export default {
    name: 'XTimePicker',
    data () {
      return {
        picker: null,
      }
    },
    props: {
        errors: null,
        label: String,
        value: String,
    },
    computed: {
        ...mapGetters([
            'auth', 'authenticated'
        ]),

        errorString() {
            if (typeof this.errors === 'string') return this.errors;
            if (!(this.errors && this.errors[this.$attrs.name])) return null;
            const error = this.errors[this.$attrs.name];
            return error.constructor === Array ? error[0] : error;
        },
    },

    watch:{
      value: {
        immediate: true,
        handler(time){
           this.picker = time;
        }
      }
    }
  }
</script>
