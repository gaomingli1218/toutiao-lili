<template>
  <div class="login">
    <el-card class="box-card">
      <img src="../../assets/imgs/logo_index.png" alt="黑马头条" />
      <el-form :model="formData" :rules="rules" ref="formData">
        <el-form-item prop="mobile">
          <el-input v-model="formData.mobile" placeholder="请输入手机号"></el-input>
        </el-form-item>
        <el-form-item prop="code">
          <el-input v-model="formData.code" placeholder="请输入验证码" style="width:250px"></el-input>
          <el-button style="float:right">发送验证码</el-button>
        </el-form-item>
        <el-form-item prop="check">
          <el-checkbox v-model="formData.check">我已阅读并同意用户协议和隐私条款</el-checkbox>
        </el-form-item>
        <el-form-item>
          <el-button type="primary" style="width:100%" @click="submit">登录</el-button>
        </el-form-item>
      </el-form>
    </el-card>
  </div>
</template>

<script>
export default {
  data () {
    //   自定义勾选协议校验规则
    let validator = (rule, value, callback) => {
      if (value) {
        callback()
      } else {
        callback(new Error('请勾选协议'))
      }
    }
    return {
      formData: {
        //   表单属性
        mobile: '',
        code: '',
        check: false
      },
      //   表单验证规则
      rules: {
        mobile: [
          {
            required: true,
            message: '手机号不能为空'
          },
          {
            pattern: /^1[3456789]\d{9}$/,
            message: '手机号长度为11个字符'
          }
        ],
        code: [
          {
            required: true,
            message: '验证码不能为空'
          },
          {
            pattern: /^\d{6}$/,
            message: '验证码为6位'
          }
        ],
        check: [
          {
            validator
          }
        ]
      }
    }
  },
  methods: {
    submit () {
      // 通过el-form组件的validata方法 校验整个表单的数据
      // 传入一个回调函数 isOK为true 说明所有的校验规则都成功了
      // 如果为false 说明有错误
      this.$refs.formData.validate(isOk => {
        if (isOk) {
          this.$axios({
            url: '/authorizations',
            method: 'post',
            data: this.formData
          })
            .then(res => {
              // console.log(res.data.data.token);
              // console.log(res.data);
              // 放到前端的缓存中
              window.localStorage.setItem('user-token', res.data.token)
              // 编程式导航
              this.$router.push('/') // 登录成功 跳转到home页
            })
            .catch(err => {
              console.log(err)
              this.$message({
                message: '手机号或验证码错误',
                type: 'warning'
              })
            })
        }
      })
    }
  }
}
</script>

<style lang='less'>
.login {
  width: 100%;
  height: 100vh;
  background: url("../../assets/imgs/login_bg.jpg");
  background-size: cover;
  display: flex;
  justify-content: center;
  align-items: center;
  .box-card {
    width: 450px;
    height: 350px;
    img {
      height: 40px;
      margin: 10px 0 20px 100px;
    }
  }
}
</style>
