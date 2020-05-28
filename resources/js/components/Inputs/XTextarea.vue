<template>
    <div>
        <v-textarea
          outlined
          v-bind="$attrs"
          v-on="$listeners"
          :clearable="true"
          :label="label"
          :error="errorString ? true : false"
          :error-messages="errorString ? errorString : ''"
        ></v-textarea>
    </div>
</template>

<script>
  export default {
    name: 'XTexarea',
    props: {
        errors: null,
        label: String,
        rule: String,
        appendIcon: String,
        prependIcon: String,
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
