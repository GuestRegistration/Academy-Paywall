<template>
    <div>
        <v-text-field
            outlined
            v-bind="$attrs"
            v-on="$listeners"
            :label="label"
            :error="errorString ? true : false"
            :error-messages="errorString ? errorString : ''"
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
        rule: String,
        appendIcon: String,
        appendText: String,
        prependIcon: String,
        prependText: String,
    },
    computed: {
        hasAppend() {
        return this.appendIcon || this.appendText;
        },
        hasPrepend() {
        return this.prependIcon || this.prependText;
        },
        errorString() {
        if (typeof this.errors === 'string') return this.errors;
        if (!(this.errors && this.errors[this.$attrs.name])) return null;
        const error = this.errors[this.$attrs.name];
        return error.constructor === Array ? error[0] : error;
        },
    },
  }
</script>

<style lang="sass">
  //
</style>
