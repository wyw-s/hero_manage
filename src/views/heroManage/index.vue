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
          <el-image
            v-if="item.prop === 'images'"
            style="width: 80px; height: 80px"
            :src="baseUrl + scope.row[item.prop]"
            :preview-src-list="[baseUrl + scope.row[item.prop]]">
          </el-image>
          <div v-else>{{ scope.row[item.prop] }}</div>
        </template>
      </el-table-column>
      <el-table-column
        label="操作"
        width="180px"
        align="center"
      >
        <template slot-scope="scope">
          <el-button
            type="danger"
            size="small"
            icon="el-icon-delete"
            @click="onDelete(scope.row)"
          ></el-button>
        </template>
      </el-table-column>

    </el-table>

    <!--新增英雄弹框-->
    <el-dialog
      title="新增英雄"
      custom-class="addHeroStyle"
      :visible.sync="dialogFormVisible"
      center
      width="500px"
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
              accept="image/*"
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
      temporaryURL: '',
      newUrlBase64: '',
      fileName: '',
      baseUrl: `${process.env.VUE_APP_BASE_URL}/`
    }
  },
  created () {
    this.initData()
  },
  methods: {
    initData () {
      this.$store.dispatch('getHeroList').then(res => {
        if (res.code === 200) {
          this.heroListData = res.heroList
        }
      })
    },

    // 添加英雄
    onAddHero () {
      this.temporaryURL = ''
      this.form = {
        intro: '',
        nickName: '',
        userName: '管理员'
      }
      this.isShowUploadBtn = true
      this.dialogFormVisible = true
    },
    onOpenFile () {
      this.$refs.uploadImg.click()
    },
    onUploadImg (event) {
      const this_ = this
      const file = event.target.files[0]
      if (file.type.includes('image')) {
        // 1、创建img和fileReader的实例
        const img = new Image()
        const reader = new FileReader()// 读取文件资源
        reader.readAsDataURL(file)
        // 文件base64化
        reader.onload = function (e) {
          img.src = e.target.result
        }
        // base64地址图片加载完毕后
        img.onload = function () {
          // 获取图片实际宽高
          const { width: originWidth, height: originHeight } = img

          // 如果只是想压缩图片质量而不是大小，那么可以不用限制宽高
          // 最大尺寸限制，设置宽高来实现图片压缩程度
          // const maxWidth = 100
          // const maxHeight = 60
          // 目标尺寸
          // let targetWidth = originWidth
          // let targetHeight = originHeight
          // 图片尺寸超过100x60的限制
          // if (originWidth > maxWidth || originHeight > maxHeight) {
          //   if (originWidth / originHeight > maxWidth / maxHeight) {
          //     // 按照宽度限定尺寸
          //     targetWidth = maxWidth
          //     targetHeight = Math.round(maxWidth * (originHeight / originWidth))
          //   } else {
          //     // 按照高度限定尺寸
          //     targetHeight = maxHeight
          //     targetWidth = Math.round(maxHeight * (originWidth / originHeight))
          //   }
          // }

          // 3、canvas对图片进行缩放
          // 缩放图片需要的canvas
          var canvas = document.createElement('canvas')
          var context = canvas.getContext('2d')
          // canvas.width = targetWidth
          // canvas.height = targetHeight
          // 保持图片原有宽高。
          canvas.width = originWidth
          canvas.height = originHeight
          // 清除画布
          context.clearRect(0, 0, originWidth, originHeight)
          // 图片压缩(重新绘制画布)
          context.drawImage(img, 0, 0, originWidth, originHeight)
          /* 第一个参数是创建的img对象；第二个参数是左上角坐标，后面两个是画布区域宽高 */
          // 压缩后的图片base64
          /* canvas.toDataURL(mimeType, qualityArgument)
           *  mimeType 默认值是'image/jpeg';
           *  qualityArgument表示导出的图片质量，只要导出为jpg和webp格式的时候此参数才有效果，默认值是0.92
           */
          // 4、base64 格式(处理方式一)
          this_.newUrlBase64 = canvas.toDataURL('image/jpeg', 0.7)
          this_.fileName = file.name
          this_.temporaryURL = URL.createObjectURL(this_.dataURLtoFile(this_.newUrlBase64, file.name))
          this_.isShowUploadBtn = false

          // (处理方式二)
          // 回调函数中可以得到转化后的blob文件，type为要转成的图片类型，默认png。
          // encoderOptions为当设置的图片格式为 image/jpeg 或者 image/webp 时用来指定图片展示质量。
          // canvas.toBlob((val) => {
          //   const url = URL.createObjectURL(val)
          //   this_.temporaryURL = url
          //   this_.isShowUploadBtn = false
          // }, 'image/jpeg', 0.92)
        }
      } else {
        this.$tooltip('请上传图片', 'warning')
      }
    },

    // 将base64转换为文件
    dataURLtoFile (dataurl, filename) {
      const arr = dataurl.split(',')
      const mime = arr[0].match(/:(.*?);/)[1]
      const bstr = atob(arr[1])
      let n = bstr.length
      var u8arr = new Uint8Array(n)
      while (n--) {
        u8arr[n] = bstr.charCodeAt(n)
      }
      return new File([u8arr], filename, { type: mime })
    },

    // 新增英雄
    onSubmit () {
      if (!this.newUrlBase64) {
        this.$tooltip('请上传图片', 'warning')
        return
      }
      const formData = new FormData()
      formData.append('images', this.dataURLtoFile(this.newUrlBase64, this.fileName))
      formData.append('intro', this.form.intro)
      formData.append('nickName', this.form.nickName)
      formData.append('userName', this.form.userName)
      this.$store.dispatch('postAddHero', formData).then(res => {
        if (res.code === 200) {
          this.$tooltip('新增成功')
          this.newUrlBase64 = ''
          this.initData()
        }
      })
      this.dialogFormVisible = false
    },

    // 删除英雄
    onDelete (val) {
      this.$store.dispatch('postDeleteHero', {
        id: val.Id,
        images: val.images
      }).then(res => {
        if (res.code === 200) {
          this.$tooltip('删除成功')
          this.initData()
        }
      })
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
