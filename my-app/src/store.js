import Vue from 'vue';
import Vuex from 'vuex';

Vue.use(Vuex);
const state = {
  dialog: false,
  client_name: "",
  client_mat: "",
  client_cpf: "",
  cliente_status: ""
};

const getters = {
  dialog: state => state.dialog,
  client_name: state => state.client_name,
  client_mat: state => state.client_mat,
  client_cpf: state => state.client_cpf,
  client_status: state => state.client_status,
};
const mutations = {
  updateDialog: (state, dialog) => { state.dialog = dialog; },
  updateName: (state, client_name) => { state.client_name = client_name; },
  updateMat: (state, client_mat) => { state.client_mat = client_mat; },
  updateCPF: (state, client_cpf) => { state.client_cpf = client_cpf; },
  updateStatus: (state, client_status) => { state.client_status = client_status; },
};
const actions = {
  updateDialog({ commit }, dialog) { commit('updateDialog', dialog); },
  updateName({ commit }, client_name) { commit('updateName', client_name); },
  updateMat({ commit }, client_mat) { commit('updateMat', client_mat); },
  updateCPF({ commit }, client_cpf) { commit('updateCPF', client_cpf); },
  updateStatus({ commit }, client_status) { commit('updateStatus', client_status); },
};

export default new Vuex.Store({
  state,
  getters,
  mutations,
  actions,
});