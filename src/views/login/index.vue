<template>
  <div id="login">
    <el-card class="box-card login-card">
      <p>皮肤商城后台管理系统</p>
      <el-input
        placeholder="请输入账户"
        prefix-icon="el-icon-user-solid"
        v-model="account">
      </el-input>
      <el-input
        show-password
        placeholder="请输入密码"
        prefix-icon="el-icon-s-goods"
        v-model="password">
      </el-input>
      <div class="captcha">
        <el-input
          placeholder="请输入验证码"
          prefix-icon="el-icon-chat-dot-square"
          v-model="captcha">
        </el-input>
        <img @click="onCaptcha" :src="captchaUrl" alt="">
      </div>
      <el-checkbox v-model="rememb">记住密码</el-checkbox>
      <el-button @click="onLogin" type="primary">登 录</el-button>
    </el-card>
  </div>
</template>

<script>
export default {
  name: 'login',
  data () {
    return {
      account: '123456',
      password: '123456',
      captcha: '',
      rememb: false,
      captchaUrl: ''
    }
  },
  created () {
    this.onCaptcha()
  },
  methods: {
    // 获取验证码；
    onCaptcha () {
      this.captchaUrl = `${process.env.VUE_APP_BASE_URL}/user/captcha?${Math.random()}`
    },

    // 登录：
    onLogin () {
      if (!this.account) {
        this.$tooltip('请填写用户名', 'warning')
        return
      } else if (!this.password) {
        this.$tooltip('请填写输入密码', 'warning')
        return
      } else if (!this.captcha) {
        this.$tooltip('请填写输入验证码', 'warning')
        return
      }
      this.$store.dispatch('userLogin', {
        username: this.account,
        password: this.password,
        captcha: this.captcha
      }).then(res => {
        if (res.code === 200) {
          this.$tooltip(res.message)
          this.$setLocalStorage('SUCCESS_TOKEN', res.data.SUCCESS_TOKEN)
          this.$router.push('/')
        }
      })
    }
  }
}
</script>

<style lang="less" scoped>
#login {
  width: 100vw;
  height: 100vh;
  background-image: url("../../assets/images/luna.jpg");
  /deep/.login-card {
    width: 400px;
    position: absolute;
    top: 50%;
    left: 40%;
    transform: translate(-50%, -50%);
    background: transparent;
    p {
      text-align: center;
      font-size: 18px;
      margin-top: 0;
      color: red;
    }
    .el-input {
      margin-bottom: 16px;
      .el-input__inner {
        background: transparent;
      }
    }
    .el-button {
      display: block;
      width: 100%;
      margin-top: 16px;
    }
    .captcha {
      .el-input {
        width: 200px;
      }
      img {
        width: 135px;
        height: 40px;
        margin-left: 15px;
        cursor: pointer;
        vertical-align: middle;
      }
    }
  }
}
</style>
