<template>
  <div class="content-box">
    <h2 class="demo-title">Button 按钮</h2>
    <p class="demo-introduction">按钮用于开始一个即时操作。</p>
    <v-anchor>
      <v-anchor-link href="button-simple" title="基础用法" />
      <v-anchor-link href="button-size" title="大小" />
      <v-anchor-link href="button-disabled" title="禁用" />
      <v-anchor-link href="button-loading" title="loading" />
      <v-anchor-link href="button-shape" title="形状" />
      <v-anchor-link href="button-icon" title="icon" />
      <v-anchor-link href="api" title="API" />
    </v-anchor>
    <v-demo-block :height="260" title="基础用法" id="button-simple">
      <template v-slot:demo>
        <div>
          <h-button>Default</h-button>
          <h-button type="primary">Primary</h-button>
          <h-button type="info">Info</h-button>
          <h-button type="success">Success</h-button>
          <h-button type="warning">Warning</h-button>
          <h-button type="danger">Danger</h-button>
          <h-button type="dashed">Dashed</h-button>
          <h-button type="link">Link</h-button>
        </div>
      </template>
      <template v-slot:code>
        <code class="html">{{fCode(base.code)}}</code>
      </template>
    </v-demo-block>
    <v-demo-block :height="280" title="大小" id="button-size">
      <template v-slot:demo>
        <div>
          <h-button size="small">Small</h-button>
          <h-button size="small" type="primary">Small</h-button>
          <h-button size="small" type="success">Small</h-button>
          <h-button size="midium">Default</h-button>
          <h-button size="midium" type="primary">Default</h-button>
          <h-button size="midium" type="success">Default</h-button>
          <h-button size="large" type="default">Large</h-button>
          <h-button size="large" type="primary">Large</h-button>
          <h-button size="large" type="success">Large</h-button>
        </div>
      </template>
      <template v-slot:code>
        <code class="html">{{fCode(size.code)}}</code>
      </template>
    </v-demo-block>
    <v-demo-block :height="280" title="禁用" id="button-disabled">
      <template v-slot:demo>
        <div>
          <h-button disabled>Default</h-button>
          <h-button type="primary" disabled>Primary</h-button>
          <h-button type="info" disabled>Info</h-button>
          <h-button type="success" disabled>Success</h-button>
          <h-button type="warning" disabled>Warning</h-button>
          <h-button type="danger" disabled>Danger</h-button>
          <h-button type="dashed" disabled>Dashed</h-button>
          <h-button type="link" disabled>Link</h-button>
        </div>
      </template>
      <template v-slot:code>
        <code class="html">{{fCode(disabled.code)}}</code>
      </template>
    </v-demo-block>
    <v-demo-block :height="260" title="loading" id="button-loading">
      <template v-slot:demo>
        <div>
          <h-button loading>Default</h-button>
          <h-button type="primary" loading>Primary</h-button>
          <h-button type="info" loading>Info</h-button>
          <h-button type="success" loading>Success</h-button>
          <h-button type="warning" loading>Warning</h-button>
          <h-button type="danger" loading>Danger</h-button>
          <h-button type="dashed" loading>Dashed</h-button>
        </div>
      </template>
      <template v-slot:code>
        <code class="html">{{fCode(loading.code)}}</code>
      </template>
    </v-demo-block>
    <v-demo-block :height="260" title="形状" id="button-shape">
      <template v-slot:demo>
        <div>
          <h-button size="small" shape="round">Default</h-button>
          <h-button size="medium" shape="round">Default</h-button>
          <h-button type="large" shape="round">Default</h-button>
          <h-button type="primary" size="small" shape="circle" loading></h-button>
          <h-button type="primary" size="medium" shape="circle" loading></h-button>
          <h-button type="primary" size="large" shape="circle" loading></h-button>
        </div>
      </template>
      <template v-slot:code>
        <code class="html">{{fCode(shape.code)}}</code>
      </template>
    </v-demo-block>
    <v-demo-block :height="260" title="icon" id="button-icon">
      <template v-slot:demo>
        <div>
          <h-button icon="left">Default</h-button>
          <h-button icon="right">Default</h-button>
          <h-button icon="up">Default</h-button>
          <h-button type="primary" icon="arrowleft">Primary</h-button>
          <h-button type="primary" icon="arrowright">Primary</h-button>
          <h-button type="primary" icon="arrowup">Primary</h-button>
        </div>
      </template>
      <template v-slot:code>
        <code class="html">{{fCode(icon.code)}}</code>
      </template>
    </v-demo-block>
    <!-- API -->
    <div id="api">
      <h3 class="demo-table-title">API</h3>
      <P class="demo-table-introduction">属性说明如下：</P>
      <v-api-table :data="api" />
    </div>
  </div>
</template>

<script>
export default {
  name: "VButtonDemo",
  data() {
    return {
      base: {
        code: `
        <div>
          <h-button>Default</h-button>
          <h-button type="primary">Primary</h-button>
          <h-button type="info">Info</h-button>
          <h-button type="success">Success</h-button>
          <h-button type="danger">Danger</h-button>
          <h-button type="dashed">Dashed</h-button>
          <h-button type="link">Link</h-button>
        </div>
        `
      },
      size: {
        code: `
        <div>
          <h-button size="small">Small</h-button>
          <h-button size="small" type="primary">Small</h-button>
          <h-button size="small" type="success">Small</h-button>
          <h-button size="midium">Default</h-button>
          <h-button size="midium" type="primary">Default</h-button>
          <h-button size="midium" type="success">Default</h-button>
          <h-button size="large" type="default">Large</h-button>
          <h-button size="large" type="primary">Large</h-button>
          <h-button size="large" type="success">Large</h-button>
        </div>
        `
      },
      disabled: {
        code: `
        <div>
          <h-button disabled>Default</h-button>
          <h-button type="primary" disabled>Primary</h-button>
          <h-button type="info" disabled>Info</h-button>
          <h-button type="success" disabled>Success</h-button>
          <h-button type="warning" disabled>Warning</h-button>
          <h-button type="danger" disabled>Danger</h-button>
          <h-button type="dashed" disabled>Dashed</h-button>
          <h-button type="link" disabled>Link</h-button>
        </div>
        `
      },
      loading: {
        code: `
        <div>
          <h-button loading>Default</h-button>
          <h-button type="primary" loading>Primary</h-button>
          <h-button type="info" loading>Info</h-button>
          <h-button type="success" loading>Success</h-button>
          <h-button type="warning" loading>Warning</h-button>
          <h-button type="danger" loading>Danger</h-button>
          <h-button type="dashed" loading>Dashed</h-button>
        </div>
        `
      },
      shape: {
        code: `
        <div>
          <h-button size="small" shape="round">Default</h-button>
          <h-button size="medium" shape="round">Default</h-button>
          <h-button type="large" shape="round">Default</h-button>
          <h-button type="primary" size="small" shape="circle" loading></h-button>
          <h-button type="primary" size="medium" shape="circle" loading></h-button>
          <h-button type="primary" size="large" shape="circle" loading></h-button>
        </div>
        `
      },
      icon: {
        code: `
        <div>
          <h-button icon="left">Default</h-button>
          <h-button icon="right">Default</h-button>
          <h-button icon="up">Default</h-button>
          <h-button type="primary" icon="arrowleft">Primary</h-button>
          <h-button type="primary" icon="arrowright">Primary</h-button>
          <h-button type="primary" icon="arrowup">Primary</h-button>
        </div>
        `
      },
      api: [
        {
          parameter: "type",
          explain: "设置按钮类型",
          dataTypes: "string",
          optionalValues:
            "default / primary / info / success / warning / danger / dashed / link ",
          defaultValue: "default"
        },
        {
          parameter: "size",
          explain: "设置按钮大小",
          dataTypes: "string",
          optionalValues: "small / medium / large ",
          defaultValue: "medium"
        },
        {
          parameter: "disabled",
          explain: "是否禁用按钮",
          dataTypes: "boolean",
          optionalValues: "true / false",
          defaultValue: "false"
        },
        {
          parameter: "loading",
          explain: "按钮加载状态",
          dataTypes: "boolean",
          optionalValues: "true / false",
          defaultValue: "false"
        },
        {
          parameter: "shape",
          explain: "按钮形状",
          dataTypes: "string",
          optionalValues: "round / circle",
          defaultValue: "-"
        },
        {
          parameter: "icon",
          explain: "按钮图标",
          dataTypes: "string",
          optionalValues: "-",
          defaultValue: "-"
        }
      ]
    };
  }
};
</script>

<style lang="scss" scoped>
</style>