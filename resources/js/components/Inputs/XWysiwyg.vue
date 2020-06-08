<template>
    <div>
        <label>{{label}}</label>
        <wysiwyg v-model="content" />
        <div v-if="errorString" class="text-danger text-center">
            {{ errorString }}
        </div>
    </div>
</template>

<script>
export default {
    name: 'XWysiwyg',
    props: {
        label: String,
        content: String,
        errors: null,
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