<template>
    <div>
        <v-text-field
            outlined
            v-bind="$attrs"
            v-on="$listeners"
            :label="label"
            :error="errorString ? true : false"
            :error-messages="errorString ? errorString : ''"
            :prepend-icon="prependIcon"
            :prepend-inner-icon="prependInnerIcon"
            :append-icon="appendIcon"
            :append-inner-icon="appendInnerIcon"
            :rules="rules"
        >
            <slot
            slot="append-outer"
            name="append-outer"
            />
        </v-text-field>
    </div>

</template>

<script>
  export default {
    name: 'XInput',
    props: {
        errors: null,
        label: String,
        rules: Array,
        appendIcon: String,
        prependIcon: String,
        appendInnerIcon: String,
        prependInnerIcon: String,
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
