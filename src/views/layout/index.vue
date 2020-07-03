<template>
  <el-container id=layout direction="horizontal">
    <el-aside style="width: inherit">
      <div class="aside-logo">
        <a href="#" ref="logo"></a>
      </div>
      <el-menu
        class="el-menu-vertical-demo"
        @open="handleOpen"
        @close="handleClose"
        :collapse="unfoldOrClose"
        background-color="#545c64"
        text-color="#fff"
        active-text-color="#ffd04b"
      >
        <el-menu-item index="1">
          <i class="el-icon-menu"></i>
          <span slot="title">首页</span>
        </el-menu-item>
        <el-submenu index="2">
          <template slot="title">
            <i class="el-icon-location"></i>
            <span slot="title">英雄管理</span>
          </template>
          <el-menu-item index="2-1" style="padding-left: 49px">英雄列表</el-menu-item>
        </el-submenu>
      </el-menu>
    </el-aside>
    <el-container>
      <el-header height="50px">
        <div class="header">
          <i :class="unfoldOrClose ? 'el-icon-s-unfold' : 'el-icon-s-fold'" @click="onUnfoldOrClose"></i>
          <span>退出登录</span>
        </div>
      </el-header>
      <el-main>
      </el-main>
    </el-container>
  </el-container>
</template>

<script>
export default {
  name: 'layout',
  data () {
    return {
      activeIndex: '1',
      activeIndex2: '1',
      unfoldOrClose: true
    }
  },
  watch: {
    unfoldOrClose (newVal) {
      if (newVal) {
        this.$refs.logo.style.backgroundPositionX = '4px'
      } else {
        this.$refs.logo.style.backgroundPositionX = 0
      }
    }
  },
  methods: {
    onUnfoldOrClose () {
      this.unfoldOrClose = !this.unfoldOrClose
    },
    handleOpen (key, keyPath) {
      console.log(key, keyPath)
    },
    handleClose (key, keyPath) {
      console.log(key, keyPath)
    }
  }
}
</script>

<style lang=less scoped>
  #layout {
    height: 100%;
    .aside-logo {
      height: 50px;
      text-align: center;
      background-color: #050505;
      a {
        width: 100%;
        height: 100%;
        display: inline-block;
        transition: all 300ms;
        background: url("../../assets/images/logo.png") no-repeat;
        background-size: 200px 96%;
        background-position-x: 4px;
      }
    }
    .aside-logo + .el-menu {
      height: calc(100vh - 50px);
      overflow-y: auto;
      overflow-x: hidden;
    }
    .el-header {
      border-bottom: 1px solid #cccccc;
      .header {
        height: 50px;
        display: flex;
        align-items: center;
        justify-content: space-between;
        i {
          font-size: 20px;
          cursor: pointer;
        }
      }
    }
  }
  .el-menu-vertical-demo:not(.el-menu--collapse) {
    width: 200px;
    min-height: calc(100vh - 50px);
  }
</style>
