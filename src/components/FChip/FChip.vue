<template>
  <div class="f-chip" :class="classes" @click="onClick">
    <div class="f-chip__icon" v-if="icon">
      <slot name="icon">
        <f-icon :name="selected ? 'check' : icon" />
      </slot>
    </div>
    <div class="f-chip__content">
      <slot>{{ label }}</slot>
    </div>
    <div
      class="f-chip__close"
      v-if="removable"
      @click="onRemove($event, value)"
    >
      <slot name="close">
        <f-icon name="close" size="sm" />
      </slot>
    </div>
  </div>
</template>

<script>
import { FIcon } from '..'
export default {
  name: 'f-chip',
  components: {
    FIcon
  },
  props: {
    label: String,
    value: [String, Number],
    color: String,
    textColor: String,
    icon: String,
    removable: Boolean,
    disable: Boolean,
    selected: {
      type: Boolean,
      default: null
    }
  },
  computed: {
    colors() {
      return {
        [`color--text--${this.textColor}`]: !!this.textColor,
        [`color--${this.color}`]: !!this.color
      }
    },
    isDisabled() {
      if (!this.disable) return {}
      return { ['f-chip--disabled']: this.disable }
    },
    classes() {
      return {
        ...this.colors,
        ...this.isDisabled
      }
    }
  },
  methods: {
    onRemove(e, value) {
      if (!this.disable) this.$emit('remove', value)

      e.stopPropagation()
    },
    onClick(e) {
      if (this.disable) return false

      this.$emit('update:selected', !this.selected)
      this.$emit('click', e)

      e.stopPropagation()
    }
  }
}
</script>

<style lang="scss" scoped>
.f-chip {
  flex-wrap: nowrap;
  display: inline-flex;
  align-items: center;
  vertical-align: middle;
  background-color: var(--color-primary);
  color: var(--color-white);
  padding: 0.25rem 0.75rem;
  border-radius: 0.5rem;
  outline: 0;
  position: relative;
  user-select: none;
  cursor: pointer;
  border-width: 1px;
  transition: 0.3s;
  min-height: 23px;

  &__icon {
    display: flex;
    vertical-align: middle;
    border-radius: 9999px;
    margin: 0;
    padding: 0;
    margin-right: 0.5rem;
    line-height: 1.5;
    i {
      font-size: 1.25rem;
    }
  }
  &__content {
    display: flex;
    vertical-align: middle;
    flex-wrap: nowrap;
    white-space: nowrap;

    color: var(--color-white);
    font-size: 0.875rem;
    -webkit-font-smoothing: antialiased;
    -moz-osx-font-smoothing: grayscale;
    line-height: 1;
  }
  &__close {
    display: flex;
    vertical-align: middle;
    margin: 0;
    padding: 0;
    margin-left: 0.5rem;
    margin-right: -0.25rem;
    &:hover {
      opacity: 0.5;
    }
  }
  &--disabled {
    opacity: 0.75;
    .f-chip__close {
      &:hover {
        opacity: 0.5;
      }
    }
  }
}

@import '../../assets/f-colors.scss';
</style>
