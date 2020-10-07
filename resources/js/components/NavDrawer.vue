<template>
    <v-navigation-drawer 
      app 
      v-model="$store.state.navDrawer"
      >
      <template v-slot:prepend>
        <v-list-item v-if="authenticated && auth.profile.profile_complete" >
          <v-list-item-avatar>
            <avatar :src="auth.profile.avatar" color="primary" size="70" :text="auth.profile.initials" />
          </v-list-item-avatar>
          <v-list-item-content>
            <v-list-item-title v-html="auth.profile.fullname"></v-list-item-title>
            <v-list-item-subtitle v-html="auth.profile.at_username"></v-list-item-subtitle>
          </v-list-item-content>
        </v-list-item>

        <v-list dense>

          <template v-for="(item, i) in prependNavItems()">
            <component :is="`${item.inertia ? 'inertia-link' : 'a'}`" v-if="item.render" :href="`${route(item.route, item.param)}${item.anchor ? '#'+item.anchor : ''}`"  class="prevent-default" :key="i">
              <v-list-item :color="authenticated && auth.account ? auth.account.theme_color : 'primary'" >
                <v-list-item-icon>
                  <v-icon v-text="item.icon"></v-icon>
                </v-list-item-icon>
                <v-list-item-content>
                  <v-list-item-title v-text="item.title"></v-list-item-title>
                </v-list-item-content>
              </v-list-item>
            </component>
            <v-list-item v-else disabled :key="i">
              <v-list-item-icon>
                <v-icon v-text="item.icon"></v-icon>
              </v-list-item-icon>
              <v-list-item-content>
                <v-list-item-title v-text="item.title"></v-list-item-title>
              </v-list-item-content>
            </v-list-item>
          </template>

        </v-list>
        <v-divider></v-divider>
      </template>

      <v-list dense>
        <v-list-item-group v-model="active" >
          <template v-for="(item, i) in navItems()">
            <component :is="`${item.inertia ? 'inertia-link' : 'a'}`" v-if="item.render" :href="`${route(item.route, item.param)}${item.anchor ? '#'+item.anchor : ''}`"  class="prevent-default" :key="i">
              <v-list-item :color="authenticated && auth.account ? auth.account.theme_color : 'primary'" >
              <v-list-item-icon>
                <v-icon v-text="item.icon"></v-icon>
              </v-list-item-icon>
              <v-list-item-content>
                <v-list-item-title v-text="item.title"></v-list-item-title>
              </v-list-item-content>
            </v-list-item>
          </component>
          <v-list-item v-else disabled :key="i">
              <v-list-item-icon>
                <v-icon v-text="item.icon"></v-icon>
              </v-list-item-icon>
              <v-list-item-content>
                <v-list-item-title v-text="item.title"></v-list-item-title>
              </v-list-item-content>
            </v-list-item>
          </template>
        </v-list-item-group>
      </v-list>

      <template v-slot:append>
        <div class="pa-2">
            <v-btn v-if="authenticated" block dark class="red"  @click="signout">Signout</v-btn>
            <v-btn v-else block dark class="primary"  @click="$inertia.visit(route('signin'))">Signin</v-btn>
        </div>
      </template>
    </v-navigation-drawer>
    
</template>

<script>
    import {mapState} from "vuex";

    export default {
        name: "NavDrawer",
        data(){
            return {
                active: 0,
            }
        },
        computed: {
             ...mapState([
              'auth', 'authenticated', 'navDrawer'
            ]),
        },
        methods:{
          prependNavItems(){
            let nav = [
              {
                route: 'home',
                title: 'Home',
                icon: 'home',
                render: true,
                inertia: false
              }
            ];
            if(this.authenticated){
              nav = nav.concat([
                      {
                        route: this.auth.profile.username ? 'profile.show' : 'profile.edit.alt',
                        param: {
                          profile: this.auth.profile.username ?? this.auth.profile.id
                        },
                        title: 'My Account',
                        icon: 'account_circle',
                        render: true,
                        inertia: false
                      },
                      {
                        route: this.auth.profile.username ? 'profile.edit' : 'profile.edit.alt',
                        param: {
                          profile: this.auth.profile.username ?? this.auth.profile.id
                        },
                        title: 'Edit Account',
                        icon: 'edit',
                        render: true,
                        inertia: false
                      },
                    ]);
            }

            return nav;
          },
          navItems(){
            if(this.authenticated){
              return [
                        {
                          route: 'account.show',
                          param: {
                            account: this.auth.account ? this.auth.account.username : '#'
                          },
                          title: 'My Organization',
                          icon: 'school',
                          render: this.auth.account ? true : false,
                          inertia: false
                        },
                        {
                          route: 'account.edit',
                          param: {
                            account: this.auth.account ? this.auth.account.username : '#'
                          },
                          title: 'Edit Organization',
                          icon: 'edit',
                          render: this.auth.account ? true : false,
                          inertia: true
                        },
                        {
                          route: 'account.instructor.list',
                          param: {
                            account: this.auth.account ? this.auth.account.username : '#'
                          },
                          title: 'Instructors',
                          icon: 'recent_actors',
                          render: this.auth.account ? true : false,
                          inertia: true
                        },
                        {
                          route: 'account.course.list',
                          param: {
                            account: this.auth.account ? this.auth.account.username : '#'
                          },
                          title: 'Courses',
                          icon: 'library_books',
                          render: this.auth.account ? true : false,
                          inertia: true
                        },
                         {
                          route: 'account.course.create',
                          param: {
                            account: this.auth.account ? this.auth.account.username : '#'
                          },
                          title: 'Add Course',
                          icon: 'add_circle',
                          render: this.auth.account ? true : false,
                          inertia: true
                        },
                        {
                          route: 'account.student.list',
                          param: {
                            account: this.auth.account ? this.auth.account.username : '#'
                          },
                          title: 'Students',
                          icon: 'people',
                          render: this.auth.account ? true : false,
                          inertia: true
                        },
                        {
                          route: 'account.payment.gateway',
                          param: {
                            account: this.auth.account ? this.auth.account.username : '#'
                          },
                          title: 'Payment Settings',
                          icon: 'local_atm',
                          render: this.auth.account ? true : false,
                          inertia: true
                        },
                        {
                          route: 'account.subscription.show',
                          param: {
                            account: this.auth.account ? this.auth.account.username : '#'
                          },
                          title: 'Subscription',
                          icon: 'account_balance',
                          render: this.auth.account ? true : false,
                          inertia: true
                        },
                      ]
            }

            return [];
          },

          async signout(){
           await this.$inertia.post(route('signout'));
          }
        },
        mounted(){
          this.active = this.navItems().findIndex(item => item.route == this.route().current());
        }
    }
</script>