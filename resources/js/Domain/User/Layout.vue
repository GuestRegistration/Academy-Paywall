<template>
  <v-app>
    <nav-drawer v-if="authenticated" />
    <v-app-bar
      absolute
      color="primary"
      dark
      fade-img-on-scroll
      scroll-target="#scrolling-techniques-5"
      inverted-scroll
      class="d-md-none"
    >
    <v-app-bar-nav-icon v-if="authenticated" @click="$store.state.navDrawer = !$store.state.navDrawer"></v-app-bar-nav-icon>
      <v-btn v-else @click="$inertia.visit(route('home'))" icon>
      <v-icon>home</v-icon>
    </v-btn>
      
      <v-toolbar-title dark >
        <inertia-link :href="route('profile.show', {profile: profile.username})" class="prevent-default" style="color: #fff">
          <avatar :src="profile.avatar" color="primary" size="30"  /> {{ profile.fullname }}
        </inertia-link>
      </v-toolbar-title>
      <v-spacer></v-spacer>
      <v-menu v-if="isMyProfile(profile)" origin="center center"  transition="scale-transition">
        <template v-slot:activator="{ on }">
          <v-btn icon v-on="on">
            <v-icon>mdi-dots-vertical</v-icon>
          </v-btn>
        </template>
        <v-list>

          <v-list-item @click="$inertia.visit(route('profile.edit', {profile: profile.username}))">
            <v-list-item-icon>
              <v-icon>edit</v-icon>
            </v-list-item-icon>
            <v-list-item-content>
              <v-list-item-title>Edit profile</v-list-item-title>
            </v-list-item-content>
          </v-list-item>
        </v-list>
      </v-menu>
    </v-app-bar>
    
    <div id="scrolling-techniques-5"  class="overflow-y-auto" style="max-height: 100vh;">
        <v-container style="min-height: 110vh" fluid>
            <v-row>
                <v-col cols="12" md="4" id="lhs">
                  <v-app-bar
                    absolute
                    color="primary"
                    dark
                    class="d-none d-md-block"
                  >
                    <v-toolbar-title dark >
                      <v-app-bar-nav-icon v-if="authenticated" @click="$store.state.navDrawer = !$store.state.navDrawer"></v-app-bar-nav-icon>
                      <v-btn v-else @click="$inertia.visit(route('home'))" icon>
                        <v-icon>home</v-icon>
                      </v-btn>
                    </v-toolbar-title>
                    <v-spacer></v-spacer>
                     <v-btn icon v-if="$store.state.navDrawer" @click="$store.state.navDrawer = false" ref="navBarCloser">
                      <v-icon>keyboard_backspace</v-icon>
                    </v-btn>
                    <v-menu v-if="isMyProfile(profile)" origin="center center"  transition="scale-transition">
                      <template v-slot:activator="{ on }">
                        <v-btn icon v-on="on">
                          <v-icon>mdi-dots-vertical</v-icon>
                        </v-btn>
                      </template>
                      <v-list>

                        <v-list-item @click="$inertia.visit(route('profile.edit', {profile: profile.username}))">
                          <v-list-item-icon>
                            <v-icon>edit</v-icon>
                          </v-list-item-icon>
                          <v-list-item-content>
                            <v-list-item-title>Edit profile</v-list-item-title>
                          </v-list-item-content>
                        </v-list-item>
                      </v-list>
                    </v-menu>
                  </v-app-bar>
                  <v-container fluid class="lhs-body">
                    <div class="text-center">
                      <avatar :src="profile.avatar" color="primary" size="100" :text="profile.initials" headline="yes" />
                      <h2>{{profile.fullname}}</h2>
                    </div>
                    <div  v-if="profile.bio" class="text-center p-3">
                      {{profile.bio}}
                    </div>
                    <v-card outlined dark color="primary">
                      <v-row>
                        <v-col>
                          <div class="text-center">
                            <a :href="`tel: ${profile.phone}`" class="prevent-default">
                              <v-btn icon large>
                                <v-icon>call</v-icon>
                              </v-btn>
                            </a>
                          </div>
                        </v-col>
                        <v-col>
                          <div class="text-center">
                            <a :href="`mailto: ${profile.email}`" class="prevent-default">
                              <v-btn large icon>
                                <v-icon>email</v-icon>
                              </v-btn>
                            </a>
                          </div>
                        </v-col>
                      </v-row>
                    </v-card>
                    <v-divider></v-divider>
                    <h4>Affiliations</h4>
                    <v-list v-if="affiliations.length">
                      <v-list-item
                        v-for="affiliation in affiliations" :key="affiliation.id"
                        @click="$inertia.visit(route('account.show', {account: affiliation.username}))"
                      >
                        <v-list-item-avatar>
                          <avatar :src="affiliation.avatar" :color="affiliation.theme_color" size="50" icon="school" />
                        </v-list-item-avatar>

                        <v-list-item-content>
                          <v-list-item-title v-text="affiliation.name"></v-list-item-title>
                        </v-list-item-content>

                        <!-- <v-list-item-icon>
                          <v-icon :color="item.active ? 'deep-purple accent-4' : 'grey'">chat_bubble</v-icon>
                        </v-list-item-icon> -->
                      </v-list-item>
                    </v-list>
                    <div v-else>
                    <v-alert
                        border="right"
                        colored-border
                        type="error"
                        elevation="2"
                      >
                      Not affiliated to any academy account
                      </v-alert>
                    </div>

                    <div class="text-right">
                      <inertia-link v-if="isMyProfile(profile) && !auth.account" :href="route('account.setup')" class="prevent-default mx-1" title="Create your academy account">
                        <v-btn fab><v-icon>add</v-icon></v-btn>
                      </inertia-link>
                    </div>
                  </v-container>
                </v-col>
                <v-col cols="12" md="8" id="rhs">
                    <slot />
                </v-col>
            </v-row>
        </v-container>
    </div>
  </v-app>
</template>

<script>
    import {mapGetters, mapState, mapMutations} from "vuex";
    import NavDrawer from '@/components/NavDrawer';
    export default {
        name: 'ProfileLayout',
        components: {
          NavDrawer
        },
        computed:{
            ...mapState({
              inFrame: (state) => state.inFrame
            }),
            ...mapGetters([
                'auth', 'authenticated', 'isMyAccount', 'isMyProfile', 'isOnMyAccount'
            ]),

            profile(){
                return this.$page.profile;
            },

            affiliations(){
              return this.$page.affiliations
            },

        },
        methods: {
          ...mapMutations(['setNavDrawer']),
        },
        created(){
          this.setNavDrawer(false);
        },
        mounted(){
            $('html').attr('no-scroll', 'no-scroll');
        },
        destroyed(){
            $('html').removeAttr('no-scroll');
        }
        
    }
</script>

<style lang="scss">
 
  @media (min-width: 768px)
    {
       #lhs{
      background-color: #f7f7f7;
      height: 100vh;
      position: fixed;
      left: 0;
      top: 0;
      overflow: auto;
  }
  #rhs{
    left: 33.3333333333%
  }
  .lhs-body{
    margin-top: 60px;
  }
}
</style>
