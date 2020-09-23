<template>
  <v-card class="mx-auto" outlined>
        <v-card-text>
           <div class="text-center">
                <avatar :src="instructor.profile.avatar" :color="`${account ? account.theme_color : 'primary'}`" size="70" :text="instructor.profile.initials" headline="yes" />
                <h4>{{instructor.profile.fullname}}</h4>
                <v-row justify="center">
                  <v-col cols="10" class="text-center">
                    <inertia-link :href="route('profile.show', {profile: instructor.profile.username})" class="prevent-default">
                      <v-btn dark :color="account.theme_color">
                      {{instructor.profile.at_username}}<v-icon>arrow_forward</v-icon>
                      </v-btn>
                    </inertia-link>
                  </v-col>
                  <v-col cols="2">
                    <slot name="options" />
                  </v-col>
                </v-row>
            </div>
                  
        </v-card-text>    
  </v-card>
</template>

<script>
  import {mapState, mapGetters} from 'vuex'
  export default {
      name: "ProfileCard",
      props: {
          instructor: Object,
          account: Object,
      },
      computed: {
        ...mapState({
          inFrame: state => state.inFrame,
        }),
        ...mapGetters([
            'auth', 'authenticated', 'isMyAccount', 'isOnMyAccount'
        ])
      },
     
  }
</script>