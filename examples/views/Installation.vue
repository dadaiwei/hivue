<template>
  <div class="content-box">
    <h2 class="demo-title">安装</h2>

    <!-- 致谢 -->
    <h3 class="demo-table-title">致谢</h3>
    <div class="demo-tip">
      <p>该项目基于Vue.js开发</p>
      <p>
        <a href="https://cn.vuejs.org/" target="_blank">https://cn.vuejs.org/</a>
      </p>
    </div>

    <!-- 代码仓库 -->
    <h3 class="demo-table-title">
      代码仓库
      <i class="iconfont icon-github-fill" style="margin: 0 10px;"></i>
    </h3>
    <p class="demo-introduction">
      github代码仓库地址
      <a
        href="https://github.com/dadaiwei/hivue"
        target="_blank"
      >https://github.com/dadaiwei/hivue</a> 点个star支持一下吧~
    </p>

    <!-- NPM安装 -->
    <h3 class="demo-table-title">NPM安装</h3>
    <p class="demo-introduction">推荐使用 npm 的方式安装，它能更好地和 webpack 打包工具配合使用。</p>
    <p class="demo-introduction">
      <a
        href="https://www.npmjs.com/package/hivue"
        target="_blank"
      >https://www.npmjs.com/package/hivue</a>
    </p>
    <div class="demo-code-block">npm i hivue -S</div>

    <!-- 快速上手 -->
    <h3 class="demo-table-title">快速上手</h3>
    <p class="demo-introduction">你可以在 main.js 中引入整个 hivue。</p>
    <div class="demo-code-block">
      <p>import hivue from 'hivue'</p>
      <p style="margin-top:20px">Vue.use(hivue);</p>
    </div>

    <!-- 开始使用 -->
    <h3 class="demo-table-title">开始使用</h3>
    <p class="demo-introduction">至此，一个基于 Vue 安装了 hivue插件 的开发环境已经搭建完毕。各个组件的使用方法请参阅它们各自的文档。</p>
  </div>
</template>

<script>
export default {
  name: "Installation"
};
</script>

<style lang="scss" scoped>
</style>