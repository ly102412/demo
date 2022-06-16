<template>
  <div class="app_wrapper">
    <!-- <component :is="header" @go-back="goBack"></component> -->
    <router-view></router-view>
  </div>
</template>

<script>
export default {
  data () {
    return {
    }
  },
  mounted () {
  },
  methods: {
    // 后退/关闭
    goBack () {
      if (this.$route.path === '/index') {
        window.open('about:blank', '_top').close()
      } else {
        this.$router.go(-1)
      }
    }
  },
  computed: {
    header () {
      return resolve => require(['@/components/Header'], resolve)
    }
  }
}
</script>

<style scoped lang="scss">
.app_wrapper {
  height: 100%;
  box-sizing: border-box;
  background: #F5F5F5;
}
</style>
