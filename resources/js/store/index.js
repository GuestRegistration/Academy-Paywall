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
            state.auth = auth ? auth.account || {} : {};
            state.authenticated = auth ? true : false;
        },
    },
    getters: {
        auth: state => {
            return state.auth;
        },
        authenticated: state => {
            return state.authenticated;
        },
        isMyAccount: state => account => {
            if(!state.authenticated) return false;
            return state.auth.id === account.id ? true : false;
        },
        isOnMyAccount: state => resource => {
            if(!state.authenticated) return false;
            return state.auth.id === resource.account_id ? true : false;
        }
    },
    
    actions: {
    },
    modules: {
        response,
    },
});
