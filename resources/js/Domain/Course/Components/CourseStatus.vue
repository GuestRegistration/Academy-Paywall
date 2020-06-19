<template>
    <div>
        <v-chip v-if="!course.started"
            class="ma-2"
            color="orange"
            text-color="white"
        >
            <v-icon left>schedule</v-icon>
            Upcoming
        </v-chip>
        <v-chip v-else-if="course.ongoing"
            class="ma-2"
            color="success"
            text-color="white"
        >
            <v-icon left>schedule</v-icon>
            Ongoing
        </v-chip>
        <v-chip v-else
            class="ma-2"
            color="red"
            text-color="white"
        >
            <v-icon left>schedule</v-icon>
            Ended
        </v-chip>
    </div>
</template>

<script>
export default {
    name: "CourseStatus",
    props: {
        course: Object
    }
}
</script>