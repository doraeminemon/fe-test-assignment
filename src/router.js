import Vue from 'vue';
import Router from 'vue-router';
import Home from './views/Home.vue';
import Missing from './views/404.vue';

Vue.use(Router);

export default new Router({
  routes: [
    {
      path: '/',
      name: 'home',
      component: Home,
    },
    {
      path: '/details/:id',
      name: 'details',
      component: () => import(/* webpackChunkName: 'details' */ './views/Details.vue'),
    },
    {
      path: '*',
      name: 'missing',
      component: Missing,
    },
  ],
});
