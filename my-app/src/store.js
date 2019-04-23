import Vue from 'vue';
import Vuex from 'vuex';

Vue.use(Vuex);
const state = {
  userInformation: {},
};

const getters = {
  userInformation: state => state.userInformation,
};
const mutations = {
  updateUserInformation: (state, userInformation) => { state.userInformation = userInformation; },
};
const actions = {
  updateUserInformation({ commit }, userInformation) { commit('updateUserInformation', userInformation); },
};

export default new Vuex.Store({
  state,
  getters,
  mutations,
  actions,
});