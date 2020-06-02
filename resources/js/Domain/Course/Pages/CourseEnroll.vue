<template>
  <v-row justify="center">
    <v-dialog v-model="dialog" persistent max-width="600px">

        <form @submit.prevent="submit">
          <v-card>
            <v-card-title>
              <span class="headline">Enroll for "{{course.title}}"</span>
              <v-spacer></v-spacer>
              <h4 :style="`color: ${account.theme_color}`">{{ course.price | money }}</h4>
            </v-card-title>
            <v-divider></v-divider>
            <v-card-text>
                <x-input :errors="errors" name="first_name" type="text" v-model="form.first_name" label="First name*" />
                <x-input :errors="errors" name="last_name" type="text" v-model="form.last_name" label="Last name*" />
                <x-input :errors="errors" name="email" type="text" v-model="form.email" label="Email*" />
                <x-input :errors="errors" name="phone" type="text" v-model="form.phone" label="Phone*" />
                <small color="red">*indicates required field</small>
            </v-card-text>
            <v-card-actions>
              <v-btn type="button" color="red darken-1" text @click="$inertia.visit(route('account.course.show', {account: account.username, course: course.slug}))">Cancel</v-btn>
              <v-spacer></v-spacer>
              <v-btn type="submit" :loading="loading" :color="account.theme_color" dark >Proceed to payment  <v-icon>arrow_forward</v-icon></v-btn>
            </v-card-actions>
          </v-card>
        </form>

    </v-dialog>
  </v-row>
</template>

<script>
    import AccountLayout from '@/Domain/Account/Layout';
    import CourseShow from './CourseShow';

    export default {
        name: 'CourseEnroll',
        metaInfo()
         {
             return{
                title: `Enroll ${this.course.title} ${this.account.at_username}`,
                titleTemplate: '%s - AcadaApp',
             }
        },

        layout: (h, page) => h(AccountLayout, [
                              h(CourseShow, [page])
                            ]),

        data(){
            return {
                dialog: true,
                loading: false,
                form: {},
            }
        },
        props: {
            errors: null,
            account: {
                type: Object,
                default: () => ({}),
            },
            course: {
                type: Object,
                default: () => ({}),
            },
        },

        methods: {
          async submit(){
            this.loading = true;
            await this.$inertia.post(this.route('account.course.register', {account: this.account.username, course: this.course.slug}), this.form);
            this.loading = false;
          }
        }

    }
</script>