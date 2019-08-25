import Vue from 'vue';
import Router from 'vue-router';
import Auth from '@okta/okta-vue';
import HelloWorld from './components/HelloWorld.vue';
import OktaLogin from './components/OktaLogin.vue';
import Protected from './components/Protected.vue';
import UserList from './components/UserList.vue';
// import ErrorComponent from './components/Error.vue';

Vue.use(Router);

const router = new Router({
  mode: 'history',
  routes: [{
      path: '/implicit/callback',
      component: Auth.handleCallback()
    },
    {
      path: '/',
      name: 'home',
      component: HelloWorld
    },
    {
      path: '/okta',
      name: 'about',
      component: OktaLogin
    },
    {
      path: '/userlist',
      name: 'userlist',
      component: UserList
    },
    {
      path: '/implicit/callback',
      component: Auth.handleCallback()
    },
    {
      path: '/protected',
      component: Protected,
      meta: {
        requiresAuth: true
      }
    }
  ]
});

Vue.use(Auth, {
  issuer: 'https://dev-623833.oktapreview.com/oauth2/default',
  client_id: '0oan1cievaxhHtiOZ0h7',
  redirect_uri: 'http://localhost:7777/implicit/callback',
  scope: 'openid profile email'
});

router.beforeEach(Vue.prototype.$auth.authRedirectGuard());

export default router;