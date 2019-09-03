<template>
  <div class="header">
    <el-row type="flex" justify="space-between">
      <el-col :span="7">
        <i class="el-icon-s-fold icon"></i>
        <span>江苏传智播客教育科技股份有限公司</span>
      </el-col>
      <el-col :span="4">
        <!-- 属性不给:就相当于字符串 图片是动态更新的-->
        <!-- 不确定图片是否一定会使用=> 图片不会自动转成base64 -->
        <img :src="userInfo.photo? userInfo.photo : defaultImg" alt class="img" />
        <el-dropdown trigger="click" @command="handleCommand">
          <span class="el-dropdown-link" style="font-size:18px">
            {{userInfo.name}}
            <i class="el-icon-arrow-down el-icon--right"></i>
          </span>
          <el-dropdown-menu slot="dropdown">
            <el-dropdown-item command="message">个人信息</el-dropdown-item>
            <el-dropdown-item command="git">git地址</el-dropdown-item>
            <el-dropdown-item command="quit">退出</el-dropdown-item>
          </el-dropdown-menu>
        </el-dropdown>
      </el-col>
    </el-row>
  </div>
</template>

<script>
export default {
  data () {
    return {
      userInfo: {},
      // vue中 给img图片的化 ,vue会将图片转义成base64位的字符串
      defaultImg: require('../../assets/imgs/avatar.jpg')
    }
  },
  methods: {
    getuserInfo () {
      this.$axios({
        url: '/user/profile'
        // 在Authorization 请求头中携带的token，格式为"Bearer "拼接上token，注意Bearer后有一个空格
      }).then(res => {
        this.userInfo = res.data
      })
    },
    handleCommand (command) {
      //   console.log(command);
      if (command === 'account') {
        // 账户信息
      } else if (command === 'git') {
        window.location.href = 'https://github.com/gaomingli1218/toutiao-lili'
      } else {
        this.$router.push('/login')
      }
    }
  },
  created () {
    this.getuserInfo()
  }
}
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
    width: 40px;
    height: 40px;
    border-radius: 50%;
    vertical-align: middle;
    margin-right: 10px;
  }
}
</style>
