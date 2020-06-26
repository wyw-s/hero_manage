<template>
  <el-container id=layout direction="horizontal">
    <el-aside :width="unfoldOrClose ? 65 + 'px' : 200 + 'px'">
      <div class="aside-logo" :style="{width: unfoldOrClose ? 65 + 'px' : 200 + 'px'}">
        <a href="#">
          <img src="@/assets/images/logo.png"/>
        </a>
      </div>
      <el-menu
        :default-openeds="['3']"
        background-color="#304156"
        text-color="#fff"
        active-text-color="#ffd04b"
        :collapse="unfoldOrClose"
        collapse-transition
      >
        <el-menu-item index="2">
          <i class="el-icon-menu"></i>
          <span slot="title">首页</span>
        </el-menu-item>
        <el-submenu index="2" background-color="#fff">
          <template slot="title">
            <i class="el-icon-menu"></i>
            <span slot="title">英雄列表</span>
          </template>
          <el-menu-item index="2-1">选项1</el-menu-item>
          <el-menu-item index="2-2">选项2</el-menu-item>
        </el-submenu>
      </el-menu>
    </el-aside>
    <el-container>
      <el-header height="40px">
        <div class="header">
          <i :class="unfoldOrClose ? 'el-icon-s-fold' : 'el-icon-s-unfold'" @click="onUnfoldOrClose"></i>
          <span>退出登录</span>
        </div>
      </el-header>
      <el-main>
        <!--<el-table-->
        <!--  :data="tableData"-->
        <!--  border-->
        <!--  style="width: 100%">-->
        <!--  <el-table-column-->
        <!--    prop="date"-->
        <!--    label="日期"-->
        <!--    width="180">-->
        <!--  </el-table-column>-->
        <!--  <el-table-column-->
        <!--    prop="name"-->
        <!--    label="姓名"-->
        <!--    width="180">-->
        <!--  </el-table-column>-->
        <!--  <el-table-column-->
        <!--    prop="address"-->
        <!--    label="地址">-->
        <!--  </el-table-column>-->
        <!--</el-table>-->
      </el-main>
    </el-container>
  </el-container>
</template>

<script>
export default {
  name: 'index',
  data () {
    return {
      activeIndex: '1',
      activeIndex2: '1',
      unfoldOrClose: true
    }
  },
  methods: {
    onUnfoldOrClose () {
      console.log('===')
      this.unfoldOrClose = !this.unfoldOrClose
    }
  }
}
</script>

<style lang=less scoped>
  #layout {
    height: 100%;
    .el-aside {
      height: 100vh;
    }
    .aside-logo {
      height: 50px;
      width: 100%;
      text-align: center;
      background-color: #050505;
      a {
        width: 90%;
        height: 90%;
        display: inline-block;
        margin-top: 2.5px;
        img {
          width: 100%;
          height: 100%;
        }
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
        height: 40px;
        display: flex;
        justify-content: space-between;
        align-items: center;
        i {
          font-size: 20px;
        }
      }
    }

  }
</style>
