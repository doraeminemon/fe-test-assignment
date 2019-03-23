import Vue from 'vue';
import axios from 'axios';
import VueAxios from 'vue-axios';

if (!process.env.VUE_APP_OPEN_WEATHER_API_KEY) {
  throw new Error('Missing API key');
}
const instance = axios.create({
  baseURL: 'http://api.openweathermap.org/data/2.5/',
  timeout: 1000,
  params: {
    APPID: process.env.VUE_APP_OPEN_WEATHER_API_KEY,
  },
});

Vue.use(VueAxios, instance);
