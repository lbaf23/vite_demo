<template>
  <el-menu
      default-active="1"
      @open="handleOpen"
      @close="handleClose"
      style="height: 100%"
  >
    <router-link to="/">
      <el-menu-item index="1">
        <el-icon><icon-menu /></el-icon>
        <span>Page 1</span>
      </el-menu-item>
    </router-link>

    <router-link to="/main2">
      <el-menu-item index="2">
        <el-icon><document /></el-icon>
        <span>Page 2</span>
      </el-menu-item>
    </router-link>

    <router-link to="/main3">
      <el-menu-item index="3">
        <el-icon><setting /></el-icon>
        <span>Page 3</span>
      </el-menu-item>
    </router-link>

    <el-sub-menu index="4">
      <template #title>
        <el-icon><location /></el-icon>
        <span>Navigator One</span>
      </template>
      <el-menu-item-group title="Group One">
        <el-menu-item index="1-1">item one</el-menu-item>
        <el-menu-item index="1-2">item two</el-menu-item>
      </el-menu-item-group>
      <el-menu-item-group title="Group Two">
        <el-menu-item index="1-3">item three</el-menu-item>
      </el-menu-item-group>
      <el-sub-menu index="1-4">
        <template #title>item four</template>
        <el-menu-item index="1-4-1">item one</el-menu-item>
      </el-sub-menu>
    </el-sub-menu>

  </el-menu>
</template>

<script setup>
import {
  Document,
  Menu as IconMenu,
  Location,
  Setting,
} from '@element-plus/icons-vue'

const handleOpen = (key, keyPath) => {
  console.log(key, keyPath);
};
const handleClose = (key, keyPath) => {
  console.log(key, keyPath);
};

</script>

<script>
export default {
  name: "Sider"
}
</script>

<style scoped>
a {
  text-decoration: None;
}
.router-link-active {
  text-decoration: None;
}
</style>
