<template>
  <v-card class="mx-auto">
        <v-card-text>
           <div class="text-center">
                <avatar :src="profile.avatar" :color="`${account ? account.theme_color : 'primary'}`" size="100" :text="profile.initials" headline="yes" />
                <h2>{{profile.fullname}}</h2>
            </div>
        </v-card-text>    
  </v-card>
</template>

<script>
  import {mapState} from 'vuex'
  export default {
      name: "CourseCard",
      props: {
          profile: Object,
          account: Object,
      },
      computed: {
        ...mapState({
          authenticated: state => state.authenticated,
          auth: state => state.auth,
          inFrame: state => state.inFrame,
        }),
      },
     
  }
</script>