<template>
  <div class="header-tag">
    <el-tag
      v-for="tag in tags"
      :key="tag.name"
      closable
      size="medium"
      :type="tag.type"
      @close="onCloseTag(tag)"
    >
      {{tag.name}}
    </el-tag>
  </div>
</template>

<script>
export default {
  name: 'Tags',
  data () {
    return {
      tags: [
        { name: '标签一', type: '' },
        { name: '标签二', type: 'success' },
        { name: '标签三', type: 'info' },
        { name: '标签四', type: 'warning' },
        { name: '标签五', type: 'danger' }
      ]
    }
  },
  methods: {
    onCloseTag (key) {
      this.tags.splice(this.tags.indexOf(key), 1)
    }
  }
}
</script>

<style lang=less scoped>
  .header-tag {
    display: flex;
    align-items: center;
    min-height: 34px;
    padding-left: 22px;
    border-bottom: 0.5px solid #DDDDDD;
    .el-tag {
      margin-right: 5px;
    }
  }
</style>
