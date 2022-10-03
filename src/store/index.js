import { createStore } from 'vuex';
let store = createStore({
  state: {
    isPolicyholderOpen: false,
    isCustomerDataOpen: false,
    isApplicationSettingsOpen: false,
    isBlockSettingsOpen: false,
    isProductConditionsOpen: false,
    // policyholderForm: { phoneNumber: '', name: '', iin: '', addressRegistration: '', addressActual: '', residency: '', ipdl: '', disabilty: '', groupDisability: '' },
    policyholderForm: {},
    isInsuredOpen: false,
    insuredForm: {},
  },
  mutations: {
    setStatusPolicyholderOpen(state, data) {
      console.log('1', data.value);
      state.isPolicyholderOpen = !data.value;
    },
    setStatusInsuredOpen(state, data) {
      console.log('1', data.value);
      state.isInsuredOpen = !data.value;
    },
    setStatusCustomerDataOpen(state, data) {
      state.isCustomerDataOpen = !data.value;
    },
    setStatusApplicationSettingsOpen(state, data) {
      state.isApplicationSettingsOpen = !data.value;
    },
    setStatusBlockSettingsOpen(state, data) {
      state.isBlockSettingsOpen = !data.value;
    },
    setStatusProductConditionsOpen(state, data) {
      console.log('1', data.value);
      state.isProductConditionsOpen = !data.value;
    },
    setPolicyholderForm(state, data) {
      state.policyholderForm = data;
    },
    setPolicyholderInsuredSame(state) {
      state.insuredForm = state.policyholderForm;
      console.log(state.insuredForm);
    },
  },
  actions: {
    changeStatusPolicyholderOpen(data) {
      commit('setStatusPolicyholderOpen', data);
    },
    async checkOTP(data) {
      console.log('checking');
      // await axios.get
    },
  },
});

export default store;
