<template>
  <div id="login">
    <el-card class="box-card login-card">
      <el-input
        placeholder="请输入账户"
        prefix-icon="el-icon-user-solid"
        v-model="input2">
      </el-input>
      <el-input
        placeholder="请输入密码"
        prefix-icon="el-icon-s-goods"
        v-model="input2">
      </el-input>
    </el-card>
  </div>
</template>

<script>
export default {
  name: 'login',
  data () {
    return {
      input2: ''
    }
  }
}
</script>

<style lang="less" scoped>
#login {
  width: 100vw;
  height: 100vh;
  background-image: url("../../assets/images/luna.jpg");
  .login-card {
    width: 400px;
    height: 250px;
    margin: 0 auto;
  }
}
</style>
