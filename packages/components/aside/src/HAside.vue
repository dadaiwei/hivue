<template>
  <aside class="h-aside" :style="{width: `${width}px`}">
     <slot></slot>
  </aside>
</template>

<script>
export default {
  name: 'HAside',
  props: {
    width: {
      type: Number,
      default: 300
    }
  }
}
</script>

<style>

</style>