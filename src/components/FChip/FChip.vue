<template>
  <div class="f-chip" :class="classes" @click="onClick">
    <div
      class="f-chip__icon"
      :class="{ 'f-chip__icon-selectable': selected }"
      v-if="icon"
    >
      <slot name="icon">
        <f-icon
          lib="flux"
          size="sm"
          :clickable="false"
          :color="iconColor"
          :name="selected ? 'check' : icon"
        />
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
        <f-icon name="X" lib="flux" size="xs" :color="textColor" />
      </slot>
    </div>
  </div>
</template>

<script>
import FIcon from '../FIcon/FIcon'

export default {
  name: 'f-chip',
  components: {
    FIcon
  },
  props: {
    label: [String, Number],
    value: [String, Number],
    color: {
      type: String,
      default: 'primary'
    },
    iconColor: {
      type: String,
      default: 'white'
    },
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
  justify-content: space-between;
  align-items: center;
  vertical-align: middle;
  color: var(--color-white);
  padding: 0.25rem 0.75rem;
  border-radius: 12px;
  outline: 0;
  position: relative;
  user-select: none;
  transition: 0.3s;
  min-height: 23px;
  margin: 0 1px;

  &__icon {
    display: flex;
    vertical-align: middle;
    border-radius: 9999px;
    margin: 0;
    padding: 0;
    margin-right: 0.5rem;
    line-height: 1.5;
    &-selectable {
      cursor: pointer;
    }
  }
  &__content {
    display: flex;
    vertical-align: middle;
    flex-wrap: nowrap;
    white-space: nowrap;

    color: var(--color-white);
    font-size: var(--text-base);
    -webkit-font-smoothing: antialiased;
    -moz-osx-font-smoothing: grayscale;
    line-height: 1;
  }
  &__close {
    cursor: pointer;
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
</style>
