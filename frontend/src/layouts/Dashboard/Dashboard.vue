<template>
  <div class="dash-container">
    <div>
      <img src="@assets/logo.png" alt />
    </div>
    <div>
      <button @click="goto('userlist')">User List</button>
      <button @click="goto('createuser')">Create User</button>
    </div>
  </div>
</template>
<script src="./Dashboard.js"></script>
<style lang="scss">
@import './Dashboard.scss';
</style>
