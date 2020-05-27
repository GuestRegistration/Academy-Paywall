<template>
      <!-- App.vue -->
  <v-app>
    <v-navigation-drawer 
      v-if="authenticated"
      app 
      v-model="drawer"
      > 
    <template v-slot:prepend>
          <v-list-item>
            <v-list-item-avatar>
              <v-avatar color="primary">
                <span class="white--text headline" v-if="auth.initials"> {{ auth.initials }} </span>
                <v-icon color="white" v-else>account_circle</v-icon>
              </v-avatar>
            </v-list-item-avatar>
            <v-list-item-content>
              <v-list-item-title v-html="auth.name"></v-list-item-title>
              <v-list-item-subtitle v-html="auth.email"></v-list-item-subtitle>
            </v-list-item-content>
          </v-list-item>
          <hr>
    </template>

    <v-list>
      <v-list-item-group color="primary">
        <inertia-link :href="route(item.route)"  class="prevent-default" v-for="(item, i) in items"
          :key="i">
          <v-list-item>
          <v-list-item-icon>
            <v-icon v-text="item.icon"></v-icon>
          </v-list-item-icon>
          <v-list-item-content>
            <v-list-item-title v-text="item.title"></v-list-item-title>
          </v-list-item-content>
        </v-list-item>
        </inertia-link>
        
      </v-list-item-group>
    </v-list>

    <template v-slot:append>
      <div class="pa-2">
          <v-btn block dark class="red" v-if="auth" @click="signout">Signout</v-btn>
      </div>
    </template>

    </v-navigation-drawer>

    <v-app-bar 
      app
      color="primary"
      dark
    >
      <v-app-bar-nav-icon v-if="authenticated" @click="drawer = !drawer"></v-app-bar-nav-icon>
      <inertia-link :href="route('home')" class="white--text" style="text-decoration: none">
        <v-toolbar-title dark>Academia</v-toolbar-title>
      </inertia-link>
      <v-spacer></v-spacer>
      <inertia-link :href="route('signin')">
        <v-btn dark color="primary" v-if="!authenticated">Sign in</v-btn>
      </inertia-link>
    </v-app-bar>
    
    <!-- Sizes your content based upon application components -->
    <v-content>
      <!-- Provides the application the proper gutter -->
      <v-container fluid>
        <slot />
      </v-container>
    </v-content>

    <v-footer app>
      <v-spacer></v-spacer>
      <small>Need help ? <a href="#">support@academypaywall.com</a></small>
    </v-footer>
  </v-app>

</template>

<script>
    import {mapState, mapGetters} from "vuex";
    export default {
        name: 'LayoutApp',
        data(){
            return {
                drawer: false,
                 items: [{
                          route: 'home',
                          title: 'Home',
                          icon: 'home',
                        },
                        {
                          route: 'account.show',
                          title: 'Account',
                          icon: 'account_circle',
                        },
                        {
                          route: 'home',
                          title: 'Courses',
                          icon: 'library_books',
                        },
                        {
                          route: 'home',
                          title: 'Payment',
                          icon: 'local_atm',
                        },
                        
                        ],
            }
        },
        computed: {
            ...mapState({
              auth: state => state.auth,
              authenticated: state => state.authenticated,
            }),
        },

        methods:{
         async signout(){
           await this.$inertia.post(route('signout'));
          }
        },

        mounted(){
          console.log(this.$page.auth)
      }
    }
</script>
