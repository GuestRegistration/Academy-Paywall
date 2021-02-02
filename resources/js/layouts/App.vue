<template>
      <!-- App.vue -->
  <v-app>
    <nav-drawer v-if="authenticated" />
   
    <v-app-bar app :color="authenticated && auth.account && route().current('account.*') ? auth.account.theme_color : 'secondary'" dark >
      <v-btn v-if="authenticated" @click="$store.state.navDrawer = !$store.state.navDrawer" icon>
        <v-icon>menu</v-icon>
      </v-btn>
       <a :href="route('home')" class="white--text" style="text-decoration: none">
          <v-toolbar-title dark>
                <v-img src="/images/acada-text-logo-white.png" width="120"></v-img>
          </v-toolbar-title>
        </a>
      <v-spacer></v-spacer>
        
      <a href="/#features" class="prevent-default mx-1 d-none d-sm-inline-block" title="Features">
        <v-btn text>FEATURES</v-btn>
      </a>

      <a href="/#pricing" class="prevent-default mx-1 d-none d-sm-inline-block" title="Features">
        <v-btn text>PRICING</v-btn>
      </a>

      <template v-if="authenticated">
         <a v-if="auth.account" :href="route('account.show', {account: auth.account.username})" class="prevent-default mx-1">
           <v-avatar :src="auth.account.avatar" :color="auth.account.theme_color" size="40">
             <v-img v-if="auth.account.avatar" :src="auth.account.avatar"></v-img>
             <h2 v-else class="white--text">{{ auth.account.name.substring(0,1) }}</h2>
           </v-avatar>
        </a>
        <inertia-link v-else-if="route().current() !== 'account.setup'" :href="route('account.setup')" class="prevent-default mx-1" title="Create your academy account">
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
        <v-snackbar bottom left :value="updateExists" :timeout="-1" color="primary">
            <div class="d-flex align-center">
                <div>
                    We have some update, would you love to install ?
                </div>
                <v-spacer></v-spacer>
                <v-btn text @click="refreshApp">
                    Yes install
                </v-btn>
            </div>
        </v-snackbar>
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
    import SWupdate from '../mixins/SWupdate';
    export default {
        name: 'LayoutApp',
        mixins: [SWupdate],
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


