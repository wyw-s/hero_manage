<template>
  <div id="heroList">
    <div class="addHero">
      <el-button
        type="primary"
        size="small"
        @click="onAddHero"
      >新增英雄</el-button>
    </div>

    <!--英雄列表-->
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

    <!--新增英雄弹框-->
    <el-dialog
      title="新增英雄"
      custom-class="addHeroStyle"
      :visible.sync="dialogFormVisible"
      center
      width="40%"
    >
      <div class="uploadImg">
        <div class="poster">
          <i class="el-icon-plus" @click="onOpenFile" v-if="isShowUploadBtn"></i>
          <img src="" alt="" v-else>
          <input type="file" ref="uploadImg" style="display: none"/>
        </div>
        <div class="intro">
          <el-input
            type="textarea"
            placeholder="请输入简介内容"
            v-model="form.textarea"
            resize="none"
          >
          </el-input>
        </div>
      </div>
      <el-form :model="form">
        <el-form-item label="昵称" :label-width="formLabelWidth">
          <el-input v-model="form.nickName" autocomplete="off"></el-input>
        </el-form-item>
        <el-form-item label="用户名" :label-width="formLabelWidth">
          <el-input v-model="form.userName" autocomplete="off"></el-input>
        </el-form-item>
      </el-form>
      <div slot="footer" class="dialog-footer">
        <el-button @click="dialogFormVisible = false">取 消</el-button>
        <el-button type="primary" @click="dialogFormVisible = false">确 定</el-button>
      </div>
    </el-dialog>
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
      ],
      form: {
        nickName: '',
        userName: '',
        textarea: ''
      },
      formLabelWidth: '120px',
      dialogFormVisible: false,
      isShowUploadBtn: true
    }
  },
  created () {
    this.initData()
  },
  methods: {
    initData () {
      this.$store.dispatch('getHeroList').then(response => {
        console.log(response)
      })
    },
    onAddHero () {
      this.dialogFormVisible = true
      // const params = {
      //   images: '',
      //   nickName: '',
      //   userName: ''
      // }
      // this.$store.dispatch('postAddHero', params).then(response => {
      //   console.log(response)
      // })
    },
    onOpenFile () {
      this.$refs.uploadImg.click()
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
  .uploadImg {
    display: flex;
    width: 100%;
    height: 100px;
    .poster {
      margin-right: 16px;
      i {
        position: relative;
        display: inline-block;
        width: 100px;
        height: 100px;
        border: 1px dashed #DDDDDD;
        border-radius: 10px;
        cursor: pointer;
      }
      i:before {
        content: "\e6d9";
        font-size: 24px;
        position: absolute;
        top: 50%;
        left: 50%;
        transform: translate(-50%, -50%);
      }
      img {
        width: 100px;
        height: 100px;
      }
    }
    .intro {
      width: 100%;
      height: 100%;
      /deep/.el-textarea {
        .el-textarea__inner {
          height: 100px;
        }
      }
    }

  }
  /deep/.el-form .el-form-item {
    margin: 16px 0;
    .el-form-item__label {
      padding: 0 20px 0 0;
    }
  }

  /deep/.addHeroStyle {
    .el-dialog__body {
      padding: 0 25px;
    }
  }
}
</style>
