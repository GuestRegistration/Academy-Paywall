<template>
      <!-- App.vue -->
  <v-app>
    <v-navigation-drawer 
      app 
      v-model="drawer"
      > 
    </v-navigation-drawer>

    <v-app-bar 
      app
      color="primary"
      dark
    >
      <v-app-bar-nav-icon @click="drawer = !drawer"></v-app-bar-nav-icon>
      <inertia-link :href="route('home')" class="white--text" style="text-decoration: none">
        <v-toolbar-title dark>Academia</v-toolbar-title>
      </inertia-link>
      <v-spacer></v-spacer>
    </v-app-bar>
    
    <!-- Sizes your content based upon application components -->
    <v-content>
      <!-- Provides the application the proper gutter -->
      <v-container fluid>
        <slot />
      </v-container>
    </v-content>

    <v-footer app>
      <small><a :href="site">2020. Academia</a></small>
    </v-footer>
  </v-app>

</template>

<script>
    import {mapState} from "vuex";
    export default {
        name: 'LayoutApp',
        data(){
            return {
                drawer: false
            }
        },
        computed: {
           
        },
    }
</script>
