import Vue from "vue";
import Vuex from "vuex";

Vue.use(Vuex);

export default new Vuex.Store({
  state: {
    loggedUser: false
  },
  getters: {
    getUser: state => state.loggedUser
  },
  actions: {
    setUser({ commit }, user) {
      commit("changeUser", { loggedUser: user });
    }
  },
  mutations: {
    changeUser(state, updatedState) {
      state.loggedUser = updatedState.loggedUser;
    }
  }
});
