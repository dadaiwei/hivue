<template>
  <div class="content-box">
    <h2 class="demo-title">Progress 进度条</h2>
    <p class="demo-introduction">展示操作的当前进度。</p>
    <v-anchor>
      <v-anchor-link href="progress-simple" title="基础用法" />
      <v-anchor-link href="progress-show-text" title="不显示文字" />
      <v-anchor-link href="progress-text-inside" title="文字位于进度条内" />
      <v-anchor-link href="progress-size" title="自定义进度条宽高" />
      <v-anchor-link href="progress-striped" title="条纹效果" />
      <v-anchor-link href="progress-active" title="动画效果" />
      <v-anchor-link href="api" title="API" />
    </v-anchor>
    <v-demo-block :height="230" title="基础用法" id="progress-simple">
      <template v-slot:demo>
        <div>
          <h-progress class="progress"></h-progress>
          <h-progress class="progress" :ratio="0.5"></h-progress>
          <h-progress class="progress" :ratio="0.7" status="normal"></h-progress>
          <h-progress class="progress" :ratio="0.7" status="success"></h-progress>
          <h-progress class="progress" :ratio="0.7" status="warning"></h-progress>
          <h-progress class="progress" :ratio="0.7" status="danger"></h-progress>
        </div>
      </template>
      <template v-slot:code>
        <code class="html">{{fCode(base.code)}}</code>
      </template>
    </v-demo-block>
    <v-demo-block :height="230" title="不显示文字" id="progress-show-text">
      <template v-slot:demo>
        <div>
          <h-progress class="progress" :showText="false"></h-progress>
          <h-progress class="progress" :ratio="0.5" :showText="false"></h-progress>
          <h-progress class="progress" :ratio="0.7" status="normal" :showText="false"></h-progress>
          <h-progress class="progress" :ratio="0.7" status="success" :showText="false"></h-progress>
          <h-progress class="progress" :ratio="0.7" status="warning" :showText="false"></h-progress>
          <h-progress class="progress" :ratio="0.7" status="danger" :showText="false"></h-progress>
        </div>
      </template>
      <template v-slot:code>
        <code class="html">{{fCode(showText.code)}}</code>
      </template>
    </v-demo-block>
    <v-demo-block :height="230" title="文字位于进度条内" id="progress-text-inside">
      <template v-slot:demo>
        <div>
          <h-progress class="progress" textInside></h-progress>
          <h-progress class="progress" :ratio="0.5" textInside></h-progress>
          <h-progress class="progress" :ratio="0.7" status="normal" textInside></h-progress>
          <h-progress class="progress" :ratio="0.7" status="success" textInside></h-progress>
          <h-progress class="progress" :ratio="0.7" status="warning" textInside></h-progress>
          <h-progress class="progress" :ratio="0.7" status="danger" textInside></h-progress>
        </div>
      </template>
      <template v-slot:code>
        <code class="html">{{fCode(textInside.code)}}</code>
      </template>
    </v-demo-block>
    <v-demo-block :height="200" title="自定义进度条宽高" id="progress-size">
      <template v-slot:demo>
        <div>
          <h-progress class="progress" :ratio="0" :height="10" :width="400"></h-progress>
          <h-progress class="progress" :ratio="0.7" status="normal" :height="10" :width="400"></h-progress>
          <h-progress class="progress" :ratio="0.7" status="success" :height="10" :width="400"></h-progress>
          <h-progress class="progress" :ratio="0.7" status="warning" :height="10" :width="400"></h-progress>
          <h-progress class="progress" :ratio="0.7" status="danger" :height="10" :width="400"></h-progress>
        </div>
      </template>
      <template v-slot:code>
        <code class="html">{{fCode(size.code)}}</code>
      </template>
    </v-demo-block>
    <v-demo-block :height="200" title="条纹效果" id="progress-striped">
      <template v-slot:demo>
        <div>
          <h-progress class="progress" :ratio="0.7" striped></h-progress>
          <h-progress class="progress" :ratio="0.7" status="success" striped></h-progress>
          <h-progress class="progress" :ratio="0.7" status="warning" striped></h-progress>
          <h-progress class="progress" :ratio="0.7" status="danger" striped></h-progress>
        </div>
      </template>
      <template v-slot:code>
        <code class="html">{{fCode(striped.code)}}</code>
      </template>
    </v-demo-block>
    <v-demo-block :height="200" title="动画效果" id="progress-active">
      <template v-slot:demo>
        <div>
          <h-progress class="progress" :ratio="0.7" status="normal" striped active></h-progress>
          <h-progress class="progress" :ratio="0.7" status="success" striped active></h-progress>
          <h-progress class="progress" :ratio="0.7" status="warning" striped active></h-progress>
          <h-progress class="progress" :ratio="0.7" status="danger" striped active></h-progress>
        </div>
      </template>
      <template v-slot:code>
        <code class="html">{{fCode(active.code)}}</code>
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
  name: 'VProgressDemo',
  data () {
    return {
      base: {
        code: `
        <div>
          <h-progress class="progress"></h-progress>
          <h-progress class="progress" :ratio="0.5"></h-progress>
          <h-progress class="progress" :ratio="0.7" status="normal"></h-progress>
          <h-progress class="progress" :ratio="0.7" status="success"></h-progress>
          <h-progress class="progress" :ratio="0.7" status="warning"></h-progress>
          <h-progress class="progress" :ratio="0.7" status="danger"></h-progress>
        </div>
        `
      },
      showText: {
        code: `
        <div>
          <h-progress class="progress" :showText="false"></h-progress>
          <h-progress class="progress" :ratio="0.5" :showText="false"></h-progress>
          <h-progress class="progress" :ratio="0.7" status="normal" :showText="false"></h-progress>
          <h-progress class="progress" :ratio="0.7" status="success" :showText="false"></h-progress>
          <h-progress class="progress" :ratio="0.7" status="warning" :showText="false"></h-progress>
          <h-progress class="progress" :ratio="0.7" status="danger" :showText="false"></h-progress>
        </div>
        `
      },
      textInside: {
        code: `
        <div>
          <h-progress class="progress" textInside></h-progress>
          <h-progress class="progress" :ratio="0.5" textInside></h-progress>
          <h-progress class="progress" :ratio="0.7" status="normal" textInside></h-progress>
          <h-progress class="progress" :ratio="0.7" status="success" textInside></h-progress>
          <h-progress class="progress" :ratio="0.7" status="warning" textInside></h-progress>
          <h-progress class="progress" :ratio="0.7" status="danger" textInside></h-progress>
        </div>
        `
      },
      size: {
        code: `
        <div>
          <h-progress class="progress" :ratio="0" :height="10" :width="400"></h-progress>
          <h-progress class="progress" :ratio="0.7" status="normal" :height="10" :width="400"></h-progress>
          <h-progress class="progress" :ratio="0.7" status="success" :height="10" :width="400"></h-progress>
          <h-progress class="progress" :ratio="0.7" status="warning" :height="10" :width="400"></h-progress>
          <h-progress class="progress" :ratio="0.7" status="danger" :height="10" :width="400"></h-progress>
        </div>
        `
      },
      striped: {
        code: `
        <div>
          <h-progress class="progress" :ratio="0.7" striped></h-progress>
          <h-progress class="progress" :ratio="0.7" status="success" striped></h-progress>
          <h-progress class="progress" :ratio="0.7" status="warning" striped></h-progress>
          <h-progress class="progress" :ratio="0.7" status="danger" striped></h-progress>
        </div>
        `
      },
      active: {
        code: `
        <div>
          <h-progress class="progress" :ratio="0.7" status="normal" striped active></h-progress>
          <h-progress class="progress" :ratio="0.7" status="success" striped active></h-progress>
          <h-progress class="progress" :ratio="0.7" status="warning" striped active></h-progress>
          <h-progress class="progress" :ratio="0.7" status="danger" striped active></h-progress>
        </div>
        `
      },
      api: [
        {
          parameter: "type",
          explain: "设置进度条类型",
          dataTypes: "string",
          optionalValues:
            "normal / success / warning/ danger",
          defaultValue: "normal"
        },
        {
          parameter: "ratio",
          explain: "进度条占比，0-1之间小数",
          dataTypes: "number",
          optionalValues: "-",
          defaultValue: "0"
        },
        {
          parameter: "showText",
          explain: "是否显示进度条文字",
          dataTypes: "boolean",
          optionalValues: "true / false",
          defaultValue: "true"
        },
        {
          parameter: "textInside",
          explain: "进度条显示文字是否内置在进度条内",
          dataTypes: "boolean",
          optionalValues: "true / false",
          defaultValue: "false"
        },
        {
          parameter: "width",
          explain: "设置进度条宽度",
          dataTypes: "number",
          optionalValues: "-",
          defaultValue: "300"
        },
        {
          parameter: "height",
          explain: "设置进度条高度",
          dataTypes: "number",
          optionalValues: "-",
          defaultValue: "15"
        },
        {
          parameter: "striped",
          explain: "是否支持条纹效果",
          dataTypes: "boolean",
          optionalValues: "true / false",
          defaultValue: "false"
        },
        {
          parameter: "active",
          explain: "是否支持动画效果，需要和striped prop配合使用",
          dataTypes: "boolean",
          optionalValues: "true / false",
          defaultValue: "false"
        }
      ]
    }
  }
}
</script>

<style lang="scss" scoped>
.progress-base-container {
  display: flex;
  flex-wrap: wrap;
}
.progress {
  margin: 0 20px 20px 0;
}
</style>