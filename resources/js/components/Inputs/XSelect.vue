<template>
    <div>
         <v-select
          :items="items"
          v-bind="$attrs"
          v-on="$listeners"
          :label="label"
          :error="errorString ? true : false"
          :error-messages="errorString ? errorString : ''"
          :append-icon="appendIcon"
          :append-outer-icon="appendOuterIcon"
        ></v-select>
    </div>
</template>

<script>
  export default {
    name: 'XSelect',

    props: {
        errors: null,
        label: String,
        rule: String,
        appendIcon: {
          type: String,
          default: () => 'arrow_drop_down'
        },
        appendOuterIcon: String,
        items: Array,
    },
    computed: {
        errorString() {
        if (typeof this.errors === 'string') return this.errors;
        if (!(this.errors && this.errors[this.$attrs.name])) return null;
        const error = this.errors[this.$attrs.name];
        return error.constructor === Array ? error[0] : error;
        },
    },
  }
</script>
