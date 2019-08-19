import Vue from 'vue';
import Router from 'vue-router';
import HelloWorld from './components/HelloWorld.vue';
import OktaLogin from './components/OktaLogin.vue';

Vue.use(Router);

export default new Router({
  routes: [{
      path: '/',
      name: 'home',
      component: HelloWorld,
    },
    {
      path: '/okta',
      name: 'about',
      component: OktaLogin,
    },
  ],
});