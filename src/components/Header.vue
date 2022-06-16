<template>
  <div class="header_contauner">
    <div class="header_back">
      <div class="header_back" @click="goBack" v-show="isBack">
        <svg-icon iconClass="close" class="icon_back" v-show="isShow"/>
        <svg-icon iconClass="return" class="icon_back" v-show="!isShow" />
      </div>
      </div>
    <div class="header_title">
      {{ title }}
    </div>
    <div class="header_share"></div>
  </div>
</template>

<script>
export default {
  name: 'Header',
  props: {},
  data () {
    return {
      title: '',
      isShow: true,
      isBack: true
    }
  },
  mounted () {
    // 异步渲染，刷新后标题正确显示
    this.$nextTick(() => {
      this.title = document.title
    })
  },
  methods: {
    goBack () {
      this.$emit('go-back')
    },
    share () {
      this.$emit('share-msg')
    }
  },
  watch: {
    $route: {
      handler (newval, oldval) {
        // 监听变换标题
        if (this.$route.meta.title) {
          this.title = this.$route.meta.title
        } else {
          this.title = document.title
        }
        this.path = this.$route.path
        if (this.path === '/login') {
          this.isBack = false
        } else if (this.path === '/index') {
          this.isBack = true
          this.isShow = true
        } else {
          this.isBack = true
          this.isShow = false
        }
      },
      immediate: true
    }
  }
}
</script>

<style scoped lang="scss">
.header_contauner {
  position: fixed;
  top: 0;
  z-index: 11;
  min-width: 100%;
  height: 0.88rem;
  padding: 0 0.34rem;
  background-color: #fff;
  // background: #F5F5F5;
  display: flex;
  justify-content: space-between;
  box-sizing: border-box;
}
.header_back {
   display: flex;
   flex: 0.3;
   align-items: center;
  .icon_back{
    display: inline-block;
    width: 0.2rem;
    height: 0.2rem;
    background-position: center center;
    background-size: 0.1rem 0.18rem;
    background-repeat: no-repeat;
  }
}
.header_title {
  flex:1;
  font-family: "PingFang-SC-Medium";
  font-size: 0.32rem;
  color: #333333;
  letter-spacing: 0.38px;
  line-height: 0.88rem;
  text-align: center;
}

.header_share {
  flex: 0.3;
  display: flex;
  align-items: center;
  justify-content: flex-end;
  font-size: 0.32rem;
}
</style>
