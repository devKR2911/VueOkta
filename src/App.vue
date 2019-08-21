<template>
  <div id="app">
    <button v-if="authenticated" v-on:click="logout" id="logout-button">Logout</button>
    <button v-else v-on:click="userLogin()" id="login-button">Login</button>
    <router-view></router-view>
  </div>
</template>

<script>
export default {
  name: "app",
  data: function() {
    return {
      authenticated: false
    };
  },
  created() {
    this.isAuthenticated();
  },
  watch: {
    // Everytime the route changes, check for auth status
    $route: "isAuthenticated"
  },
  methods: {
    // $auth.isAuthenticated
    // $auth.getAccessToken
    // $auth.getIdToken
    // $auth.getUser
    // $auth.handleAuthentication
    async userLogin() {
      await this.$auth.loginRedirect();
    },
    async isAuthenticated() {
      this.authenticated = await this.$auth.isAuthenticated();
      if (this.authenticated) {
        this.getAccessToken();
        this.getCurrentUserDetails();
      }
    },
    async getAccessToken(){
      const token = await this.$auth.getAccessToken();
      console.log('token --', token);
      const token2 = await this.$auth.getIdToken();
      console.log('token --', token2);
    },
    async getCurrentUserDetails() {
      const userDetails = await this.$auth.getUser();
      console.log(userDetails);
    },
    async logout() {
      await this.$auth.logout();
      await this.isAuthenticated();

      // Navigate back to home
      this.$router.push({ path: "/" });
    }
  }
};
</script>

<style>
#app {
  font-family: "Avenir", Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}
</style>
