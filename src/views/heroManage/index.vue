<template>
  <div id="heroList">
    <!--<div></div>-->
    <el-table
      :data="heroListData"
      style="width: 100%"
    >
      <el-table-column
        v-for="(item, index) in heroListTitle"
        :key="index"
        :prop="item.prop"
        :label="item.label"
        :width="item.width"
        :align="item.align"
        >
          <template v-if="item.prop === 'images'">
            <img class="images" src="@/assets/images/1526091539813.jpg" alt="">
          </template>
          <template v-if="item.prop === 'operate'">
            <el-button type="danger" size="small" icon="el-icon-delete"></el-button>
          </template>
        </el-table-column>
    </el-table>
  </div>
</template>

<script>
export default {
  name: 'index',
  data () {
    return {
      heroListData: [],
      heroListTitle: [
        { prop: 'images', label: '图片', width: '200', align: 'center' },
        { prop: 'nickName', label: '昵称', width: '200', align: '' },
        { prop: 'userName', label: '用户名', width: '', align: '' },
        { prop: 'date', label: '日期', width: '200', align: '' },
        { prop: 'operate', label: '操作', width: '180', align: 'center' }
      ]
    }
  }
}
</script>

<style lang="less" scoped>
#heroList {
  /deep/.el-table__body {
    .el-table__row {
      td {
        padding: 6px 0;
      }
    }
  }
  .images {
    width: 100px;
    vertical-align: middle;
  }
}
</style>
