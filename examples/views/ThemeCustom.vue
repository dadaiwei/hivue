<template>
  <div class="content-box">
    <h2 class="demo-title">定制主题</h2>
    <p class="demo-introduction">hivue组件库支持主题定制功能，允许用户自定义主题。</p>
    <h3 class="demo-title">hivue的样式变量</h3>
    <p class="demo-introduction">hivue使用了scss作为开发语言，并定义了一系列全局/组件的变量，你可以根据需求进行调整。</p>
    <p class="demo-introduction">
      以下是一些最常用的通用变量，所有样式变量可以在
      <a
        target="_blank"
        href="https://github.com/dadaiwei/hivue/blob/master/packages/theme/common/_var.scss"
      >这里</a> 找到。
    </p>
    <div class="demo-code-block">
      <p>$color-primary: #1890ff; // 主色</p>
      <p>$color-info: #5bc0de; // 信息色</p>
      <p>$color-success: #5cb85c; // 成功色</p>
      <p>$color-warning: #f0ad4e; // 警告色</p>
      <p>$color-danger: #d9534f; // 危险色</p>
      <p>$color-active: #40a9ff; // 激活色</p>
      <p>$text-primary-color: #333333; // 文本色</p>
      <p>$component-bg: #ffffff; // 组件背景色</p>
    </div>
    <h2 class="demo-title">定制方式</h2>
    <h3 class="demo-sub-title">配置scss文件</h3>
    <p class="demo-introduction">建立一个单独的 scss 变量文件，引入这个文件覆盖 var.scss 里的变量。</p>
    <div class="demo-code-block">
      <p>@import 'hivue/packages/theme/index.scss'</p>
      <p>@import 'your-theme-file.scss'</p>
    </div>
  </div>
</template>

<script>
export default {
  name: "ThemeCustom",
  data() {
    return {};
  }
};
</script>

<style lang="scss" scoped>
</style>