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
  display: inline-flex;
  -ms-flex-align: center;
  align-items: center;
  background-color: var(--color-primary);
  color: #fff;
  padding-top: 0.25rem;
  padding-bottom: 0.25rem;
  padding-left: 0.5rem;
  padding-right: 0.5rem;
  border-radius: 0.5rem;
  font-size: var(--text-xs);
  vertical-align: baseline;
  line-height: 0.875rem;

  &--single-line {
    overflow: hidden;
    text-overflow: ellipsis;
    white-space: nowrap;
  }

  &--multi-line {
    word-break: break-all;
    overflow-wrap: break-word;
  }

  &--floating {
    position: absolute;
    pointer-events: none;
    top: -4px;
    right: -3px;
  }

  &--transparent {
    opacity: 0.75;
  }

  &--align {
    &-top {
      vertical-align: top;
    }
    &-middle {
      vertical-align: middle;
    }
    &-bottom {
      vertical-align: bottom;
    }
  }
}
</style>
