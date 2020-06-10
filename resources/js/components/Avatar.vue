<template>
    <v-avatar v-bind="$attrs" :color="color">
        <img v-if="src" :src="src" :alt="$attrs.alt" :size="$attrs.size">
        <v-icon v-else dark :size="$attrs.size">mdi-account-circle</v-icon>
    </v-avatar>
</template>

<script>
    export default {
        name: "Avatar",
        props: {
            src: String,
            color: {
                type: String,
                default: () => 'primary',
            }
        }
    }
</script>