import Vue from 'vue';
import Router from 'vue-router';

import Landing from '../components/Landing.vue';
import Filter1 from '../components/Filter1.vue';
import Filter2 from '../components/Filter2.vue';
import Filter3 from '../components/Filter3.vue';
import Markers from '../components/Markers.vue';

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
      path: '/filter1',
      name: 'filter1',
      component: Filter1
    },
    {
      path: '/filter2',
      name: 'filter2',
      component: Filter2
    },
    {
      path: '/filter3',
      name: 'filter3',
      component: Filter3
    },
    {
      path: '/markers',
      name: 'markers',
      component: Markers
    }

  ]
});

export default router;