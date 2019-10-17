<template>
  <section class="h-container" :class="{'is-vertical': isVertical}">
    <slot></slot>
  </section>
</template>

<script>
export default {
  name: 'HContainer',
  props: {
    direction: String
  },
  computed: {
    isVertical () {
      if (this.direction === 'vertical') {
        return true
      } else if (this.direction === 'horizontal') {
        return false
      }
      if (this.$slots && this.$slots.default) {
        return this.$slots.default.some(vnode => {
          const tag = vnode.componentOptions && vnode.componentOptions.tag
          return tag === 'h-header' || tag === 'h-footer'
        })
      }
      return false
    }
  }
}
</script>
