<template>
  <v-card
    max-width="344"
    class="mx-auto"
  >
    <v-list-item>
      <v-list-item-avatar color="grey"></v-list-item-avatar>
      <v-list-item-content>
        <v-list-item-title class="headline">{{ course.title }}</v-list-item-title>
        <v-list-item-subtitle>by {{ course.user.name }}</v-list-item-subtitle>
      </v-list-item-content>
    </v-list-item>

    <v-img :src="course.cover_image" height="194"></v-img>

    <v-card-text>
      {{ course.description }}
    </v-card-text>

    <v-card-actions>
      <v-btn text color="primary">View</v-btn>
      <v-btn text color="primary" v-if="course.is_published"> Purchase</v-btn>
      <v-btn color="primary" v-else-if="authenticated && auth.id == course.user.id"> Publish course</v-btn>
      
      <v-spacer></v-spacer>
      <v-btn icon>
        <v-icon>mdi-heart</v-icon>
      </v-btn>
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
      },
      computed: {
        ...mapState({
          authenticated: state => state.authenticated,
          auth: state=> state.auth,
        })
      }
  }
</script>