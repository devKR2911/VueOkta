<template>
  <div class="container">
    <h2>Create User</h2>
    <div class="row">
      <div class="col-1">First Name:</div>
      <div class="col-2">
        <input type="text" v-model="firstname" />
      </div>
    </div>
    <div class="row">
      <div class="col-1">Last Name:</div>
      <div class="col-2">
        <input type="text" v-model="lastname" />
      </div>
    </div>
    <div class="row">
      <div class="col-1">Email:</div>
      <div class="col-2">
        <input type="text" v-model="email" />
      </div>
    </div>
    <div class="row">
      <div class="col-1">Password:</div>
      <div class="col-2">
        <input type="password" v-model="password" />
      </div>
    </div>
    <div class="button-container">
      <button @click="addUser">Add User</button>
    </div>
  </div>
</template>
<script src="./CreateUser.js"></script>
<style lang="scss">
@import './CreateUser.scss';
</style>
