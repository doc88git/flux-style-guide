<template>
  <div class="FSeparator" :class="classes" />
</template>

<script>
export default {
  name: 'FSeparator',
  props: {
    margin: {
      type: String,
      default: 'default',
      validator: val => ['sm', 'lg', 'default'].includes(val)
    }
  },
  computed: {
    classes() {
      return {
        [`FSeparator--${this.margin}`]: !!this.margin
      }
    }
  }
}
</script>

<style lang="scss">
.FSeparator {
  display: block;
  width: 100%;
  box-shadow: 0 1px 3px 0 rgba(0, 0, 0, 0.1), 0 1px 2px 0 rgba(0, 0, 0, 0.06);
  background-color: var(--color-gray-500);
  opacity: 0.25;
  height: 1px;
  min-height: 1px;
  margin-top: 16px;
  margin-bottom: 16px;

  &--sm {
    margin: 4px 0;
  }

  &--default {
    margin: 12px 0;
  }

  &--lg {
    margin: 16px 0;
  }
}
</style>
