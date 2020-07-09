<template>
  <v-card>
    <v-card-title>
      <slot name="header" />
      <v-spacer></v-spacer>
      <v-text-field
        v-model="search"
        append-icon="mdi-magnify"
        label="Search"
        single-line
        hide-details
      ></v-text-field>
    </v-card-title>
    <v-data-table
      :headers="headers"
      :items="items"
      :search="search"
      show-expand
      item-key="payment_ref"
      :single-expand="true"
      :expanded.sync="expanded"
      class="elevation-1"
    >
      <template v-slot:expanded-item="{ headers, item }">
        <td :colspan="headers.length">Registered {{ item.registered_time_diff }}</td>
      </template>
    </v-data-table>
  </v-card>
</template>

<script>

  export default {
    name: "StudentsTable",
    layout: (h, page) => h(App, [page]),
    metaInfo()
        {
            return{
            title: `Students (${this.students.length})`,
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
          { text: 'Amount Paid', value: 'amount_paid' },
          { text: 'Registered', value: 'register_time' },
        ],
        items: [],
        expanded: [],
      }
    },

    props: {
        account: Object,
        course: Object,
        students: {
          type: Array,
          default: () => []
        },
    },

    watch: {
      students: {
        immediate: true,
        handler(students){
          this.items = students.map((student) => {
                return {
                    fullname: student.fullname, 
                    email: student.email,
                    phone: student.phone,
                    course: student.course ? student.course.title : (this.course ? this.course.title : 'N/A'),
                    payment_gateway: student.payment_gateway ?? 'N/A' ,
                    payment_ref: student.payment_ref ?? 'N/A',
                    amount_paid: student.amount ? this.$options.filters.money(student.amount, student.currency) : 'Free',
                    register_time: student.registered_time,
                    registered_time_diff: student.registered_time_diff,
                }
            })
        }
      }
    }
  }
</script>