import Vue from 'vue';
import Router from 'vue-router';

Vue.use(Router);

export default new Router({
  routes: [{
      path: '/',
      name: 'HelloWorld',
      component: () => import('./components/HelloWorld.vue'),
    },
    {
      path: '/dashboard',
      name: 'dashboard',
      component: () => import('./components/Dashboard.vue'),
    },
    {
      path: '/login',
      name: 'login',
      component: () => import('./components/Login.vue'),
    },
  ],
});