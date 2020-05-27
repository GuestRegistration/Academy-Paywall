import Vue from 'vue';
import Vuex from 'vuex';
import response from './response';

Vue.use(Vuex);

export default new Vuex.Store({
    state: {
        auth: {},
        authenticated: false,
    },
    mutations: {
        setAuth(state, auth) {
            state.auth = auth || {};
            state.authenticated = auth ? true : false;
        },
    },
    getters: {
        auth: state => {
            return state.auth;
        }
    },
    
    actions: {
    },
    modules: {
        response,
    },
});
