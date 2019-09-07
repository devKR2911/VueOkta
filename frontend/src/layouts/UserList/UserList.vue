<template>
  <div>
    <div class="dash-container">Im at {{ pageName }}</div>
    <div>
      <div v-for="user in userList" :key="user.id">{{ user.profile.firstName }}</div>
    </div>
  </div>
</template>
<script src="./UserList.js"></script>
<style lang="scss">
@import './UserList.scss';
</style>
