<template>
  <span class="f-icon">
    <f-icon-material
      v-if="lib === 'material'"
      v-bind="{ name: $props.name, type: $props.type }"
      :class="classes"
    />
  </span>
</template>

<script>
import FIconMaterial from './components/FIconMaterial'
export default {
  name: 'f-icon',
  components: {
    FIconMaterial
  },
  props: {
    color: String,
    lib: {
      default: 'material',
      type: String
    },
    type: {
      default: 'default',
      type: String
    },
    size: {
      default: 'base',
      type: String
    },
    name: {
      default: '',
      type: String,
      required: true
    }
  },
  computed: {
    classes() {
      return {
        [`color--text--${this.color}`]: !!this.color,
        [`f-icon--${this.size}`]: !!this.size
      }
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
