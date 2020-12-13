<template>
  <div style="margin-top: 200px">
    <div class="w-search">
      <div class="w-input">
        <input
          class="w-input__inner"
          @focus="onFocus"
          @blur="onBlur"
        />
      </div>
      <transition name="el-zoom-in-top">
        <div class="w-select" v-show="visible">
          <div style="overflow: hidden">
            <div style="height: 100%;max-height: 270px;overflow: scroll;margin-bottom: -17px;
    margin-right: -17px;">
              <ul>
                <li v-for="i in 9" :key="i"><span>你哦啊</span></li>
              </ul>
            </div>
          </div>
        </div>
      </transition>
    </div>
  </div>
</template>

<script>
export default {
  name: 'index',
  data () {
    return {
      visible: false
    }
  },
  methods: {
    onFocus () {
      this.visible = true
      console.log('==')
    },
    onBlur () {
      this.visible = false
    }
  }
}
</script>

<style scoped lang=less>
.w-search {
  margin: 0 auto;
  width: 300px;
  position: relative;
  .w-input__inner {
    background-color: #FFFFFF;
    border-radius: 4px;
    border: 1px solid #DCDFE6;
    box-sizing: border-box;
    color: #606266;
    display: inline-block;
    font-size: inherit;
    height: 32px;
    line-height: 32px;
    outline: none;
    padding: 0 15px;
    width: 100%;
  }
  .w-select {
    position: absolute;
    min-width: 100%;
    top: 30px;
    left: 0px;
    z-index: 2002;
    border: solid 1px #E4E7ED;
    border-radius: 4px;
    background-color: #FFFFFF;
    box-shadow: 0 2px 12px 0 rgba(0, 0, 0, 0.1);
    box-sizing: border-box;
    margin: 5px 0;
    ul {
      padding: 0;
      li {
        font-size: 14px;
        padding: 0 20px;
        position: relative;
        white-space: nowrap;
        overflow: hidden;
        text-overflow: ellipsis;
        color: #606266;
        height: 34px;
        line-height: 34px;
        box-sizing: border-box;
        cursor: pointer;
        &:hover {
          background-color: #F5F7FA;
        }
      }
    }
  }
  .el-zoom-in-top-enter-active,
  .el-zoom-in-top-leave-active {
    opacity: 1;
    transform: scaleY(1);
    transition: transform 300ms cubic-bezier(0.23, 1, 0.32, 1), opacity 300ms cubic-bezier(0.23, 1, 0.32, 1);
    transform-origin: center top;
  }
  .el-zoom-in-top-enter,
  .el-zoom-in-top-leave-active {
    opacity: 0;
    transform: scaleY(0);
  }
}
</style>
