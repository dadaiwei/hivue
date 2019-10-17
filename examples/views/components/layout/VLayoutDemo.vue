<template>
  <div class="content-box">
    <h2 class="demo-title">Layout布局</h2>
    <p class="demo-introduction">快速实现页面级整体布局。</p>
    <v-anchor>
      <v-anchor-link href="layout-vertical" title="上中下布局" />
      <v-anchor-link href="layout-has-aside" title="包含侧边栏" />
      <v-anchor-link href="layout-aside" title="侧边布局" />
      <v-anchor-link href="api" title="API" />
    </v-anchor>
    <v-demo-block :height="170" title="上中下布局" id="layout-vertical">
      <template v-slot:demo>
        <h-container class="container-demo">
          <h-header class="header-demo">header</h-header>
          <h-main :height="200" class="main-demo">main</h-main>
          <h-footer class="footer-demo">footer</h-footer>
        </h-container>
      </template>
      <template v-slot:code>
        <code class="html">{{fCode(vertical.code)}}</code>
      </template>
    </v-demo-block>
    <v-demo-block :height="230" title="包含侧边栏" id="layout-has-aside">
      <template v-slot:demo>
        <h-container class="container-demo">
          <h-header class="header-demo">header</h-header>
          <h-container>
            <h-aside :width="200" class="aside-demo">aside</h-aside>
            <h-main :height="200" class="main-demo">main</h-main>
          </h-container>
          <h-footer class="footer-demo">footer</h-footer>
        </h-container>
      </template>
      <template v-slot:code>
        <code class="html">{{fCode(hasAside.code)}}</code>
      </template>
    </v-demo-block>
    <v-demo-block :height="230" title="侧边布局" id="layout-aside">
      <template v-slot:demo>
        <h-container class="container-demo">
          <h-aside :width="200" class="aside-demo">aside</h-aside>
          <h-container>
            <h-header class="header-demo">header</h-header>
            <h-main :height="200" class="main-demo">main</h-main>
            <h-footer class="footer-demo">footer</h-footer>
          </h-container>
        </h-container>
      </template>
      <template v-slot:code>
        <code class="html">{{fCode(aside.code)}}</code>
      </template>
    </v-demo-block>
    <!-- API -->
    <div id="api">
      <h3 class="demo-table-title">API</h3>
      <P class="demo-table-introduction">属性说明如下：</P>
      <h4>Container</h4>
      <v-api-table :data="containerApi" />
      <h4 class="aditional-api">Header</h4>
      <v-api-table :data="headerApi" />
      <h4 class="aditional-api">Aside</h4>
      <v-api-table :data="asideApi" />
      <h4 class="aditional-api">Main</h4>
      <v-api-table :data="mainApi" />
      <h4 class="aditional-api">Footer</h4>
      <v-api-table :data="footerApi" />
    </div>
  </div>
</template>

<script>
export default {
  name: 'VLayout',
  data () {
    return {
      vertical: {
        code: `
          <h-container>
            <h-header>header</h-header>
            <h-main>main</h-main>
            <h-footer>footer</h-footer>
          </h-container>`
      },
      hasAside: {
        code: `
          <h-container>
            <h-header>header</h-header>
            <h-container>
              <h-aside :width="200">aside</h-aside>
              <h-main>main</h-main>
            </h-container>
            <h-footer>footer</h-footer>
          </h-container>
        `
      },
      aside: {
        code: `
           <h-container>
            <h-aside :width="200">aside</h-aside>
            <h-container>
              <h-header>header</h-header>
              <h-main>main</h-main>
              <h-footer>footer</h-footer>
            </h-container>
          </h-container>
        `
      },
      containerApi: [
        {
          parameter: "direction",
          explain: "子元素的排列方向",
          dataTypes: "string",
          optionalValues:
            "horizontal / vertical",
          defaultValue: "子元素中有 h-header 或 h-footer 时为 vertical，否则为 horizontal"
        }
      ],
      headerApi: [
        {
          parameter: "height",
          explain: "顶栏高度",
          dataTypes: "number",
          optionalValues:
            "-",
          defaultValue: "60"
        }
      ],
      asideApi: [
        {
          parameter: "width",
          explain: "侧边栏的宽度",
          dataTypes: "number",
          optionalValues:
            "-",
          defaultValue: "200"
        }
      ],
      mainApi: [
        {
          parameter: "height",
          explain: "主体部分的高度",
          dataTypes: "number",
          optionalValues:
            "-",
          defaultValue: "400"
        }
      ],
      footerApi: [
        {
          parameter: "height",
          explain: "顶栏高度",
          dataTypes: "number",
          optionalValues:
            "-",
          defaultValue: "60"
        }
      ]
    }
  }
}
</script>

<style scoped lang="scss">
@mixin common-style {
  display: flex;
  justify-content: center;
  align-items: center;
  text-align: center;
}
.container-demo {
  .header-demo {
    @include common-style;
    background-color: #b3c0d1;
  }
  .aside-demo {
    @include common-style;
    background-color: #d3dce6;
  }
  .main-demo {
    height: 200px;
    @include common-style;
    background-color: #e9eef3;
  }
  .footer-demo {
    @include common-style;
    background-color: #b3c0d1;
  }
}
</style>