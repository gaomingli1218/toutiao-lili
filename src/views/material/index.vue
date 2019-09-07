<template>
  <el-card style="margin:20px" class="material">
    <bread-crumb slot="header">
      <template slot="title">素材列表</template>
    </bread-crumb>
    <el-tabs v-model="activeName">
      <el-tab-pane label="全部素材" name="all">
        <div class="photobox">
          <div v-for="item in list" :key="item.id" class="photo">
            <img :src="item.url" alt />
            <el-row type="flex" justify="space-around" style="font-size:22px;margin-top:10px">
              <i :style="{color: item.is_collected ? 'red' : '' }" class="el-icon-star-on"></i>
              <i class="el-icon-delete-solid"></i>
            </el-row>
          </div>
        </div>
      </el-tab-pane>
      <el-tab-pane label="收藏图片" name="collect">配置管理</el-tab-pane>
    </el-tabs>
  </el-card>
</template>

<script>
import breadCrumb from '../../components/common/breadcrumb'
export default {
  components: {
    'bread-crumb': breadCrumb
  },
  data () {
    return {
      activeName: 'all',
      list: []
    }
  },
  methods: {
    getMaterial () {
      this.$axios({
        url: '/user/images',
        params: { collect: this.activeName === 'collect' } // collect为false获取的是全部素材
      }).then(res => {
        console.log(res)
        this.list = res.data.results
      })
    }
  },
  created () {
    this.getMaterial()
  }
}
</script>

<style lang='less' csoped>
.material {
  .photobox {
    display: flex;
    flex-wrap: wrap;
    justify-content: center;
    .photo {
      width: 200px;
      height: 160px;
      margin: 30px;
      img {
        width: 100%;
        height: 100%;
        border-radius: 4px;
      }
    }
  }
}
</style>
