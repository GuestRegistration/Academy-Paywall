<template>
  <v-app>
    <v-app-bar
      absolute
      :color="account.theme_color"
      dark
      :src="account.cover_image"
      fade-img-on-scroll
      scroll-target="#scrolling-techniques-5"
      inverted-scroll
    >
      <template v-slot:img="{ props }">
        <v-img
          v-bind="props"
          :gradient="`to top right, ${account.theme_color}, rgba(255,255,255,.7)`"
        ></v-img>
      </template>
      <v-btn @click="$inertia.visit(route('home'))" icon>
        <v-icon>home</v-icon>
      </v-btn>
      
      <v-toolbar-title dark >
        <inertia-link :href="route('account.show', {account: account.username})" class="prevent-default" style="color: #fff">
          <avatar :src="account.avatar" :color="account.theme_color" size="30" /> {{ account.name }}
        </inertia-link>
      </v-toolbar-title>

      <v-spacer></v-spacer>
      <inertia-link v-if="authenticated && !isMyAccount" :href="auth.username ? route('account.show', {account: auth.username}) : '#'" class="prevent-default mx-1">
         <avatar :src="auth.avatar" :color="auth.theme_color" size="40" />
      </inertia-link>

      <v-menu v-if="isMyAccount(account)" origin="center center"  transition="scale-transition">
        <template v-slot:activator="{ on }">
          <v-btn icon v-on="on">
            <v-icon>mdi-dots-vertical</v-icon>
          </v-btn>
        </template>
        <v-list>

          <v-list-item @click="$inertia.visit(route('account.edit', {account: account.username}))">
            <v-list-item-icon>
              <v-icon>edit</v-icon>
            </v-list-item-icon>
            <v-list-item-content>
              <v-list-item-title>Edit account</v-list-item-title>
            </v-list-item-content>
          </v-list-item>

          <v-list-item @click="$inertia.visit(route('account.course.create', {account: account.username}))">
            <v-list-item-icon>
              <v-icon>add</v-icon>
            </v-list-item-icon>
            <v-list-item-content>
              <v-list-item-title>Add new course</v-list-item-title>
            </v-list-item-content>
          </v-list-item>

        </v-list>
      </v-menu>

    </v-app-bar>
    
    <div id="scrolling-techniques-5"  class="overflow-y-auto" style="max-height: 100vh;">
        <v-parallax height="200" :src="account.cover_image" :color="account.theme_color">
            <div class="p-3" style="background-color: rgba(0,0,0, .2)">
                <div v-if="!account.show_caption" class="d-flex align-center justify-content-center mb-2">
                    <div class="mr-2">
                        <avatar :src="account.avatar" :color="account.theme_color" size="100" />
                    </div>
                    <div>
                        <h4>{{ account.name }}</h4>
                        <div>
                            <small>{{account.at_username}}</small>
                        </div>
                    </div>
                </div>
                <div v-else class="text-center mb-2">
                    <h1>{{account.caption}}</h1>
                    <h4>{{account.subcaption}}</h4>
                </div>
                <template v-if="courses">
                  <courses-quick-enroll :account="account" :courses="courses" />
                </template>
            </div>
        </v-parallax>
        <v-container style="min-height: 100vh" fluid>
            <v-row>
                <v-col cols="12" md="8">
                     <slot />
                </v-col>
                <v-col cols="12" md="4">
                  <v-divider></v-divider>
                  <h4 >About {{account.name}}</h4>
                  <v-divider></v-divider>
                    
                    <template v-if="account.bio">
                      {{account.bio}}
                    </template>
                    <v-card outlined>
                      <v-card outlined dark :color="account.theme_color">
                        <v-row>
                          <v-col>
                            <div class="text-center">
                              <a :href="`tel: ${account.phone}`" class="prevent-default">
                                <v-btn icon large>
                                  <v-icon>call</v-icon>
                                </v-btn>
                              </a>
                            </div>
                          </v-col>
                          <v-col>
                            <div class="text-center">
                              <a :href="`mailto: ${account.email}`" class="prevent-default">
                                <v-btn large icon>
                                  <v-icon>email</v-icon>
                                </v-btn>
                              </a>
                            </div>
                          </v-col>
                        </v-row>
                      </v-card>

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
                    </v-card>
                     <template v-if="route().current('account.show') && isMyAccount">
                      <v-btn
                        :color="account.theme_color"
                        dark
                        large
                        fixed
                        bottom
                        right
                        fab
                        title="Create  course"
                        @click="$inertia.visit(route('account.course.create', {account: account.username}))"
                      >
                        <v-icon>mdi-plus</v-icon>
                      </v-btn>
                    </template>
                </v-col>
            </v-row>
        </v-container>
    </div>
    <!-- <v-footer app>
      <v-spacer></v-spacer>
      <small>Need help ? <a href="mailto: support@acadaapp.com">support@acadaapp.com</a></small>
    </v-footer> -->
  </v-app>
</template>

<script>
    import {mapGetters} from "vuex";
    import CoursesQuickEnroll from './Components/CoursesQuickEnroll';
    export default {
        name: 'AccountLayout',
        components: {
          CoursesQuickEnroll
        },
        data(){
          return {
            courses_dialog: false
          }
        },
        computed:{
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
              return this.socials.every(s => s.link && s.link !=  '' ?  true : false);
            },
        },

        mounted(){
            $('html').attr('no-scroll', 'no-scroll');
        },
        destroyed(){
            $('html').removeAttr('no-scroll');
        }
        
    }
</script>
