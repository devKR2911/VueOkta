<template>
  <div>
    <h2>Create Group</h2>
    <div class="container">
      <div class="row">
        <div class="col-1">Group Name</div>
        <div class="col-2">
          <input type="text" v-model="groupName" />
        </div>
      </div>
      <div class="button-container">
        <button @click="createGroup()">Create Group</button>
      </div>
    </div>
  </div>
</template>
<script src="./CreateGroup.js"></script>
<style lang="scss">
@import './CreateGroup.scss';
</style>
