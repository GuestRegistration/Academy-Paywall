<template>
    <v-btn v-bind="$attrs" :loading="loading">
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

<style lang="sass">
  //
</style>
