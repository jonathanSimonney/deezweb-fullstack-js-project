import Vue from "vue";
import Vuex from "vuex";

Vue.use(Vuex);

export default new Vuex.Store({
  state: {
    loggedIn: false
  },
  getters: {
    isLoggedIn: state => state.loggedIn
  },
  actions: {
    setLoggedIn({ commit }, loggedIn) {
      commit("changeLoggedInStatus", { loggedIn: loggedIn });
    }
  },
  mutations: {
    changeLoggedInStatus(state, updatedState) {
      state.loggedIn = updatedState.loggedIn;
    }
  }
});
