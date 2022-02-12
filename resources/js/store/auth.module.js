import {login, authUser} from '../services/auth/auth.service'

const state = () => ({
    user: {},
    status: {
        loggedIn: false
    }
});

const getters = {
    loadUser(state){
        return state.user;
    },
    isLoggedIn(state){
        return state.status.loggedIn;
    }
}

const actions = {
    async login({commit}, {email, password}) {
        try {
            const response = await login(email, password);
            localStorage.setItem('accessToken', JSON.stringify(response.data.access_token));

            commit('loginSuccess', response.data)
        } catch (e) {
            throw e;
        }


    },
    async authUser({commit}){
        try{
            const response = await authUser();
            commit('GET_USER', response);
        } catch(e) {
            throw e;
        }
    },
    async logout({commit}) {
        localStorage.removeItem('accessToken');
        commit('LOGOUT');
    },
}

const mutations = {
    GET_USER(state, user) {
        state.user = user;
    },
    loginSuccess(state) {
        state.status.loggedIn = true;
    },
    loginFailure(state) {
        state.status.loggedIn = false;
        state.user = null;
    },
    LOGOUT(state) {
        state.status.loggedIn = false;
        state.user = null;
    },
    registerSuccess(state) {
        state.status.loggedIn = false;
    },
    registerFailure(state) {
        state.status.loggedIn = false;
    }
}

export default {
    namespaced: true,
    state,
    getters,
    actions,
    mutations
}
