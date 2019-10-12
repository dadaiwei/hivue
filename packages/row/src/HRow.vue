<!--
 * @File: HRow.vue
 * @Description: 行组件
 * @Author: Dadaiwei
 * @Date: 2019-01-24 18:06:55
 * @LastEditor: Dadaiwei
 * @LastEditTime: 2019-05-21 09:58:59
 -->
<template>
  <div
    :class="['h-row', type ? 'h-row--'+ type : '',  
              justify? 'is-justify-' + justify : '',
              align? 'is-align-' + align : '']"
  >
    <slot></slot>
  </div>
</template>

<script>
export default {
  name: 'HRow',
  props: {
    gutter: { // 间隔
      type: Number,
      requird: false,
      default: 0
    },
    type: { // 布局方式，可选flex
      type: String,
      required: false
    },
    justify: { // flex布局下的水平对齐方式，start/end/center/space-around/space-between/space-evenly
      type: String,
      requird: false
    },
    align: { // flex布局下的垂直对齐方式，top/middle/bottom
      type: String,
      required: false
    }
  }
}
</script>