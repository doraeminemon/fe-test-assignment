/* eslint-disable no-param-reassign */
const initialData = {
  cities: [
    { id: 1609350, name: 'Bangkok' },
    { id: 2038493, name: 'Bali' },
    { id: 1853909, name: 'Osaka' },
    { id: 3128760, name: 'Barcelona' },
    { id: 1819729, name: 'Hong Kong' },
    { id: 6542283, name: 'Milan' },
    { id: 6533961, name: 'Palma de Mallorca' },
    { id: 1614295, name: 'Pattaya' },
    { id: 104515, name: 'Mecca' },
    { id: 1151254, name: 'Phuket' },
  ],
};

export default {
  namespaced: true,
  state: initialData,
  mutations: {
    SET_CITIES(state, newObj) {
      state.cities = newObj;
    },
  },
  actions: {
    setCities({ commit }, { cities }) {
      commit('SET_CITIES', cities);
    },
  },
  getters: {
    cityWithId: state => targetId => state.cities.find(({ id }) => targetId === id),
  },
};
