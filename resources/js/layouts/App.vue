<template>
      <!-- App.vue -->
  <v-app>
    <nav-drawer />
   
    <v-app-bar app :color="authenticated && auth.account && route().current('account.*') ? auth.account.theme_color : 'secondary'" dark >
      <v-btn @click="$store.state.navDrawer = !$store.state.navDrawer" icon>
        <v-icon>menu</v-icon>
      </v-btn>
       <inertia-link :href="route('home')" class="white--text" style="text-decoration: none">
          <v-toolbar-title dark>
                <v-img src="/images/acada-text-logo-white.png" width="120"></v-img>
          </v-toolbar-title>
        </inertia-link>
      <v-spacer></v-spacer>
        
      <template v-if="authenticated">
         <inertia-link v-if="auth.account" :href="route('account.show', {account: auth.account.username})" class="prevent-default mx-1">
           <avatar :src="auth.account.avatar" :color="auth.account ? auth.account.theme_color : 'primary'" size="40" />
        </inertia-link>
        <inertia-link v-else :href="route('account.setup')" class="prevent-default mx-1" title="Create your academy account">
          <v-btn icon><v-icon>add</v-icon></v-btn>
        </inertia-link>
      </template>

      <template  v-else-if="!route().current('signin')">
         <inertia-link  :href="route('signin')">
          <v-btn dark color="primary">Sign in</v-btn>
        </inertia-link>
      </template>     
    </v-app-bar>
    
    <!-- Sizes your content based upon application components -->
    <v-main>
      <slot name="before-container" />

      <!-- Provides the application the proper gutter -->
      <v-container fluid>
        <slot />
      </v-container>

      <slot name="after-container" />

    </v-main>

    <v-footer app>
      <v-spacer></v-spacer>
      <small>Need help ? <a href="mailto: support@acada.app">support@acada.app</a></small>
    </v-footer>
  </v-app>
  
</template>

<script>
    import {mapState, mapGetters, mapMutations} from "vuex";
    import navDrawer from '../components/NavDrawer';

    export default {
        name: 'LayoutApp',
        components: {
          navDrawer
        },
        computed: {
            ...mapState([
              'auth', 'authenticated',
            ])
        },
    }
</script>


