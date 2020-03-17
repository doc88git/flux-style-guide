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
      validator: val => ['base', 'sm'].includes(val)
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
        [`f-icon--${this.size}`]: !!this.size
      }
    },
    iconSize() {
      return this.size === 'sm' ? 16 : 24
    }
  }
}
</script>

<style lang="scss" scoped>
.f-icon {
  padding: 0;
  margin: 0;
  line-height: 0;
  &--xs {
    font-size: 0.75rem;
  }
  &--sm {
    font-size: 0.875rem;
  }
  &--base {
    font-size: 1rem;
  }
  &--lg {
    font-size: 1.25rem;
  }
}
</style>
