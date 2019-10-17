<template>
  <header class="h-header" :style="{height: `${height}px`}">
    <slot></slot>
  </header>
</template>

<script>
export default {
  name: 'HHeader',
  props: {
    height: {
      type: Number,
      default: 60
    }
  }
}
</script>