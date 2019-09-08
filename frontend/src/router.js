import Vue from 'vue';
import Router from 'vue-router';

Vue.use(Router);

export default new Router({
  routes: [{
      path: '/',
      name: 'login',
      component: () => import('./layouts/Login/Login.vue'),
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
      path: '/userlist',
      name: 'userlist',
      component: () => import('./layouts/UserList/UserList.vue'),
    },
    {
      path: '/createuser',
      name: 'createuser',
      component: () => import('./layouts/CreateUser/CreateUser.vue'),
    },
    {
      path: '/grouplist',
      name: 'grouplist',
      component: () => import('./layouts/GroupList/GroupList.vue'),
    },
    {
      path: '/updateuser/:id',
      name: 'updateuser',
      component: () => import('./layouts/CreateUser/CreateUser.vue'),
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
