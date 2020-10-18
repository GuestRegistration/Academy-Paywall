<template>
    <v-avatar v-bind="$attrs" :color="color" v-on="$listeners">
        <img v-if="src" :src="src" :alt="$attrs.alt" :size="$attrs.size">
        <v-icon v-else-if="$attrs.icon" dark :size="$attrs.iconSize">{{$attrs.icon ? $attrs.icon : 'mdi-account-circle'}}</v-icon>
        <span v-else-if="$attrs.text" :class="`white--text ${$attrs.headline ? 'headline' : ''}`">{{$attrs.text}}</span>
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