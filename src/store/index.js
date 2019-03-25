import Vue from 'vue';
import Vuex from 'vuex';
import Cities from './cities.module';

Vue.use(Vuex);

export default new Vuex.Store({
  namespaced: true,
  strict: true,
  modules: {
    Cities,
  },
});
