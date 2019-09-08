<template>
  <div class="create-user-container">
    <h2 v-if="!isEditMode">Create User</h2>
    <h2 v-else>Update User</h2>
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
    <div class="row" v-if="isEditMode">
      <input type="checkbox" id="updatePassword" v-model="updatePassword" />
      <label for="updatePassword">Update Password:</label>
    </div>
    <div class="row">
      <div class="col-1">Password:</div>
      <div class="col-2">
        <input type="password" :disabled="!updatePassword && isEditMode" v-model="password" />
      </div>
    </div>
    <div class="button-container">
      <button v-if="!isEditMode" @click="addUser">Add User</button>
      <button v-else @click="updateUser">Update User</button>
    </div>
  </div>
</template>
<script src="./CreateUser.js"></script>
<style lang="scss">
@import './CreateUser.scss';
</style>
