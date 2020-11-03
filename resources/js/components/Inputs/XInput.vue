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
            :append-icon="toggleVisibility ? (visible ? 'visibility_off' : 'visibility') : appendIcon"
            :append-inner-icon="appendInnerIcon"
            :rules="rules"
            :type="toggleVisibility ? (visible ? 'text' : 'password') : $attrs.type"
            @click:append="visible = !visible"
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
    data(){
        return {
            visible: false
        }
    },
    props: {
        errors: null,
        label: String,
        rules: Array,
        appendIcon: String,
        prependIcon: String,
        appendInnerIcon: String,
        prependInnerIcon: String,
        toggleVisibility: {
            type: Boolean,
            default: false
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
  }
</script>
