<template>
  <span class="f-icon">
    <f-icon-material
      v-if="lib === 'material'"
      v-bind="{ name: $props.name, type: $props.type }"
      :class="classes"
    />
    <f-icon-flux
      v-if="lib === 'flux'"
      v-bind="{ name: $props.name, type: $props.type }"
      :class="classes"
      :size="iconSize"
      :clickable="clickable"
    />
  </span>
</template>

<script>
import FIconFlux from './components/FIconFlux'
import FIconMaterial from './components/FIconMaterial'

export default {
  name: 'f-icon',
  components: {
    FIconMaterial,
    FIconFlux
  },
  props: {
    color: {
      type: String,
      deafult: 'primary'
    },
    lib: {
      default: 'material',
      type: String
    },
    type: {
      default: 'default',
      type: String
    },
    size: {
      type: String,
      default: 'base',
      validator: val => ['base', 'sm', 'xs', 'lg'].includes(val)
    },
    name: {
      default: 'hardware',
      type: String,
      required: true
    },
    clickable: {
      type: Boolean,
      default: true
    }
  },
  computed: {
    classes() {
      return {
        [`color--fill--${this.color}`]: !!this.color,
        [`color--text--${this.color}`]: !!this.color,
        [`f-icon--${this.size}`]: !!this.size,
        [`f-icon-flux--${this.size}`]: this.lib === 'flux' ? this.size : false
      }
    },
    iconSize() {
      return ['sm', 'xs'].includes(this.size) ? 16 : 24
    }
  }
}
</script>

<style lang="scss" scoped>
.f-icon {
  padding: 0;
  margin: 0;
  line-height: 0;
  &-flux {
    &--xs {
      height: 12px;
      width: 12px;
    }
    &--sm {
      height: 16px;
      width: 16px;
    }
    &--base {
      height: 24px;
      width: 24px;
    }
    &--lg {
      height: 32px;
      width: 32px;
    }
  }
  &--xs {
    font-size: var(--text-xs);
  }
  &--sm {
    font-size: var(--text-sm);
  }
  &--base {
    font-size: var(--text-base);
  }
  &--lg {
    font-size: var(--text-lg);
  }
}
</style>
