<template>
  <el-card>
    <!-- 插槽内容 => 标题 -->
    <bread-crumb slot="header">
      <!-- 面包屑的具名插槽 -->
      <template slot="title">评论列表</template>
    </bread-crumb>
    <el-table :data="list">
      <el-table-column prop="title" label="标题" width="700"></el-table-column>
      <!-- formatter是el-table-column属性  格式化内容，return里写什么就显示什么 -->
      <el-table-column :formatter="formatter" prop="comment_status" label="评论状态"></el-table-column>
      <el-table-column prop="total_comment_count" label="总评论说"></el-table-column>
      <el-table-column prop="fans_comment_count" label="粉丝评论数"></el-table-column>
      <el-table-column label="操作">
        <el-button type="text">修改评论</el-button>
        <el-button type="text">关闭评论</el-button>
      </el-table-column>
    </el-table>
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
      list: []
    }
  },
  methods: {
    // formatter 格式化内容 Function(row可以得到这一行的内容, column, cellValue, index)
    formatter (row) {
      return row.comment_status ? '正常' : '关闭'
    },
    getComments () {
      this.$axios({
        url: '/articles',
        params: { response_type: 'comment' }
      }).then(res => {
        console.log(res)
        this.list = res.data.results
      })
    }
  },
  created () {
    this.getComments()
  }
}
</script>

<style>
</style>
