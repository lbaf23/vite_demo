<template>
  <div>
    <h1>Main Page 1</h1>
    <el-button @click="getUser">get user</el-button>
    <p>
      {{apiUrl}}
    </p>
    <p>
      {{user}}
    </p>
  </div>
</template>

<script setup>
import UserAPI from "../../api/UserAPI.js";
import { ref } from 'vue'
const apiUrl = import.meta.env.VITE_API_URL

let user = ref(null);

const getUser = () => {
  UserAPI.getUser('1').then((res) => {
    user.value = res.data.data;
    console.log(res);
  }).catch((err) => {
    console.log(err);
  })
}
</script>

<script>
export default {
  name: "MainPage1"
}
</script>

<style scoped>

</style>
