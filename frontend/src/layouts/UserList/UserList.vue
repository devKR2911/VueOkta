<template>
  <div>
    <h2>User List</h2>
    <div class="container">
      <div class="row" v-for="(user, index) in userList" :key="user.id">
        <div class="col-1">{{ index + 1 }}. {{ user.profile.firstName }} {{ user.profile.lastName }}</div>
        <div class="col-2">
          <button @click="editUser(user)">Edit</button>
        </div>
        <div class="col-3">
          <button @click="deleteUser(user)">Delete</button>
        </div>
      </div>
    </div>
  </div>
</template>
<script src="./UserList.js"></script>
<style lang="scss">
@import './UserList.scss';
</style>
