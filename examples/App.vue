<template>
  <div id="app">
    <h-button>按钮</h-button>
    <h-progress :show-text="true" :ratio="0.4"></h-progress>
    <div>
      <span class="iconfont icon-subnode"></span>
    </div>
  </div>
</template>

<script>
export default {
  name: 'app'
}
</script>

<style>
#app {
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}
</style>
