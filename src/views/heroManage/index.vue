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
        <template slot-scope="scope">
          <img
            v-if="item.prop === 'images'"
            class="images"
            :src="localhostURL + scope.row[item.prop]"
            alt=""
          >
          <div v-else>{{ scope.row[item.prop] }}</div>
        </template>
      </el-table-column>
      <el-table-column
        label="操作"
        width="180px"
        align="center"
      >
        <template>
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
      <el-form :model="form" ref="form">
        <div class="uploadImg">
          <div class="poster">
            <i class="el-icon-plus" @click="onOpenFile" v-if="isShowUploadBtn"></i>
            <img :src="temporaryURL" alt="" v-else>
            <input
              type="file"
              ref="uploadImg"
              style="display: none"
              name="images"
              @change="onUploadImg"
            />
          </div>
          <div class="intro">
            <el-input
              type="textarea"
              placeholder="请输入简介内容"
              v-model="form.intro"
              resize="none"
              name="intro"
            >
            </el-input>
          </div>
        </div>
        <el-form-item label="昵称" :label-width="formLabelWidth">
          <el-input
            v-model="form.nickName"
            autocomplete="off"
            name="nickName"
          ></el-input>
        </el-form-item>
        <el-form-item label="用户名" :label-width="formLabelWidth">
          <el-input
            v-model="form.userName"
            autocomplete="off"
            name="userName"
          ></el-input>
        </el-form-item>
      </el-form>
      <div slot="footer" class="dialog-footer">
        <el-button @click="dialogFormVisible = false">取 消</el-button>
        <el-button type="primary" @click="onSubmit">确 定</el-button>
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
        { prop: 'intro', label: '简介', width: '200', align: '' }
      ],
      form: {
        intro: '',
        nickName: '',
        userName: '管理员'
      },
      formLabelWidth: '120px',
      dialogFormVisible: false,
      isShowUploadBtn: true,
      localhostURL: 'http://localhost:3000/',
      temporaryURL: ''
    }
  },
  created () {
    this.initData()
  },
  methods: {
    initData () {
      this.$store.dispatch('getHeroList').then(response => {
        if (response.data.code === 200) {
          this.heroListData = response.data.heroList
        }
      })
    },
    onAddHero () {
      this.temporaryURL = ''
      this.isShowUploadBtn = true
      this.dialogFormVisible = true
    },
    onOpenFile () {
      this.$refs.uploadImg.click()
    },
    onUploadImg (event) {
      const file = event.target.files[0]
      const url = URL.createObjectURL(file)
      this.temporaryURL = url
      this.isShowUploadBtn = false
    },
    onSubmit () {
      const formData = new FormData(this.$refs.form.$el)
      this.$store.dispatch('postAddHero', formData).then(response => {
        if (response.data.code === 200) {
          this.$message({
            type: 'success',
            message: '新增成功'
          })
          this.initData()
        }
      })
      this.dialogFormVisible = false
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
    height: 60px;
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
        border-radius: 10px;
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
