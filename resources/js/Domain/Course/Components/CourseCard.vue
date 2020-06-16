<template>
  <v-card max-width="344" class="mx-auto"
  >
    <v-list-item>
      <avatar :src="course.account.avatar" :color="course.account.theme_color" size="50"  class="mr-2" />
      <v-list-item-content>
        <v-list-item-title class="headline">{{ course.title }}</v-list-item-title>
        <v-list-item-subtitle>{{ course.account.name }} <inertia-link :href="route('account.show', {account: course.account.username})">{{ course.account.at_username }}</inertia-link></v-list-item-subtitle>
      </v-list-item-content>
    </v-list-item>

    <v-img :src="course.cover_image" height="194"></v-img>

    <v-card-text>
      {{ course.snippet }}
      <v-divider></v-divider>
      <div class="text-muted">
        <v-icon :color="course.account.theme_color">date_range</v-icon> {{course.start_date}} - {{course.end_date}}
      </div>
    </v-card-text>

    <v-card-actions>
      <h2>{{course.price | money}}</h2>
      <v-spacer></v-spacer>
      <inertia-link :href="route('account.course.show', {account: course.account.username, course: course.slug})" class="prevent-default">
        <v-btn dark :color="course.account.theme_color" > view course</v-btn>
      </inertia-link>
      <slot name="options" />      
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