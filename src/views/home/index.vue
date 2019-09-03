<template>
  <!-- 最外层容器 -->
  <el-container style="margin:0;padding:0">
    <!-- 左侧导航 -->
    <el-aside style="width:250px;background: #323745;overflow:hidden">
      <layout-slider></layout-slider>
    </el-aside>
    <!-- 右侧 -->
    <el-container>
      <!-- 头部栏 -->
      <el-header>
        <layout-header></layout-header>
      </el-header>
      <el-main style="margin:0;padding:0">
        <layout-main></layout-main>
      </el-main>
    </el-container>
  </el-container>
</template>

<script>
import layoutSlider from '../../components/home/layout-slider'
import layoutHeader from '../../components/home/layout-header'
import layoutMain from '../../components/home/layout-main'
export default {
  components: {
    'layout-slider': layoutSlider,
    'layout-header': layoutHeader,
    'layout-main': layoutMain
  }
}
</script>

<style>
</style>
