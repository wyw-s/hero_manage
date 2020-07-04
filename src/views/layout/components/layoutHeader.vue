<template>
  <el-header height="50px">
    <div class="header">
      <div class="header-left">
        <i :class="unfoldOrClose ? 'el-icon-s-unfold' : 'el-icon-s-fold'" @click="onUnfoldOrClose"></i>
        <el-breadcrumb separator="/">
          <el-breadcrumb-item :to="{ path: '/' }">首页</el-breadcrumb-item>
          <el-breadcrumb-item>活动管理</el-breadcrumb-item>
          <el-breadcrumb-item>活动列表</el-breadcrumb-item>
          <el-breadcrumb-item>活动详情</el-breadcrumb-item>
        </el-breadcrumb>
      </div>
      <span>退出登录</span>
    </div>
  </el-header>
</template>

<script>
export default {
  name: 'layoutHeader',
  data () {
    return {
    }
  },
  computed: {
    unfoldOrClose: function () {
      return this.$store.state.layout.unfoldOrClose
    }
  },

  methods: {
    onUnfoldOrClose () {
      this.$store.commit('unfoldOrClose', this.unfoldOrClose)
    }
  }
}
</script>

<style lang=less scoped>
  .el-header {
    border-bottom: 0.5px solid #cccccc;
    .header {
      height: 50px;
      display: flex;
      align-items: center;
      justify-content: space-between;
      .header-left {
        display: flex;
        .el-breadcrumb {
          line-height: initial;
        }
        i {
          font-size: 20px;
          cursor: pointer;
          margin-right: 20px;
        }
      }
    }
  }
</style>
