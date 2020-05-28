<template>
    <div>
        <h4>Recent courses</h4>
        <courses-widget />
    </div>
</template>

<script>
    import App from '@/layouts/App'
    import CoursesWidget from '@/Domain/Course/Components/CoursesWidget'

    export default {
        name: "HomePage",
        layout: (h, page) => h(App, [page]),
        components: {
            CoursesWidget
        }
    }
</script>
