<template>
  <div class="f-card-actions" :class="classes">
    <slot />
  </div>
</template>

<script>
export default {
  name: 'f-card-actions',
  props: {
    align: {
      type: String,
      default: 'center'
    }
  },
  computed: {
    classes() {
      return {
        ['f-card-actions--align-center']: this.align === 'center',
        ['f-card-actions--align-justify']: this.align === 'justify',
        ['f-card-actions--align-left']: this.align === 'left',
        ['f-card-actions--align-right']: this.align === 'right'
      }
    }
  }
}
</script>

<style lang="scss" scoped>
.f-card-actions {
  // @apply flex flex-no-wrap items-center content-center;
  display: flex;
  flex-wrap: wrap;
  align-items: center;
  align-content: center;
  &--align-center {
    @apply justify-center;
    justify-content: center;
  }
  &--align-justify {
    @apply justify-between;
    justify-content: space-between;
  }
  &--align-left {
    @apply justify-start;
    justify-content: flex-start;
  }
  &--align-right {
    @apply justify-end;
    justify-content: flex-end;
  }
}
</style>
