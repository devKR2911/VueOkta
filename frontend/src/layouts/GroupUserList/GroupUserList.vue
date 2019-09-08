<template>
  <div>
    <h2>Group User List</h2>
    <h2>Group Name :- {{groupName}}</h2>
    <div class="container" v-if="userList.length > 0">
      <div class="row" v-for="(user, index) in userList" :key="user.id">
        <div class="col-1">{{ index + 1 }}. {{ user.profile.firstName }} {{ user.profile.lastName }}</div>
      </div>
    </div>
    <div class="container" v-if="userList.length === 0">
      <p>No users under this group</p>
    </div>
  </div>
</template>
<script src="./GroupUserList.js"></script>
<style lang="scss">
@import './GroupUserList.scss';
</style>
