
<!-- vue 单文件组件-->
<template>
  <div id="app">
    <!-- <img src="./assets/logo.png"><br> -->
    <!-- <router-link to="/demo">demo页面</router-link>
    <router-link to="/demo2">demo2123页面</router-link> -->
    <!--显示的是当前路由地址显示的内容-->
    <router-view/>
  </div>
</template>

<script>
export default {
  name: 'App'
}
</script>

<style>
#app {
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
}
</style>
