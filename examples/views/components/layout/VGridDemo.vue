<template>
  <div class="content-box">
    <h2 class="demo-title">Grid 栅格</h2>
    <p class="demo-introduction">通过创建24分栏，迅速简便地创建布局。</p>
    <v-anchor>
      <v-anchor-link href="grid-simple" title="基础布局" />
      <v-anchor-link href="grid-gutter" title="分栏间隔" />
      <v-anchor-link href="grid-offset" title="分栏偏移" />
      <v-anchor-link href="grid-justify" title="对齐方式" />
      <v-anchor-link href="api" title="API" />
    </v-anchor>
    <v-demo-block :height="150" title="基础用法" id="grid-simple">
      <template v-slot:demo>
        <div>
          <h-row class="row-demo">
            <h-col :span="12" class="col-demo">50%</h-col>
            <h-col :span="12" class="col-demo">50%</h-col>
          </h-row>
        </div>
      </template>
      <template v-slot:code>
        <code class="html">{{fCode(base.code)}}</code>
      </template>
    </v-demo-block>
    <v-demo-block :height="360" title="分栏间隔" id="grid-gutter">
      <template v-slot:demo>
        <div>
          <h-row class="row-demo gutter-demo" :gutter="20">
            <h-col :span="6" class="col-demo">
              <div class="col-box">25%</div>
            </h-col>
            <h-col :span="6" class="col-demo">
              <div class="col-box">25%</div>
            </h-col>
            <h-col :span="6" class="col-demo">
              <div class="col-box">25%</div>
            </h-col>
            <h-col :span="6" class="col-demo">
              <div class="col-box">25%</div>
            </h-col>
          </h-row>
        </div>
      </template>
      <template v-slot:code>
        <code class="html">{{fCode(gutter.code)}}</code>
      </template>
    </v-demo-block>
    <v-demo-block :height="320" title="分栏偏移" id="grid-offset">
      <template v-slot:demo>
        <div>
          <h-row class="row-demo">
            <h-col :span="6" class="col-demo">25%</h-col>
            <h-col :span="6" :offset="3" class="col-demo">25%</h-col>
            <h-col :span="6" :offset="3" class="col-demo">25%</h-col>
          </h-row>
          <h-row class="row-demo">
            <h-col :span="6" :push="1" class="col-demo">25%</h-col>
            <h-col :span="6" :offset="2" class="col-demo">25%</h-col>
            <h-col :span="6" :offset="4" :pull="3" class="col-demo">25%</h-col>
          </h-row>
        </div>
      </template>
      <template v-slot:code>
        <code class="html">{{fCode(offset.code)}}</code>
      </template>
    </v-demo-block>
    <v-demo-block :height="630" title="对齐方式" id="grid-justify">
      <template v-slot:demo>
        <div>
          <h-row class="row-demo" type="flex" justify="left">
            <h-col :span="6" class="col-demo">25%</h-col>
            <h-col :span="6" class="col-demo">25%</h-col>
            <h-col :span="6" class="col-demo">25%</h-col>
          </h-row>
          <h-row class="row-demo" type="flex" justify="center">
            <h-col :span="6" class="col-demo">25%</h-col>
            <h-col :span="6" class="col-demo">25%</h-col>
            <h-col :span="6" class="col-demo">25%</h-col>
          </h-row>
          <h-row class="row-demo" type="flex" justify="space-between">
            <h-col :span="6" class="col-demo">25%</h-col>
            <h-col :span="6" class="col-demo">25%</h-col>
            <h-col :span="6" class="col-demo">25%</h-col>
          </h-row>
          <h-row class="row-demo" type="flex" justify="space-around">
            <h-col :span="6" class="col-demo">25%</h-col>
            <h-col :span="6" class="col-demo">25%</h-col>
            <h-col :span="6" class="col-demo">25%</h-col>
          </h-row>
          <h-row class="row-demo" type="flex" justify="space-evenly" align="middle">
            <h-col :span="6" class="col-demo">25%</h-col>
            <h-col :span="6" class="col-demo">25%</h-col>
            <h-col :span="6" class="col-demo">25%</h-col>
          </h-row>
        </div>
      </template>
      <template slot="code">
        <code class="html">{{fCode(justify.code)}}</code>
      </template>
    </v-demo-block>
    <v-demo-block :height="630" title="响应式布局" id="grid-responsive">
      <template v-slot:demo>
        <h-row class="row-demo">
          <h-col :xs="8" :sm="6" :md="4" :lg="3" :xl="1" class="col-demo"></h-col>
          <h-col :xs="4" :sm="6" :md="8" :lg="9" :xl="11" class="col-demo"></h-col>
          <h-col :xs="8" :sm="6" :md="4" :lg="3" :xl="1" class="col-demo"></h-col>
        </h-row>
      </template>
    </v-demo-block>
    <div id="api">
      <h3 class="demo-table-title">API</h3>
    </div>
  </div>
</template>

<script>
export default {
  name: "VGridDemo",
  data () {
    return {
      base: {
        code: `
           <h-row>
            <h-col :span="12">50%</h-col>
            <h-col :span="12">50%</h-col>
          </h-row>
        `
      },
      gutter: {
        code: `
          <h-row :gutter="20">
            <h-col :span="6">
              <div class="col-box">25%</div>
            </h-col>
            <h-col :span="6">
              <div class="col-box">25%</div>
            </h-col>
            <h-col :span="6">
              <div class="col-box">25%</div>
            </h-col>
            <h-col :span="6">
              <div class="col-box">25%</div>
            </h-col>
          </h-row>
        `
      },
      offset: {
        code: `
        <div>
          <h-row>
              <h-col :span="6">25%</h-col>
              <h-col :span="6" :offset="3">25%</h-col>
              <h-col :span="6" :offset="3">25%</h-col>
          </h-row>
          <h-row>
              <h-col :span="6" :push="1">25%</h-col>
              <h-col :span="6" :offset="2">25%</h-col>
              <h-col :span="6" :offset="4" :pull="3">25%</h-col>
          </h-row>
        </div>  
        `
      },
      justify: {
        code: `
        <div>
          <h-row type="flex" justify="left">
            <h-col :span="6">25%</h-col>
            <h-col :span="6">25%</h-col>
            <h-col :span="6">25%</h-col>
          </h-row>
          <h-row type="flex" justify="center">
            <h-col :span="6">25%</h-col>
            <h-col :span="6">25%</h-col>
            <h-col :span="6">25%</h-col>
          </h-row>
          <h-row type="flex" justify="space-between">
            <h-col :span="6">25%</h-col>
            <h-col :span="6">25%</h-col>
            <h-col :span="6">25%</h-col>
          </h-row>
          <h-row type="flex" justify="space-around">
            <h-col :span="6">25%</h-col>
            <h-col :span="6">25%</h-col>
            <h-col :span="6">25%</h-col>
          </h-row>
          <h-row  type="flex" justify="space-evenly" align="middle">
            <h-col :span="6">25%</h-col>
            <h-col :span="6">25%</h-col>
            <h-col :span="6">25%</h-col>
          </h-row>
        </div>
        `
      }
    };
  }
};
</script>

<style scoped lang="scss">
.row-demo {
  height: 40px;
  line-height: 40px;
  color: #ffffff;
}
.col-demo {
  height: 40px;
  border-radius: 4px;
  text-align: center;
  &:nth-child(even) {
    background-color: rgba(0, 160, 233, 0.7);
  }
  &:nth-child(odd) {
    background-color: #00a0e9;
  }
}
.gutter-demo {
  .col-demo {
    background-color: #fff;
    &:nth-child(even) {
      .col-box {
        background-color: rgba(0, 160, 233, 0.7);
      }
    }
    &:nth-child(odd) {
      .col-box {
        background-color: #00a0e9;
      }
    }
  }
}
#grid-justify {
  .row-demo {
    background-color: #eee;
    .col-demo {
      height: 30px;
      line-height: 30px;
    }
  }
}
</style>