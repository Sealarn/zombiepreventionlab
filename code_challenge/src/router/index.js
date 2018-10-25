import Vue from 'vue';
import Router from 'vue-router';

import Landing from '../components/Landing.vue';

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
    }
  ]
});

export default router;