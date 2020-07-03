<template>
  <v-card class="mx-auto"
  >
    <v-row>
      <v-col  v-if="!inFrame && showInstructor" cols="12">
        <v-list-item>
          <avatar :src="course.account.avatar" :color="course.account.theme_color" size="40"  class="mr-2" />
          <v-list-item-content>
            <v-list-item-subtitle><strong>{{ course.account.name }}</strong> <inertia-link :href="route('account.show', {account: course.account.username})">{{ course.account.at_username }}</inertia-link></v-list-item-subtitle>
          </v-list-item-content>
        </v-list-item>
      </v-col>

      <v-col cols="12" :lg="col" class="pt-0">
        <v-img :src="course.cover_image" height="194"></v-img>
        <course-status v-if="showStatus" :course="course" />
      </v-col>
      
      <v-col cols="12" :lg="col" class="pt-0">
        <v-card-text>
          <h4>{{ course.title }}</h4>
          {{ course.snippet }}
          <v-divider></v-divider>
          <div class="text-muted">
            <v-icon :color="course.account.theme_color">date_range</v-icon> {{course.start_date}} - {{course.end_date}}
          </div>
          <v-divider></v-divider>
          <v-chip-group v-if="course.users">
            <inertia-link v-for="instructor in course.users" :key="instructor.id" :href="route('profile.show', {profile: instructor.profile.username})" class="prevent-default">
              <v-chip  outlined>
                <avatar :src="instructor.profile.avatar" :color="course.account.color" size="80" :text="instructor.profile.initials" />
                <span class="ml-2">{{ instructor.profile.fullname}}</span>
              </v-chip>
            </inertia-link>
          </v-chip-group>
        </v-card-text>

        <v-card-actions>
          <h2>{{course.price | money}}</h2>
          <v-spacer></v-spacer>
          <inertia-link :href="route('account.course.show', {account: course.account.username, course: course.slug})" class="prevent-default">
            <v-btn dark :color="course.account.theme_color" > view course</v-btn>
          </inertia-link>
          <slot name="options" />      
        </v-card-actions>
      </v-col>
    </v-row>

   
  </v-card>
</template>

<script>
  import {mapState} from 'vuex'
  import CourseStatus from './CourseStatus';
  export default {
      name: "CourseCard",
      components:{
        CourseStatus
      },
      props: {
          course: Object,
          account: Object,
          showInstructor: {
            type: Boolean,
            default: () => true,
          },
          showStatus: {
            type: Boolean,
            default: () => false,
          },
          display: {
            type: String,
            default: () => 'grid'
          }
      },
      computed: {
        ...mapState({
          authenticated: state => state.authenticated,
          auth: state => state.auth,
          inFrame: state => state.inFrame,
        }),
        col(){
          return this.display == 'list' ? 6 : 12;
        }
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