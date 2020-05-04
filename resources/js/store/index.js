import Vue from 'vue';
import Vuex from 'vuex';
import response from './response';

Vue.use(Vuex);

export default new Vuex.Store({
    state: {
        auth: {},
    },
    mutations: {
        setAuth(state, auth) {
            state.auth = auth || {};
        },
    },
    actions: {
    },
    modules: {
        response,
    },
});
