<template>
    <students-table :account="account" :students="students">
        <template v-slot:header>
          <h4 v-if="course">"{{ course.title }}" students ({{students.length}})</h4>
          <h4 v-else>All students ({{students.length}})</h4>
        </template>
    </students-table>
</template>

<script>
 import App from '@/layouts/App';
 import StudentsTable from './../Components/StudentsTable';

  export default {
    name: "StudentList",
    layout: (h, page) => h(App, [page]),
    components: {
        StudentsTable
    },

    metaInfo()
        {
            return{
            title: `Students (${this.students.length}) ${this.course ? this.course.title : ''}`,
            titleTemplate: '%s - AcadaApp',
            }
    },

    data () {
      return {
        search: '',
        headers: [
          {
            text: 'Student',
            align: 'start',
            sortable: false,
            value: 'fullname',
          },
          { text: 'Email', value: 'email' },
          { text: 'phone', value: 'phone' },
          { text: 'Course', value: 'course' },
          { text: 'Payment Gateway', value: 'payment_gateway' },
          { text: 'Payment Ref', value: 'payment_ref' },
        ],
      }
    },

    props: {
        account: Object,
        students: Array,
        course: Object,
    },

  }
</script>