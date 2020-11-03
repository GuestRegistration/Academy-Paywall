<template>
    <div>
        <input type="hidden" name="_token" v-model="token">
    </div>
</template>

<script>
  export default {
    name: 'Csrf',
    computed: {
        token(){
            return document.head.querySelector('meta[name="csrf-token"]').content
        }
    }
  }
</script>
