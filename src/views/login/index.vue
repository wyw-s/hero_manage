<template>
  <div id="login">
    <el-card class="box-card">
      <el-input
        placeholder="请输入内容"
        prefix-icon="el-icon-search"
        v-model="input2">
      </el-input>
      <el-input
        placeholder="请输入内容"
        prefix-icon="el-icon-search"
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

<style scoped>
#login {
  width: 100%;
  height: 100%;
  background-color: chartreuse;
}
</style>
