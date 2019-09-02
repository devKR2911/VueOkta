<template>
  <div class="login-container">
    <input type="text" :model="username" />
    <input type="password" :model="password" />
    <button @click="loginUser">Login</button>
  </div>
</template>
<script src="./Login.js"></script>
<style lang="scss">
@import './Login.scss';
</style>
