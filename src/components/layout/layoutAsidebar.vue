<template>
  <el-aside style="width: inherit">
    <div class="aside-logo">
      <a href="#" ref="logo"></a>
    </div>
    <el-menu
      class="el-menu-vertical-demo"
      @open="onSideOpen"
      @close="onSideClose"
      @select="onSelect"
      :collapse="unfoldOrClose"
      background-color="#545c64"
      text-color="#fff"
      active-text-color="#ffd04b"
      default-active="2-1"
    >
      <template v-for="item in menuArr">
        <el-menu-item v-if="!item.children" :index="item.id" :key="item.id">
          <i class="el-icon-menu"></i>
          <span slot="title">{{ item.menuName }}</span>
        </el-menu-item>
        <el-submenu v-else :index="item.id" :key="item.id">
          <template slot="title">
            <i class="el-icon-location"></i>
            <span slot="title">{{ item.menuName }}</span>
          </template>
          <el-menu-item
            v-for="twoitem in item.children"
            :key="twoitem.id"
            :index="twoitem.id"
            style="padding-left: 49px">
            {{ twoitem.menuName }}
          </el-menu-item>
        </el-submenu>
      </template>
    </el-menu>
  </el-aside>
</template>

<script>
export default {
  name: 'asidebar',
  data () {
    return {
      menuArr: [
        { id: '1', menuName: '首页', url: '', children: null },
        {
          id: '2',
          menuName: '英雄管理',
          children: [
            { id: '2-1', menuName: '英雄列表', url: 'heroList', children: null },
            { id: '2-2', menuName: '新品上市', url: '', children: null }
          ]
        },
        { id: '3', menuName: '数据管理', url: '', children: null }
      ]
    }
  },
  computed: {
    unfoldOrClose: function () {
      return this.$store.state.layout.unfoldOrClose
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
    onSelect (index) {
      let URL = ''
      this.menuArr.forEach(item => {
        if (item.id === index) {
          URL = item.url
          return
        }
        if (item.children) {
          for (let i = 0; i < item.children.length; i++) {
            if (item.children[i].id === index) {
              URL = item.children[i].url
              return
            }
          }
        }
      })
      this.$router.push({ name: URL })
    },
    onSideOpen (key, keyPath) {
      console.log(key, keyPath)
    },
    onSideClose (key, keyPath) {
      console.log(key, keyPath)
    }
  }
}
</script>

<style lang=less scoped>
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
    border-right: 0;
  }
  .el-menu-vertical-demo:not(.el-menu--collapse) {
    width: 200px;
    min-height: calc(100vh - 50px);
  }
  .el-submenu {
    .el-menu-item {
      background: #000000 !important;
    }
  }
  .el-menu-item.is-active {
    background: #ff6a001f !important;
  }
</style>
