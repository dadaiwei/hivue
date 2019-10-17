<!--
 * @File: HProgress.vue
 * @Description: 进度条组件
 * @Author: Dadaiwei
 * @Date: 2018-12-03 18:40:35
 * @LastEditor: Dadaiwei
 * @LastEditTime: 2019-05-20 21:13:33
 -->
<template>
  <div>
    <slot name="progress"></slot>
    <div class="progress-bar">
      <div class="progress-outer-bar" :style="outerStyle">
        <div class="progress-inner-bar"
          :class="['progress-inner-bar-' + this.status,
                      {'progress-inner-bar-striped': striped,
                       'active': this.striped && this.active}]"
          :style="innerStyle">
        </div>
        <div v-if="showText && textInside"
          class="inside-text"
          :style="{'line-height': this.height + 'px'}">
          {{percent}}
        </div>
      </div>
       <div v-if="showText && !textInside"
          class="outside-text"
          :style="{'line-height': this.height + 'px'}">
          {{percent}}
        </div>
    </div>
  </div>
</template>

<script>
export default {
  name: "HProgress",
  props: {
    showText: { // 是否显示进度条显示文字
      type: Boolean,
      required: false,
      default: true
    },
    textInside: { // 进度条显示文字是否内置在进度条内
      type: Boolean,
      required: false,
      default: true
    },
    striped: { // 是否支持条纹效果
      type: Boolean,
      required: false,
      default: false
    },
    active:  { // 是否支持动画效果
      type: Boolean,
      required: false,
      default: false
    },
    status: { // 进度条状态，normal/success/warning/danger
      type: String,
      required: false,
      default: "normal"
    },
    width: { // 进度条宽度
      type: Number,
      required: false,
      default: 300
    },
    height: { // 进度条高度
      types: Number,
      requried: false,
      default: 15
    },
    ratio: { // 占比
      type: Number,
      required: false,
      default: 0
    }
  },
  computed: {
    outerStyle() { // 外面进度条计算样式
      const style = {
        width: Number.isInteger(this.width) ? `${this.width}px` : this.width,
        height: Number.isInteger(this.height) ? `${this.height}px` : this.height
      };
      return style;
    },
    innerStyle() { // 内部进度条计算样式
      const style = {
        height: `${this.height}px`
      };
      let width = 0;
      if (this.ratio && this.ratio >= 0 && this.ratio <= 1) {
        width = this.width * this.ratio;
      } 
      if(this.ratio > 1) {
        width = this.width;
      }
      style.width = Number.isInteger(width) ? `${width}px` : width;
      return style;
    },
    percent() { // 占比百分比，转换为%形势
      return `${this.ratio * 100}%`;
    }
  }
};
</script>