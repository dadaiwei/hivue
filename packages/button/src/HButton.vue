<!--
 * @File: HButton.vue
 * @Description: 按钮
 * @Author: Dadaiwei
 * @Date: 2018-12-10 18:33:29
 * @LastEditor: Dadaiwei
 * @LastEditTime: 2019-08-06 11:58:48
 -->
<template>
  <button
    class="h-button"
    :disabled="disabled && loading"
    :autofocus="autofocus"
    :type="nativeType"
    :class="[
              type ? 'h-button-' + type : '',
              size ? 'h-button-' + size : '',
              shape? 'h-button-' + shape : '',
              {
                'loading': loading,
                'active': active
              }]"
    @click="handleClick"
  >
    <i v-if="loading && type !== 'text'" class="iconfont icon-loading h-button-loading"></i>
    <i v-if="icon && !loading" :class="['iconfont', 'icon-' + icon]" class="h-button-icon"></i>
    <span v-if="$slots.default">
      <slot></slot>
    </span>
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
      // 尺寸，mini/small/large
      type: String,
      required: false
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
    shape: {
      // 按钮形状，circle/round
      type: String,
      required: false,
      default: ""
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
      default: "button"
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