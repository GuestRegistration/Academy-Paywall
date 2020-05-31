<template>
  <v-card
    max-width="344"
    class="mx-auto"
  >
    <v-list-item>
      <avatar :src="course.account.avatar" color="primary" size="50"  class="mr-2" />
      <v-list-item-content>
        <v-list-item-title class="headline">{{ course.title }}</v-list-item-title>
        <v-list-item-subtitle>by {{ course.account.name }} {{ course.account.at_username }}</v-list-item-subtitle>
      </v-list-item-content>
    </v-list-item>

    <v-img :src="course.cover_image" height="194"></v-img>

    <v-card-text>
      {{ course.snippet }}
    </v-card-text>

    <v-card-actions>
      <h2>{{course.price | money}}</h2>
      <v-spacer></v-spacer>
      <inertia-link :href="route('account.course.show', {account: course.account.username, course: course.slug})" class="prevent-default">
        <v-btn dark :color="course.account.theme_color" > view course</v-btn>
      </inertia-link>
      <v-menu  origin="center center"  transition="scale-transition">
        <template v-slot:activator="{ on }">
          <v-btn icon v-on="on">
            <v-icon>mdi-share-variant</v-icon>
          </v-btn>
        </template>
        <v-list>
          <v-list-item>
            <v-list-item-title>Share options here</v-list-item-title>
          </v-list-item>
        </v-list>
      </v-menu>
      
    </v-card-actions>
  </v-card>
</template>

<script>
  import {mapState} from 'vuex'

  export default {
      name: "CourseCard",
      props: {
          course: Object,
          account: Object,
      },
      computed: {
        ...mapState({
          authenticated: state => state.authenticated,
          auth: state=> state.auth,
        })
      },
      watch: {
        account: {
          immediate: true,
          handler(account){
            if(account && !this.course.account){
              this.course.account = account;
            }
          }
        }
      }
  }
</script>