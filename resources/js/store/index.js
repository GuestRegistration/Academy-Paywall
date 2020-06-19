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
            state.auth = auth ? auth.account || {} : {};
            state.authenticated = auth ? true : false;
        },
        setFrame(state){
            const url = window.location.search.split('?')[1];
            if(!url) return false;
            state.inFrame = window.location.search.split('?')[1].includes("frame=true");
        },
        setNavDrawer(state, open){
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
            if(isMobile){
                state.navDrawer = open;
            }else{
                state.navDrawer = true;
            }
            
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
