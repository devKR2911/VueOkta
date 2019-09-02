import Vue from 'vue';
import Router from 'vue-router';
import Home from './views/Home.vue';

Vue.use(Router);

export default new Router({
  routes: [
    {
      path: '/',
      name: 'home',
      component: Home,
    },
    {
      path: '/about',
      name: 'about',
      // route level code-splitting
      // this generates a separate chunk (about.[hash].js) for this route
      // which is lazy-loaded when the route is visited.
      component: () => import(/* webpackChunkName: "about" */ './views/About.vue'),
    },
    {
      path: '/dashboard',
      name: 'dashboard',
      component: () => import('./layouts/Dashboard/Dashboard.vue'),
    },
    {
      path: '/login',
      name: 'login',
      component: () => import('./layouts/Login/Login.vue'),
    },
    {
      path: '/core',
      name: 'core',
      component: () => import('./components/core/CoreTest/CoreTest.vue'),
    },
    {
      path: '/grid',
      name: 'grid',
      component: () => import('./components/business/GridDemo/GridDemo.vue'),
    },
    {
      path: '/core',
      name: 'core',
      component: () => import('./components/core/CoreTest/CoreTest.vue'),
    },
    {
      path: '/404',
      name: '404',
      component: () => import('./layouts/PageNotFound/PageNotFound.vue'),
    },
    {
      path: '*',
      redirect: '/404',
    },
  ],
});
