<template>
  <div class="h-el-demo-block">
    <h3 class="demo-block-title" v-if="title !== ''">{{ title }}</h3>
    <p class="demo-block-introduction" v-if="introduction !== ''">{{introduction}}</p>
    <div class="demo-block">
      <div class="source">
        <slot name="demo" />
      </div>
      <div class="code" :style="{ height: code_height + 'px' }">
        <pre v-highlightjs>
          <slot name="code" />
        </pre>
      </div>
      <div class="demo-block-control" @click="showCode()">
        <i
          class="iconfont"
          :class="{
            'icon-caret-down': code_height === 0,
            'icon-caret-up': code_height !== 0
          }"
        ></i>
        <span :class="{ hovering_span: hover_animation }">
          {{
          code_height === 0 ? '显示代码' : '隐藏代码'
          }}
        </span>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: "VDemoBlock",
  props: {
    title: {
      type: String,
      default: ""
    },
    introduction: {
      type: String,
      default: ""
    },
    height: {
      type: Number,
      default: 100
    }
  },
  data () {
    return {
      data: "",
      hover_animation: false,
      code_height: 0
    };
  },
  methods: {
    showCode () {
      if (this.code_height === 0) {
        this.code_height = this.height;
      } else {
        this.code_height = 0;
      }
    }
  }
};
</script>
<style lang="scss" scoped>
.h-el-demo-block {
  .demo-block-title {
    margin: 55px 0 20px;
    font-weight: 400;
    color: #1f2f3d;
  }
  .demo-block-introduction {
    font-size: 14px;
    color: #5e6d82;
    margin: 10px 0;
  }
  .demo-block {
    width: 100%;
    margin-bottom: 24px;
    border: 1px solid #ebebeb;
    border-radius: 3px;
    transition: 0.2s;
    &:hover {
      box-shadow: 0 0 8px 0 rgba(232, 237, 250, 0.6),
        0 2px 4px 0 rgba(232, 237, 250, 0.5);
    }
    .introduction {
      font-size: 13px;
      color: #5e6d82;
      margin: 10px 0;
    }
    .source {
      padding: 24px;
    }
    .code {
      height: 0;
      background: #282c34;
      border-top: 1px solid #eaeefb;
      transition: height 0.2s;
      overflow: hidden;
    }
    .demo-block-control {
      cursor: pointer;
      position: relative;
      margin-top: -1px;
      height: 44px;
      box-sizing: border-box;
      background-color: #fff;
      border-top: 1px solid #eaeefb;
      border-bottom-left-radius: 4px;
      border-bottom-right-radius: 4px;
      text-align: center;
      color: #595959;
      &:hover {
        color: #409eff;
        background-color: #f9fafc;
      }
      i {
        display: inline-block;
        position: relative;
        font-size: 16px;
        line-height: 44px;
        transition: 0.3s;
      }
      span {
        display: inline-block;
        position: absolute;
        transform: translateX(10px);
        font-size: 14px;
        line-height: 44px;
        transition: 0.3s;
      }
      .hovering_i {
        transform: translateX(-40px);
      }
      .hovering_span {
        transform: translateX(-30px);
        opacity: 1;
      }
    }
  }
}
</style>
