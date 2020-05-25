/**
 * First we will load all of this project's JavaScript dependencies which
 * includes Vue and other libraries. It is a great starting point when
 * building robust, powerful web applications using Vue and Laravel.
 */
import { InertiaApp } from '@inertiajs/inertia-vue';
import Vue from 'vue';
import Vuetify from 'vuetify';
import store from './store';

window.Vue = Vue;
require('./bootstrap');


Vue.mixin({
    methods: {
        route: window.route,
        validationPass: (errors = {}) => !Object.keys(errors).length,
    },
});

/**
 * The following block of code may be used to automatically register your
 * Vue components. It will recursively scan this directory for the Vue
 * components and automatically register them with their "basename".
 *
 * Eg. ./components/ExampleComponent.vue -> <example-component></example-component>
 */

const files = require.context('./components', true, /\.vue$/i);
files.keys().map(key => Vue.component(key.split('/').pop().split('.')[0], files(key).default));


/**
 * Next, we will create a fresh Vue application instance and attach it to
 * the page. Then, you may begin adding components to this application
 * or customize the JavaScript scaffolding to fit your unique needs.
 */

Vue.use(InertiaApp)
Vue.use(Vuetify);

const app = document.getElementById('app')

new Vue({
  render: h => h(InertiaApp, {
    props: {
      initialPage: JSON.parse(app.dataset.page),
      resolveComponent: name => import(`./${name}`).then(module => module.default),
      transformProps: props => {
        store.commit('setAuth', props.auth);
        store.commit('response/setErrors', props.errors);
        return props;
        },
    },
  }),
  store,
  vuetify: new Vuetify({
    theme: {
      themes: {
        light: {
          primary: '#3f51b5',
          secondary: '#b0bec5',
          accent: '#8c9eff',
          error: '#b71c1c',
        },
      },
    },
  }),
}).$mount(app);
