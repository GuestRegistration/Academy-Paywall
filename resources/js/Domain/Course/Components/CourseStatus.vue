<template>
    <div class="ma-2">
        <v-chip v-if="!course.started"
            color="orange"
            text-color="white"
        >
            <v-icon left>schedule</v-icon>
            Upcoming
        </v-chip>
        <v-chip v-else-if="course.ongoing"
            color="success"
            text-color="white"
        >
            <v-icon left>schedule</v-icon>
            Ongoing
        </v-chip>
        <v-chip v-else
            color="red"
            text-color="white"
        >
            <v-icon left>schedule</v-icon>
            Ended
        </v-chip>
        <div class="text-muted">
            <small>{{ course.status_time }}</small> 
        </div>
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