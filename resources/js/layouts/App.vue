<template>
      <!-- App.vue -->
  <v-app>
    <v-navigation-drawer 
      app 
      v-model="drawer"
      >

    <template v-if="authenticated && auth.profile_complete" v-slot:prepend>
          <v-list-item>
            <v-list-item-avatar>
              <avatar :src="auth.avatar" :color="auth.theme_color" />
            </v-list-item-avatar>
            <v-list-item-content>
              <v-list-item-title v-html="auth.name"></v-list-item-title>
              <v-list-item-subtitle v-html="auth.at_username"></v-list-item-subtitle>
            </v-list-item-content>
          </v-list-item>
          <hr>
    </template>

    <v-list>
      <v-list-item-group >
        <inertia-link :href="item.route"  class="prevent-default" v-for="(item, i) in navItems()"
          :key="i">
          <v-list-item :color="authenticated ? auth.theme_color : 'primary'">
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
          <v-btn block dark class="red" v-if="authenticated" @click="signout">Signout</v-btn>
          <inertia-link  v-else :href="route('signin')">
            <v-btn block color="primary">Sign in</v-btn>
          </inertia-link>
      </div>
    </template>

    </v-navigation-drawer>

    <v-app-bar 
      app
      :color="authenticated ? auth.theme_color : 'primary'"
      dark
    >
      <v-app-bar-nav-icon @click="drawer = !drawer"></v-app-bar-nav-icon>
       <inertia-link :href="route('home')" class="white--text" style="text-decoration: none">
        <v-toolbar-title dark>AcadaApp</v-toolbar-title>
      </inertia-link>
      <v-spacer></v-spacer>

      <inertia-link v-if="authenticated" :href="route('account.show', {account: auth.username})" class="prevent-default mx-1">
         <avatar :src="auth.avatar" :color="auth.theme_color" size="40" />
      </inertia-link>
      <inertia-link  v-else :href="route('signin')">
        <v-btn dark color="primary">Sign in</v-btn>
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
      <small>Need help ? <a href="mailto: support@acadaapp.com">support@acadaapp.com</a></small>
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
                search_active: false,
            }
        },
        computed: {
            ...mapState({
              auth: state => state.auth,
              authenticated: state => state.authenticated,
            }),
        },

        methods:{
          navItems(){
            if(this.authenticated  && this.auth.profile_complete){
              return [{
                          route: this.route('home'),
                          title: 'Home',
                          icon: 'home',
                        },
                        {
                          route: this.route('account.show', {account: this.auth.username}),
                          title: 'Account',
                          icon: 'account_circle',
                        },
                        {
                          route: this.route('account.course.create', {account: this.auth.username}),
                          title: 'New course',
                          icon: 'add_circle',
                        },
                        {
                          route: this.route('home'),
                          title: 'Payment',
                          icon: 'local_atm',
                        },
                      ]
            }else{
              return [{
                          route: this.route('home'),
                          title: 'Home',
                          icon: 'home',
                        },
                        {
                          route: this.route('course.list'),
                          title: 'Courses',
                          icon: 'library_books',
                        },
                      ];
            }
          },

        async signout(){
           await this.$inertia.post(route('signout'));
          }
        },

        mounted(){
          console.log(this.$page.auth)
      }
    }
</script>
