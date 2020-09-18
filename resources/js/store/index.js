import Vue from 'vue';
import Vuex from 'vuex';
import response from './response';

Vue.use(Vuex);

export default new Vuex.Store({
    state: {
        auth: {},
        authenticated: false,
        inFrame: false,
        navDrawer: false
    },
    mutations: {
        setAuth(state, auth) {
            state.auth = auth ?? {};
            state.authenticated = auth ? true : false;
        },
        setFrame(state){
            const url = window.location.search.split('?')[1];
            if(!url) return false;
            state.inFrame = window.location.search.split('?')[1].includes("frame=true");
        },
        setNavDrawer(state, open){
            state.navDrawer = open;
        }
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
            if(!state.auth.account) return false;
            return state.auth.account.id === account.id ? true : false;
        },
        isMyProfile: state => profile => {
            if(!state.authenticated) return false;
            return state.auth.profile.id === profile.id ? true : false;
        },

        isOnMyAccount: state => resource => {
            if(!state.authenticated) return false;
            if(!state.auth.account) return false;
            return state.auth.account.id === resource.account_id ? true : false;
        }
    },
    
    actions: {
        pushGTMEvent: ({}, { id, events }) => {
            console.log(events, ' will be fired in ', id);
            VueTagManager.initialize({
                gtmId: id
            });
            events.forEach(trigger => {
                window.TagManager.push({event: trigger})
            });
        }
    },
    modules: {
        response,
    },
});
