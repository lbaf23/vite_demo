<template>
  <div style="height: 100vh">
    <el-container style="height: 100%;">
      <el-header>
        <Header/>
      </el-header>
      <el-container>
        <el-aside width="200px">
          <Sider/>
        </el-aside>
        <el-container>
          <el-main>
            <router-view/>
          </el-main>
          <el-footer>Footer</el-footer>
        </el-container>
      </el-container>
    </el-container>
  </div>
</template>

<script setup>
import Sider from "./Sider.vue";
import Header from "./Header.vue";



</script>


<script>

export default {
  name: "MainLayout"
}
</script>

<style scoped>

</style>
