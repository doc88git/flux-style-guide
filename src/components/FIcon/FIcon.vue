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
import FIconFlux from './FIconFlux'
import FIconMaterial from './FIconMaterial'

export default {
  name: 'f-icon',
  components: {
    FIconMaterial,
    FIconFlux
  },
  props: {
    /**
     * The color for the icon.
     */
    color: {
      type: String,
      deafult: 'primary'
    },
    /**
     * The lib used for icon
     * @values flux, material
     */
    lib: {
      default: 'material',
      validator: val => ['flux', 'material'].includes(val)
    },
    /**
     * The size of icon
     * @values xs, sm, base, lg, xl, 2xl
     */
    size: {
      type: String,
      default: 'base',
      validator: val => ['xs', 'sm', 'base', 'lg', 'xl', '2xl'].includes(val)
    },
    /**
     * The file name of icon
     */
    name: {
      type: String,
      required: true
    },
    /**
     * If icon is clickable, for opacity on mouse over
     */
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
      /* icon sizes
        xs: 8
        sm: 12
        base: 16
        lg: 24
        xl: 32
        2xl: 48
      */
      return ['xs', 'base', 'xl'].includes(this.size) ? 16 : 24
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
      height: 8px;
      width: 8px;
    }
    &--sm {
      height: 12px;
      width: 12px;
    }
    &--base {
      height: 16px;
      width: 16px;
    }
    &--lg {
      height: 24px;
      width: 24px;
    }
    &--xl {
      height: 32px;
      width: 32px;
    }
    &--2xl {
      height: 48px;
      width: 48px;
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
  &--xl {
    font-size: var(--text-xl);
  }
  &--2xl {
    font-size: var(--text-2xl);
  }
}
</style>
