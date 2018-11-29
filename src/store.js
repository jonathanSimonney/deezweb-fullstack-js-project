import Vue from "vue";
import Vuex from "vuex";
import axios from "axios-jsonp-pro";

Vue.use(Vuex);

export default new Vuex.Store({
  state: {
    loggedUser: false,
    listMusics: []
  },
  getters: {
    getUser: state => state.loggedUser,
    getMusics: state => state.listMusics
  },
  actions: {
    setUser({ commit }, user) {
      commit("changeUser", { loggedUser: user });
    },
    setMusics({ commit }, search) {
      console.log(search.searchCriteria, search.searchText);

      let requestParams = {
        output: "jsonp"
      };

      switch (search.searchCriteria) {
        case "Album":
          requestParams.q = 'album:"' + search.searchText + '"';
          break;
        case "Artiste":
          requestParams.q = 'artist:"' + search.searchText + '"';
          break;
        case "Musique":
          requestParams.q = 'track:"' + search.searchText + '"';
          break;
        case "Les plus populaires":
          requestParams.q = search.searchText;
          requestParams.order = "RANKING";
          break;
        case "Les mieux notés":
          requestParams.q = search.searchText;
          requestParams.order = "RATING_DESC";
          break;
        default:
          console.warn("unexpected search criteria");
          requestParams.q = search.searchText;
      }

      axios
        .jsonp("https://api.deezer.com/search", {
          params: requestParams
        })
        .then(function(response) {
          console.log(response.data);
          commit("changeMusics", { listMusics: response.data });
        })
        .catch(function(error) {
          console.log(error);
        });
    }
  },
  mutations: {
    changeUser(state, updatedState) {
      state.loggedUser = updatedState.loggedUser;
    },
    changeMusics(state, updatedState) {
      state.listMusics = updatedState.listMusics;
    }
  }
});
