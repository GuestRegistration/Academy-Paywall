<template>
    <v-avatar v-bind="$attrs" :size="$attrs.size">
        <img v-if="src" :src="src" :alt="$attrs.alt">
        <v-icon v-else dark :size="$attrs.size">mdi-account-circle</v-icon>
    </v-avatar>
</template>

<script>
    export default {
        name: "AccountAvatar",
        props: {
            src: String,
        }
    }
</script>