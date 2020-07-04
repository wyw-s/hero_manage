<template>
  <el-container id=layout direction="horizontal">
    <!--侧栏目录-->
    <layout-asidebar></layout-asidebar>
    <el-container>
      <!--头部-->
      <layout-header></layout-header>
      <!--tag页-->
      <layout-tags></layout-tags>
      <!--内容-->
      <el-main>
        <!--路由-->
        <router-view></router-view>
      </el-main>
    </el-container>
  </el-container>
</template>

<script>
import layoutHeader from './components/layoutHeader'
import layoutAsidebar from './components/layoutAsidebar'
import layoutTags from './components/layoutTags'
export default {
  name: 'layout',
  components: {
    layoutAsidebar,
    layoutHeader,
    layoutTags
  },
  data () {
    return {}
  }
}
</script>

<style lang=less scoped>
  #layout {
    height: 100%;
    .el-container {
      display: flex;
      flex-direction: column;
      .el-main {
        height: 100vh;
      }
    }
  }
</style>
