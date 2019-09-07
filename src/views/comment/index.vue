<template>
  <el-card>
    <!-- 插槽内容 => 标题 -->
    <bread-crumb slot="header">
      <!-- 面包屑的具名插槽 -->
      <template slot="title">评论列表</template>
    </bread-crumb>
    <el-table :data="list" style="font-size:18px">
      <el-table-column prop="title" label="标题" width="700"></el-table-column>
      <!-- formatter是el-table-column属性  格式化内容，return里写什么就显示什么 -->
      <el-table-column :formatter="formatter" prop="comment_status" label="评论状态"></el-table-column>
      <el-table-column prop="total_comment_count" label="总评论说"></el-table-column>
      <el-table-column prop="fans_comment_count" label="粉丝评论数"></el-table-column>
      <el-table-column label="操作">
        <!-- 通过  slot-scoped  obj可以获取到 row, column, $index 和 store（table 内部的状态管理）的数据 -->
        <template slot-scope="obj">
          <el-button type="text">修改</el-button>
          <el-button
            @click="openOrclose(obj.row)"
            :style="{color: obj.row.comment_status ? '#E6A23C' : '#409EFF'}"
            type="text"
          >{{obj.row.comment_status? "关闭评论":'打开评论'}}</el-button>
        </template>
      </el-table-column>
    </el-table>
    <el-row type="flex" justify="center" style="margin:10px 0">
      <!-- 分页组件  current-page当前页码   page-size每页显示多少条  total总数 -->
      <el-pagination
        @current-change="changePage"
        :current-page="page.page"
        :page-size="page.pageSize"
        :total="page.total"
        background
        layout="prev, pager, next"
      ></el-pagination>
    </el-row>
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
      list: [],
      page: {
        page: 1, // 当前显示页码
        pageSize: 10, // 每页条数
        total: 0 // 总评论数
      }
    }
  },
  methods: {
    changePage (newPage) {
      this.page.page = newPage // 给当前页码更新最新值
      this.getComments()
    },
    openOrclose (row) {
      // 接收点击事件传过来的row参数
      let mess = row.comment_status ? '关闭' : '打开'
      this.$confirm('你是否要' + mess + '评论', '提示').then(() => {
        // console.log(row.id);
        this.$axios({
          method: 'put',
          url: '/comments/status',
          // jsonBigInt传递过来的id不是字符串   需要转成字符串
          params: { article_id: row.id.toString() }, // 传递articleId参数
          data: { allow_comment: !row.comment_status } // 取反 因为当前如果是true  只能改成false , 如果是false 改成true
        }).then(res => {
          this.getComments() // 成功之后 重新调用 拉取评论数据的方法
        })
      })
    },
    // formatter 格式化内容 Function(row可以得到这一行的内容, column, cellValue, index)
    formatter (row) {
      return row.comment_status ? '正常' : '关闭'
    },
    getComments () {
      this.$axios({
        url: '/articles',
        params: {
          response_type: 'comment',
          page: this.page.page,
          per_page: this.page.pageSize
        }
      }).then(res => {
        console.log(res)
        this.list = res.data.results
        this.page.total = res.data.total_count
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
