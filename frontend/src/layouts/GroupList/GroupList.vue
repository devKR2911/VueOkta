<template>
  <div>
    <h2>Group List</h2>
    <div class="container">
      <div class="row" v-for="(group, index) in groupList" :key="group.id">
        <div class="col-1">{{ index + 1 }}. {{ group.profile.name }}</div>
        <div class="col-2">
          <button @click="getGroupUsers(group)">Group Users</button>
        </div>
        <div class="col-3">
          <button @click="deleteGroup(group)">Delete</button>
        </div>
      </div>
    </div>
  </div>
</template>
<script src="./GroupList.js"></script>
<style lang="scss">
@import './GroupList.scss';
</style>
