<template>
  <div class="dash-container">
    <div>
      <h2>User Management</h2>
    </div>
    <div>
      <button @click="goto('userlist')">User List</button>
      <button @click="goto('createuser')">Create User</button>
    </div>

    <div>
      <h2>Group Management</h2>
    </div>
    <div>
      <button @click="goto('grouplist')">Group List</button>
    </div>
  </div>
</template>
<script src="./Dashboard.js"></script>
<style lang="scss">
@import './Dashboard.scss';
</style>
