<template>
  <!-- 使用饿了么ui的布局容器来实现结构 -->
  <el-container class="my-container">
    <!-- 头部区域 -->
    <el-header class="my-header">
      <el-row>
        <el-col :span="5">
          <img class="my-logo" src="../assets/logo.jpg" alt />
        </el-col>
        <el-col :span="18">
          <h2 class="my-title">黑牛后台管理系统</h2>
        </el-col>
        <el-col :span="1">
          <a class="my-logout" href="#" @click.prevent="logOut">退出</a>
        </el-col>
      </el-row>
    </el-header>
    <el-container>
      <!-- 侧边导航 -->
      <el-aside width="200px" class="my-aside">
        <el-menu
          default-active="2"
          class="el-menu-vertical-demo"
          @open="handleOpen"
          @close="handleClose"
          :unique-opened="false"
        >
          <!-- 导航1 -->
          <el-submenu index="1">
            <template slot="title">
              <i class="el-icon-location"></i>
              <span>导航一</span>
            </template>
            <el-menu-item index="1-1">
              <i class="el-icon-menu"></i>选项1
            </el-menu-item>
            <el-menu-item index="1-2">
              <i class="el-icon-menu"></i>选项2
            </el-menu-item>
          </el-submenu>
          <!-- 导航2 -->
          <el-submenu index="2">
            <template slot="title">
              <i class="el-icon-location"></i>
              <span>导航二</span>
            </template>
            <el-menu-item index="1-1">
              <i class="el-icon-menu"></i>选项1
            </el-menu-item>
            <el-menu-item index="1-2">
              <i class="el-icon-menu"></i>选项2
            </el-menu-item>
          </el-submenu>
        </el-menu>
      </el-aside>
      <el-main class="my-main">Main</el-main>
    </el-container>
  </el-container>
</template>

<script>
import { users } from "../api/http";
export default {
  name: "index",
  created() {
    users({
      pagenum: 1,
      pagesize: 5
    }).then(backData => {
      console.log(backData);
    });
  },
  //   方法
  methods: {
    logOut() {
      // 提示用户
      this.$confirm("此操作将立即退出咱们网站, 你真要这样子！！?", "┭┮﹏┭┮", {
        confirmButtonText: "确定",
        candelButtonText: "取消",
        type: "warning"
      })
        .then(() => {
          // 确认
          window.localStorage.removeItem("token");
          this.$router.push("/login");

          // 提示
          this.$message.error("你走吧,爸爸不要你了!");
        })
        .catch(() => {
          // 取消
          this.$message("擦了黑油!");
        });
    }
  }
};
</script>

 <style lang="less" scoped>
.my-container {
  height: 100%;
  .my-header {
    height: 60px;
    background-color: #b3c0d1;
    line-height: 60px;
    .my-title {
      text-align: center;
      color: white;
    }
    .my-logout {
      color: white;
      background-color: green;
      padding: 5px;
      border-radius: 4px;
      text-decoration: none;
    }
    .my-logo{
        height: 60px;
    }
  }
  .my-main {
    background-color: #e9eef3;
  }
}
</style>>

