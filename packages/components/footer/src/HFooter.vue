<template>
  <footer class="h-footer" :style="{height: `${height}px`}">
     <slot></slot>
  </footer>
</template>

<script>
export default {
  name: 'HFooter',
  props: {
    height: {
      type: Number,
      default: 60
    }
  }
}
</script>