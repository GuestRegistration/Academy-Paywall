<template>
  <v-card class="mx-auto">
        <v-card-text>
           <div class="text-center">
                <avatar :src="instructor.profile.avatar" :color="`${account ? account.theme_color : 'primary'}`" size="100" :text="instructor.profile.initials" headline="yes" />
                <h4>{{instructor.profile.fullname}}</h4>
                <v-row justify="center">
                  <v-col cols="10">
                    <inertia-link :href="route('profile.show', {profile: instructor.profile.username})" class="prevent-default">
                      <v-btn dark :color="account.theme_color">
                      {{instructor.profile.at_username}}<v-icon>arrow_forward</v-icon>
                      </v-btn>
                    </inertia-link>
                  </v-col>
                  <v-col cols="2" v-if="isMyAccount(account)">
                    <v-menu origin="center center"  transition="scale-transition">
                      <template v-slot:activator="{ on }">
                          <v-btn icon v-on="on">
                              <v-icon>mdi-dots-vertical</v-icon>
                          </v-btn>
                      </template>
                      <v-list>

                          <v-list-item @click="() => {}">
                              <v-list-item-icon>
                              <v-icon>delete</v-icon>
                              </v-list-item-icon>
                              <v-list-item-content>
                              <v-list-item-title>Remove</v-list-item-title>
                              </v-list-item-content>
                          </v-list-item>

                      </v-list>
                    </v-menu>
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