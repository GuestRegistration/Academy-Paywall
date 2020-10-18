<template>
    <v-select
          v-model="select"
          :items="items"
          item-text="text"
          item-value="value"
          label="Filter courses"
          persistent-hint
          return-object
          single-line
          append-icon="arrow_drop_down"
          @input="filterChanged"
        ></v-select>
</template>

<script>
    export default {
        name: "CourseFilter",
        data(){
            return {
                select: {hint: "select course category"},
                items: [
                   {text: 'Upcoming courses', value: 'upcoming', hint: "courses that are yet to commence"},
                   {text: 'Past courses', value: 'past',  hint: "courses held in the past"},
                   {text: 'Ongoing courses', value: 'ongoing',  hint: "courses that are still on"},
                ]
            }
        },

        props: {
            filter: String
        },

        methods: {
            filterChanged(select){
                this.$emit('filter', select);
            }
        },

        watch: {
            filter: {
                immediate: true,
                handler(filter){
                    this.select = this.items.find(item => item.value == filter);
                }
            }
        }

    }
</script>