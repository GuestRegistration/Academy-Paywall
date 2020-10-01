<template>
    <v-card class="mx-auto" outlined>
      <v-card-text>
        <div class="text-center">
          <avatar :src="instructor.profile.avatar" :color="`${account ? account.theme_color : 'primary'}`" size="70" :text="instructor.profile.initials" headline="yes" />
          <v-row justify="center">
            <v-col :cols="`${hasOptions ? 9 : 12}`" class="text-center text-truncate">
              <h4><a :href="route('profile.show', {profile: instructor.profile.username})" class="prevent-default">{{instructor.profile.fullname}}</a></h4>
            </v-col>
            <v-col v-if="hasOptions" cols="3">
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
          hasOptions: {
            type: Boolean,
            default: () => false
          }
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