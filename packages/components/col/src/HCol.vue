<!--
 * @File: HCol.vue
 * @Description: 列组件
 * @Author: Dadaiwei
 * @Date: 2019-02-01 15:52:58
 * @LastEditor: Dadaiwei
 * @LastEditTime: 2019-05-21 09:57:55
 -->
<template>
  <div
    :class="['h-col', 'h-col-' + span,
                xs > 0 ? 'h-col-xs-' + xs : '',
                sm > 0 ? 'h-col-sm-' + sm : '',
                md > 0 ? 'h-col-md-' + md : '',
                lg > 0 ? 'h-col-lg-' + lg : '',
                xl > 0 ? 'h-col-xl-' + xl : '',
                offset > 0 ? 'h-col-offset-' + offset : '',
                push > 0 ? 'h-col-push-' + push : '', 
                pull > 0 ? 'h-col-pull-' + pull : '']"
    :style="gutterStyle"
  >
    <slot></slot>
  </div>
</template>

<script>
export default {
  name: 'HCol',
  props: {
    span: { // 栅格占据的列数
      type: Number,
      required: false,
      default: 24
    },
    offset: { // 栅格左侧的间隔
      type: Number,
      required: false,
      default: 0
    },
    push: { // 栅格向右移动格数
      type: Number,
      required: false,
      default: 0
    },
    pull: { // 栅格向左移动格数
      type: Number,
      required: false,
      default: 0
    },
    xs: { // < 768px下列宽大小
      type: Number,
      required: false,
      default: 0
    },
    sm: { // >= 768px && < 992px下列宽大小
      type: Number,
      required: false,
      default: 0
    },
    md: { // >= 992px && < 1200px下列宽大小
      type: Number,
      required: false,
      default: 0
    },
    lg: { // >= 1200px下列宽大小
      type: Number,
      required: false,
      default: 0
    },
    xl: { // >= 1920px下列宽大小
      type: Number,
      required: false,
      default: 0
    }
  },
  computed: {
    gutter () {
      let parent = this.$parent;
      while (parent && parent.$options.name !== 'HRow') {
        parent = parent.$parent;
      }
      return parent ? parent.gutter : 0;
    },
    gutterStyle () {
      return {
        paddingLeft: `${this.gutter / 2}px`,
        paddingRight: `${this.gutter / 2}px`
      };
    }
  }
}
</script>