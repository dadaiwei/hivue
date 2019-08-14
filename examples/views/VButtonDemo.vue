<template>
  <div class="content-box">
    <h2 class="demo-title">Button 按钮</h2>
    <p class="demo-introduction">按钮用于开始一个即时操作。</p>
    <v-anchor>
      <v-anchor-link href="button-simple" title="基础用法" />
      <v-anchor-link href="button-size" title="大小" />
      <v-anchor-link href="api" title="API" />
    </v-anchor>
    <v-demo-block :height="210" title="基础用法" id="button-simple">
      <template v-slot:demo>
        <div>
          <h-button>Default</h-button>
          <h-button type="primary">Primary</h-button>
          <h-button type="info">Info</h-button>
          <h-button type="success">Success</h-button>
          <h-button type="danger">Danger</h-button>
        </div>
      </template>
      <template v-slot:code>
        <code class="html">{{fCode(base.code)}}</code>
      </template>
    </v-demo-block>
    <v-demo-block :height="160" title="大小" id="button-size">
      <template v-slot:demo>
        <div>
          <h-button>Default</h-button>
          <h-button size="small">Small</h-button>
          <h-button size="large">Large</h-button>
        </div>
      </template>
      <template v-slot:code>
        <code class="html">{{fCode(size.code)}}</code>
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
        </div>
        `
      },
      size: {
        code: `
        <div>
          <h-button>Default</h-button>
          <h-button size="small">Small</h-button>
          <h-button size="large">Large</h-button>
        </div>  
        `
      },
      api: [
        {
          parameter: "type",
          explain: "设置按钮类型",
          dataTypes: "String",
          optionalValues: "default / primary / success / danger / warning ",
          defaultValue: "default"
        },
        {
          parameter: "size",
          explain: "设置按钮大小",
          dataTypes: "String",
          optionalValues: "small / medium / large ",
          defaultValue: "medium"
        },
        {
          parameter: "disabled",
          explain: "是否禁用按钮",
          dataTypes: "Boolean",
          optionalValues: "true/false",
          defaultValue: "false"
        }
      ]
    };
  }
};
</script>

<style lang="scss" scoped>
</style>