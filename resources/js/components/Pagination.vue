<template>
     <v-pagination
      v-model="page"
      :circle="circle"
      :disabled="disabled"
      :length="length"
      :next-icon="nextIcon"
      :prev-icon="prevIcon"
      :page="page"
      :total-visible="totalVisible"
      :color="color"
      @input="paginate"
    ></v-pagination>
</template>

<script>
    export default {
        name: "Pagination",
        props: {
            resource: Object,
            color: String
        },
        data () {
            return {
                circle: false,
                disabled: false,
                nextIcon: 'navigate_next',
                nextIcons: ['mdi-chevron-right', 'mdi-arrow-right', 'mdi-menu-right'],
                prevIcon: 'navigate_before',
                prevIcons: ['mdi-chevron-left', 'mdi-arrow-left', 'mdi-menu-left'],
                page: this.resource.current_page,
                length: Math.ceil(this.resource.total/this.resource.per_page),
                totalVisible: 5
            }
        },

        methods: {
            paginate(page){
                this.$inertia.visit(`${this.getUrl(page)}`);
            },

            getUrl(page) {
                let queryString = '';
                const urlParams = new URLSearchParams(window.location.search);
                for (const key of urlParams.keys()) {
                    queryString += key != 'page' ? `${key}=${urlParams.get(key)}&` : '';
                }
                return `${this.resource.path}?${queryString}page=${page}`
            }
        },

        
    }
</script>