<template>
  <div class="f-sticky" :class="{ 'f-sticky--fixed': fixed }" :style="style">
    <slot></slot>
  </div>
</template>

<script>
export default {
  name: 'f-sticky',
  props: {
    top: {
      type: [Number, String],
      default: 0
    }
  },
  data: () => ({
    scrollY: null,
    fixed: false,
    style: {},
    originalTop: 0
  }),
  mounted() {
    this.originalTop = this.$el.getBoundingClientRect().top

    window.addEventListener('scroll', this.getScrollY)
  },
  beforeDestroy() {
    window.removeEventListener('scroll', this.getScrollY)
  },
  watch: {
    scrollY() {
      const newTop = this.scrollY - this.originalTop

      if (newTop > 0) {
        this.fixed = true
        this.$set(this.style, 'transform', `translateY(${this.top}px)`)
      } else {
        this.fixed = false
        this.$delete(this.style, 'transform')
      }
    },
    fixed(newVal) {
      this.$emit('sticked', newVal)
    }
  },
  methods: {
    getScrollY() {
      this.scrollY = Math.round(window.scrollY)
    }
  }
}
</script>

<style lang="scss">
.f-sticky {
  position: relative;
  width: 100%;
  top: 0;
  left: 0;
  transition: transform 0.3s linear;

  &--fixed {
    position: fixed;
    z-index: 100;
  }
}
</style>
