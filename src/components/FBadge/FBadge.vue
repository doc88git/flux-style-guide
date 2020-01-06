<template>
  <div class="f-badge" :class="classes">
    <slot>{{ label }}</slot>
  </div>
</template>

<script>
export default {
  name: 'f-badge',
  props: {
    color: String,
    textColor: String,

    floating: Boolean,
    transparent: Boolean,
    multiLine: Boolean,

    label: [Number, String],

    align: {
      type: String,
      validator: v => ['top', 'middle', 'bottom'].includes(v)
    }
  },
  computed: {
    lineType() {
      let type = this.multiLine ? 'multi' : 'single'
      return { [`f-badge--${type}-line`]: true }
    },
    colors() {
      return {
        [`color--text--${this.textColor}`]: !!this.textColor,
        [`color--${this.color}`]: !!this.color
      }
    },
    position() {
      if (!this.align) return {}

      return { [`f-badge--align-${this.align}`]: !!this.align }
    },
    classes() {
      return {
        ['f-badge--floating']: this.floating,
        ['f-badge--transparent']: this.transparent,
        ...this.colors,
        ...this.lineType,
        ...this.position
      }
    }
  }
}
</script>

<style lang="scss" scoped>
.f-badge {
  @apply flex inline-flex items-center;
  @apply bg-primary text-white;
  @apply py-1 px-2 rounded-lg text-xs align-baseline;
  line-height: 0.875rem;

  &--single-line {
    @apply truncate;
  }

  &--multi-line {
    @apply break-all break-words;
  }

  &--floating {
    @apply absolute pointer-events-none;
    top: -4px;
    right: -3px;
  }

  &--transparent {
    @apply opacity-75;
  }

  &--align {
    &-top {
      @apply align-top #{!important};
    }
    &-middle {
      @apply align-middle #{!important};
    }
    &-bottom {
      @apply align-bottom #{!important};
    }
  }
}

@import '../../assets/f-colors.scss';
</style>
