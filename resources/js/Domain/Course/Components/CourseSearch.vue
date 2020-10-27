<template>
  <v-card
    :color="`${account.id ? account.theme_color : 'primary'}`"
  >
    <v-card-text>
      <v-autocomplete
        v-model="model"
        :items="items"
        :loading="isLoading"
        :search-input.sync="search"
        color="white"
        hide-no-data
        hide-selected
        item-text="title"
        item-value="title"
        label="Search for course"
        placeholder="Start typing to Search"
        prepend-icon="search"
        :append-icon="`${model ? 'close' : ''}`"
        @click:append="model = null"
        return-object
        dark
      ></v-autocomplete>
    </v-card-text>
    <v-divider></v-divider>
    <v-expand-transition light v-if="model">
      <div class="expanded-course-search">
        <course-card :course="model" :showStatus="true" :showInstructor="false" display="grid" />
      </div>
    </v-expand-transition>
    
  </v-card>
</template>
<script>

    import CourseCard from './CourseCard.vue';
  export default {
    components: {
        CourseCard
    },
    
    data: () => ({
      descriptionLimit: 60,
      entries: [],
      isLoading: false,
      model: null,
      search: null,
    }),

    props: {
        account: {
        type: Object,
        default: () => ({})
        }
    },

    computed: {
      fields () {
        
      },
      items () {
        return this.entries.map(course => course);
      },
    },

    watch: {
      search (val) {
        // Items have already been loaded
        if (this.entries.length > 0) return

        // Items have already been requested
        if (this.isLoading) return

        this.isLoading = true

        // Lazily load input items
        axios.get(this.route('course.search', {account: this.account.username, search: val}))
            .then(res => {
            const { data } = res
            this.entries = data
          })
          .catch(err => {
            console.log(err)
          })
          .finally(() => (this.isLoading = false))
      },
    },
  }
</script>

<style lang="scss">
  .expanded-course-search{
    position: absolute;
    z-index: 1;
    width: 100%;
  }
</style>