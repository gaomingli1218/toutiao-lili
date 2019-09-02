<template>
  <div class="header">
    <el-row type="flex" justify="space-between">
      <el-col :span="7">
        <i class="el-icon-s-fold icon"></i>
        <span>江苏传智播客教育科技股份有限公司</span>
      </el-col>
      <el-col :span="3">
        <img src="../../assets/imgs/avatar.jpg" alt class="img" />
        <el-dropdown trigger="click">
          <span class="el-dropdown-link" style="font-size:18px">
            宝宝们
            <i class="el-icon-arrow-down el-icon--right"></i>
          </span>
          <el-dropdown-menu slot="dropdown">
            <el-dropdown-item>个人信息</el-dropdown-item>
            <el-dropdown-item>git地址</el-dropdown-item>
            <el-dropdown-item>退出</el-dropdown-item>
          </el-dropdown-menu>
        </el-dropdown>
      </el-col>
    </el-row>
  </div>
</template>

<script>
export default {}
</script>

<style lang='less' scoped>
.header {
  height: 60px;
  line-height: 60px;
  font-size: 20px;
  .icon {
    font-size: 26px;
    vertical-align: middle;
    margin-right: 10px;
  }
  .img {
    border-radius: 50%;
    vertical-align: middle;
    margin-right: 10px;
  }
}
</style>
