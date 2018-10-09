import Vue from 'vue';
import Router from 'vue-router';

import Landing from '../components/Landing.vue';
import Filter1 from '../components/Filter1.vue';

Vue.use(Router);

let router = new Router({
  mode: 'history',
  routes: [{
      path: '*',
      redirect: '/'
    },
    {
      path: '/',
      name: 'Landing',
      component: Landing
    },
    {
      path: '/fuck_filter',
      name: 'filter1',
      component: Filter1
    }
  ]
});

export default router;