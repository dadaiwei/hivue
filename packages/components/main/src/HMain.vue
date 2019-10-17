<template>
  <main class="h-main" :style="{height: `${height}px`}">
    <slot></slot>
  </main>
</template>

<script>
export default {
  name: 'HMain',
  props: {
    height: {
      type: Number,
      default: 400
    }
  }
}
</script>