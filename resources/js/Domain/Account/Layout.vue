<template>
  <v-app>
    <nav-drawer />
    <v-app-bar
      app
      :color="account.theme_color"
      dark
      :src="account.cover_image"
      fade-img-on-scroll
      scroll-target="#scrolling-techniques-5"
      inverted-scroll
    >
      <v-btn @click="$store.state.navDrawer = !$store.state.navDrawer" icon>
        <v-icon>menu</v-icon>
      </v-btn>

      <template v-slot:img="{ props }">
        <v-img
          v-bind="props"
          :gradient="`to top right, ${account.theme_color}, rgba(255,255,255,.7)`"
        ></v-img>
      </template>
      
      <v-toolbar-title dark >
        <inertia-link :href="route('account.show', {account: account.username})" class="prevent-default" style="color: #fff">
          <avatar :src="account.avatar" :color="account.theme_color" size="30"  icon="school"/> {{ account.name }}
        </inertia-link>
      </v-toolbar-title>

      <v-spacer></v-spacer>
      <inertia-link v-if="authenticated && auth.account && !isMyAccount(account)" :href="auth.account.username ? route('account.show', {account: auth.account.username}) : '#'" class="prevent-default mx-1">
         <avatar :src="auth.account.avatar" :color="auth.account.theme_color" size="40" icon="school" />
      </inertia-link>

      <v-menu v-if="isMyAccount(account)" origin="center center"  transition="scale-transition">
        <template v-slot:activator="{ on }">
          <v-btn icon v-on="on">
            <v-icon>more_vert</v-icon>
          </v-btn>
        </template>
        <v-list>

          <v-list-item @click="$inertia.visit(route('account.edit', {account: account.username}))">
            <v-list-item-icon>
              <v-icon>edit</v-icon>
            </v-list-item-icon>
            <v-list-item-content>
              <v-list-item-title>Edit Organization</v-list-item-title>
            </v-list-item-content>
          </v-list-item>

          <v-list-item @click="$inertia.visit(route('account.course.create', {account: account.username}))">
            <v-list-item-icon>
              <v-icon>add</v-icon>
            </v-list-item-icon>
            <v-list-item-content>
              <v-list-item-title>Add Course</v-list-item-title>
            </v-list-item-content>
          </v-list-item>

        </v-list>
      </v-menu>

    </v-app-bar>
    
    <v-main>
      <div id="scrolling-techniques-5"  class="overflow-y-auto" style="max-height: 100vh;">
          <v-img :src="account.cover_image" aspect-ratio="8.1"></v-img>
          <div :style="`background-color: ${account.theme_color}; color: #fff`" id="account-banner">
            <div class="pa-3" style="background-color: rgba(0,0,0, .2)">
              <div v-if="!account.show_caption" class="d-flex align-center mb-2">
                <div class="mr-2">
                    <avatar :src="account.avatar" :color="account.theme_color" size="100" iconSize="50" icon="school" />
                </div>
                <div style="margin-top: 50px">
                    <h4>{{ account.name }}</h4>
                    <div>
                        <small>{{account.username}}</small>
                    </div>
                </div>
              </div>
              <div v-else class="text-center mb-2" style="margin-top: 50px">
                  <h1>{{account.caption}}</h1>
                  <h4>{{account.subcaption}}</h4>
              </div>
              <template v-if="courses">
                <courses-quick-enroll :account="account" :courses="courses" />
              </template>
            </div>
          </div>
          <v-container>
              <v-row>
                <v-col cols="12" md="8">
                    <slot />
                </v-col>
                <v-col cols="12" md="4">

                    <slot name="before-bio" />

                    <template v-if="account.bio && account.bio !== 'null'" >
                      <v-divider></v-divider>
                        <h4 class="py-3">About {{account.name}}</h4>
                        <v-divider></v-divider>
                        <div class="my-3">{{account.bio}}</div>
                        
                    </template>
                    <h4 class="py-3">Contact</h4>
                    <v-card outlined dark :color="account.theme_color">
                      <v-card-text>
                        <v-row>
                          <v-col class="text-truncate">
                            <div class="text-center">
                              <a :href="`tel: ${account.phone}`" class="prevent-default">
                                <v-btn icon large>
                                  <v-icon>call</v-icon>
                                </v-btn>
                              </a>
                              <!-- <div>{{ account.phone }}</div> -->
                            </div>
                          </v-col>
                          <v-col class="text-truncate">
                            <div class="text-center">
                              <a :href="`mailto: ${account.email}`" class="prevent-default">
                                <v-btn large icon>
                                  <v-icon>email</v-icon>
                                </v-btn>
                              </a>
                              <!-- <div>{{ account.email }}</div> -->
                            </div>
                          </v-col>
                        </v-row>
                      </v-card-text>
                    </v-card>

                    <slot name="after-contact" />

                    <v-list v-if="anySocial()">
                      <div class="mx-3"><h4>Socials</h4></div>
                      <v-divider></v-divider>
                      <v-list-item-group>
                        <template v-for="(social, i) in socials" >
                          <a v-if="social.link" :href="social.link" :key="i" target="_blank"  class="prevent-default">
                            <v-list-item>
                              <v-list-item-icon>
                                <v-icon v-text="social.icon"></v-icon>
                              </v-list-item-icon>
                              <v-list-item-content>
                                <v-list-item-title v-text="social.text"></v-list-item-title>
                              </v-list-item-content>
                            </v-list-item>
                          </a>
                        </template>
                      </v-list-item-group>
                    </v-list>
                </v-col>
              </v-row>
          </v-container>
      </div>
    </v-main>

    <!-- <v-footer app>
      <v-spacer></v-spacer>
      <small>Need help ? <a href="mailto: support@acadaapp.com">support@acadaapp.com</a></small>
    </v-footer> -->
  </v-app>
</template>

<script>
    import {mapGetters, mapState} from "vuex";
    import NavDrawer from '@/components/NavDrawer';
    import CoursesQuickEnroll from './Components/CoursesQuickEnroll';
    export default {
        name: 'AccountLayout',
        components: {
          NavDrawer, CoursesQuickEnroll
        },
        data(){
          return {
            courses_dialog: false
          }
        },
        computed:{
            ...mapState({
              inFrame: (state) => state.inFrame
            }),
            ...mapGetters([
                'auth', 'authenticated', 'isMyAccount', 'isOnMyAccount'
            ]),

            account(){
                return this.$page.account;
            },
            courses(){
                return this.$page.courses ? this.$page.courses.data : null;
            },
            socials(){
              return [
                {
                  icon: 'link',
                  text: 'Facebook',
                  link: this.account.facebook_url,
                },

                {
                  icon: 'link',
                  text: 'Instagram',
                  link: this.account.instagram_url,
                },

                {
                  icon: 'link',
                  text: 'Twitter',
                  link: this.account.twitter_url,
                },

                {
                  icon: 'link',
                  text: 'LinkedIn',
                  link: this.account.linkedin_url,
                },

                {
                  icon: 'link',
                  text: 'Website',
                  link: this.account.website,
                },

              ]
            },
        },
        methods: {
          anySocial(){
              return this.socials.filter(s => s.link ?  true : false).length
            },

           
        },

        mounted(){
          document.querySelector('html').setAttribute('no-scroll', 'no-scroll');
        },

        destroyed(){
          document.querySelector('html').removeAttribute('no-scroll');
        }
        
    }
</script>

<style lang="scss">
  #account-banner-image{
    max-height: 200px;
  }

  #account-banner{
    margin: 0 2%;
    border-radius: 5px;
    margin-top: -50px;
  }

</style>
