<template>
    <div>
      <h4>Instructors ({{ data.length }})</h4>
      <div class="text-center text-muted my-5" v-if="!data.length">
                No instructor
      </div>
      <v-row v-else>
          <v-col cols="12" md="6" lg="4"  v-for="user in data" :key="user.id">
              <profile-card :account="account" :profile="user" />
          </v-col>
      </v-row>    
     
    </div>
</template>

<script>
 import {mapGetters} from "vuex";
 import App from '@/layouts/App';
 import ProfileCard from '@/Domain/User/Components/ProfileCard';

  export default {
    name: "AccountInstructorList",
    layout: (h, page) => h(App, [page]),
    components: {
        ProfileCard
    },

    metaInfo()
        {
            return{
            title: `Instructors (${this.instructors.length})`,
            titleTemplate: '%s - AcadaApp',
            }
    },

    data(){
      return {
        data: []
      }
    },

    props: {
        account: Object,
        instructors: Array,
    },

    computed: {
      ...mapGetters([
          'auth', 'authenticated', 'isMyAccount', 'isOnMyAccount'
      ]),
    },

    watch: {
      instructors: {
        immediate: true,
        handler(instructors){
          this.data = instructors;
        }
      }
    }
  }
</script>