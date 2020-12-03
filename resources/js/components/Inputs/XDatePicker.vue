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
            <v-date-picker
            :color="$attrs.color"
            v-model="picker"
            :show-current="selected"
            @change="(date) => $emit('change', date)"
            next-icon="chevron_right"
            prev-icon="chevron_left"
            :min="$attrs.min"
            >

            </v-date-picker>
           </div>
         </v-col>
        </v-row>
        <small v-if="errorString" class="error--text text-center">
            {{ errorString }}
        </small>
    </div>
</template>

<script>
  import {mapGetters} from 'vuex';

  export default {
    name: 'XDatePicker',
    data () {
      return {
        picker: null,
        selected: false,
      }
    },
    props: {
        errors: null,
        label: String,
        current: String,
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
      current: {
        immediate: true,
        handler(date){
          if(!date){
            this.picker = new Date().toISOString().substr(0, 10);
            return;
          }
          this.picker = date;
        }
      }
    }
  }
</script>
