<template>
  <div class="hello">
    <h1>User List</h1>
  </div>
</template>

<script>
import { httpGet } from "../communication/communication";
export default {
  name: "UserList",
  props: {},
  mounted() {
    httpGet('users/getAllUsers').then(resp => {
      console.log(resp);
    });
  }
};
</script>
