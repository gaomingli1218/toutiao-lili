<template>
  <div class="slider">
    <div class="slogo">
      <img src="../../assets/imgs/logo_admin.png" alt />
    </div>
    <el-menu background-color="#353b4e" text-color="#adafb5" active-text-color="#ffd04b">
      <el-menu-item index="1">
        <i class="el-icon-s-home"></i>
        <span slot="title">首页</span>
      </el-menu-item>
      <el-submenu index="2">
        <template slot="title">
          <i class="el-icon-s-order"></i>
          <span>内容管理</span>
        </template>
        <el-menu-item>发布文章</el-menu-item>
        <el-menu-item>内容列表</el-menu-item>
        <el-menu-item>评论管理</el-menu-item>
        <el-menu-item>素材管理</el-menu-item>
      </el-submenu>
      <el-submenu index="3">
        <template slot="title">
          <i class="el-icon-s-custom"></i>
          <span>粉丝管理</span>
        </template>
        <el-menu-item>图文数据</el-menu-item>
        <el-menu-item>粉丝概况</el-menu-item>
        <el-menu-item>粉丝列表</el-menu-item>
        <el-menu-item>粉丝画像</el-menu-item>
      </el-submenu>
      <el-menu-item index="4">
        <i class="el-icon-s-tools"></i>
        <span slot="title">账户管理</span>
      </el-menu-item>
    </el-menu>
  </div>
</template>

<script>
export default {}
</script>

<style lang='less' scoped>
.slider {
  width: 251px;
  height: 100vh;
  background: #323745;
  .slogo {
    height: 75px;
    background: #2e2f32;
    text-align: center;
    padding: 15px 0;
    img {
      height: 38px;
    }
  }
  .el-menu-item {
    font-size: 16px;
    height: 70px;
    line-height: 70px;
  }
}
</style>
