import Vue from 'vue';
import Vuex from 'vuex';
import WeatherData from './weatherData.module';

Vue.use(Vuex);

export default new Vuex.Store({
  modules: {
    WeatherData,
  },
});
