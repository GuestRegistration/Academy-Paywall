<template>
    <v-btn v-bind="$attrs" v-on="$listeners" :loading="loading">
        <slot/>
    </v-btn>
</template>

<script>
  export default {
    name: 'XInput',
    props: {
        loading: Boolean
    },
    
  }
</script>
