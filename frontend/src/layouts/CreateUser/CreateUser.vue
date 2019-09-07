<template>
  <div>
    <div>
      First Name:
      <input type="text" v-model="firstname" />
    </div>
    <div>
      Last Name:
      <input type="text" v-model="lastname" />
    </div>
    <div>
      Email:
      <input type="text" v-model="email" />
    </div>
    <div>
      Password:
      <input type="password" v-model="password" />
    </div>
    <div>
      <button @click="addUser">Add User</button>
    </div>
  </div>
</template>
<script src="./CreateUser.js"></script>
<style lang="scss">
@import './CreateUser.scss';
</style>
