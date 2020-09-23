/**
 * First we will load all of this project's JavaScript dependencies which
 * includes Vue and other libraries. It is a great starting point when
 * building robust, powerful web applications using Vue and Laravel.
 */
import { InertiaApp } from '@inertiajs/inertia-vue';
import Vue from 'vue';
import Vuetify from 'vuetify';
import VueMeta from 'vue-meta'
import store from './store';
import toastr from 'toastr';
import wysiwyg from "vue-wysiwyg";
// import VueTagManager from "vue-tag-manager";

window.Vue = Vue;
window.toastr = toastr;

require('./bootstrap');

Vue.mixin({
    methods: {
        route: window.route,
        validationPass: (errors = {}) => !Object.keys(errors).length,
    },
});

Vue.filter('money', (value, currency = null) => {
  const currencies = require('../assets/currencies.json');
  const symbol = currencies[currency] ? currencies[currency].symbol_native : currency;
  return `${symbol}${new Intl.NumberFormat().format(value)}`;
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
Vue.use(VueMeta, {
  refreshOnceOnNavigation: true
});
Vue.use(wysiwyg, {});

const app = document.getElementById('app');

const isMobile = [
  /Android/i,
  /webOS/i,
  /iPhone/i,
  /iPad/i,
  /iPod/i,
  /BlackBerry/i,
  /Windows Phone/i
].some((toMatchItem) => {
  return navigator.userAgent.match(toMatchItem);
});


new Vue({
  render: h => h(InertiaApp, {
    props: {
      initialPage: JSON.parse(app.dataset.page),
      resolveComponent: name => import(`./${name}`).then(module => module.default),
      transformProps: (props) => {
        
        store.commit('setAuth', props.auth);
        store.commit('response/setErrors', props.errors);
        store.commit('setFrame');
        
      // close navigation on every page transition on mobile
      if(isMobile){
        store.commit('setNavDrawer', false);
      }        
        toastr.options = {
          "closeButton": true,
          "debug": false,
          "newestOnTop": false,
          "progressBar": true,
          "positionClass": "toast-top-right",
          "preventDuplicates": false,
          "onclick": null,
          "showDuration": "300",
          "hideDuration": "1000",
          "timeOut": "5000",
          "extendedTimeOut": "1000",
          "showEasing": "swing",
          "hideEasing": "linear",
          "showMethod": "fadeIn",
          "hideMethod": "fadeOut"
        }
        if(props.alerts.success){
            toastr.success(props.alerts.success);
        }
        if(props.alerts.error){
            toastr.error(props.alerts.error);
        }
        if(props.alerts.warning){
            toastr.warning(props.alerts.warning);
        }
        if(props.alerts.info){
            toastr.info(props.alerts.info);
        }
        return props;
      },
    },
  }),
  store,
  vuetify: new Vuetify({
    // icons: {
    //   iconfont: 'mdi', // default - only for display purposes
    // },
    theme: {
      themes: {
        light: {
          primary: '#002B36',
          secondary: '#b0bec5',
          accent: '#8c9eff',
          error: '#b71c1c',
        },
      },
    },
  }),
}).$mount(app);
