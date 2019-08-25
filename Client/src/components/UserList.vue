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
    httpGet("https://dev-623833.oktapreview.com/api/v1/users").then(resp => {
      console.log(resp);
    });
  }
};
</script>
