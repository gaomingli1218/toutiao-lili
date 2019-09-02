<template>
  <!-- 最外层容器 -->
  <el-container>
    <!-- 左侧导航 -->
    <el-aside style="width:250px">
      <layout-slider></layout-slider>
    </el-aside>
    <!-- 右侧 -->
    <el-container>
      <!-- 头部栏 -->
      <el-header>
        <layout-header></layout-header>
      </el-header>
      <el-main>主体</el-main>
    </el-container>
  </el-container>
</template>

<script>
import layoutSlider from '../../components/home/layout-slider'
import layoutHeader from '../../components/home/layout-header'
export default {
  components: {
    'layout-slider': layoutSlider,
    'layout-header': layoutHeader
  }
}
</script>

<style>
</style>
