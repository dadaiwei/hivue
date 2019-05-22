<!--
 * @File: HButton.vue
 * @Description: 按钮
 * @Author: Dadaiwei
 * @Date: 2018-12-10 18:33:29
 * @LastEditor: Dadaiwei
 * @LastEditTime: 2019-05-21 09:50:25
 -->
<template>
  <button
    class="h-button"
    :disabled="disabled && !loading"
    :autofocus="autofocus"
    :type="nativeType"
    :class="[
              type ? 'h-button-' + type : '',
              size ? 'h-button-' + size : '',
              {
                'disabled': disabled,
                'loading': loading,
                'round': round,
                'active': active
              }]"
    @click="handleClick"
  >
    <i v-if="loading && type !== 'text'" class="iconfont icon-loading h-button-loading"></i>
    <i v-if="icon && !loading" :class="icon" class="h-button-icon"></i>
    <slot></slot>
  </button>
</template>

<script>
export default {
  name: "HButton",
  props: {
    type: {
      // 类型，default/primary/info/success/warning/danger/text
      type: String,
      required: false,
      default: "default"
    },
     size: {
      // 尺寸，mini/small/medium/big
      type: String,
      required: false,
      default: "medium"
    },
     disabled: {
      // 禁用
      type: Boolean,
      required: false,
      default: false
    },
    loading: {
      // 加载
      type: Boolean,
      required: false,
      default: false
    },
     active: {
      // 激活状态
      type: Boolean,
      required: false,
      default: false
    },
    round: {
      // 圆形
      type: Boolean,
      required: false,
      default: false
    },
    autofocus: {
      // 自动聚焦
      type: Boolean,
      required: false,
      default: false
    },
    icon: {
      // 按钮图标
      type: String,
      required: false
    },
    nativeType: {
      // 原生类型，button/submit/reset
      type: String,
      required: false,
      default: 'button'
    }
  },
  data() {
    return {};
  },
  methods: {
    /**
     * @method: handleClick
     * @description: 向父组件emit click事件并传回event对象
     * @param {Object} ev 事件对象
     * @return: {undefined}
     * @author: Dadaiwei
     */
    handleClick(ev) {
      this.$emit("click", ev);
    }
  }
};
</script>