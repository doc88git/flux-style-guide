<template>
  <span
    class="f-icon"
    @mouseover="setHover(true)"
    @mouseleave="setHover(false)"
  >
    <f-icon-material
      v-if="lib === 'material'"
      v-bind="{ name: $props.name, type: $props.type }"
      :class="{ ...hover, ...classes }"
    />
    <f-icon-flux
      v-if="lib === 'flux'"
      v-bind="{ name: $props.name, type: $props.type }"
      :class="{ ...hover, ...classes }"
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
  data: () => ({
    hover: {}
  }),
  props: {
    color: {
      type: String,
      deafult: 'primary'
    },
    hoverColor: {
      type: String,
      deafult: 'primary'
    },
    lib: {
      default: 'material',
      validator: val => ['flux', 'material'].includes(val)
    },
    type: {
      default: 'default',
      type: String
    },
    size: {
      type: String,
      default: 'base',
      validator: val => ['xs', 'sm', 'base', 'lg', 'xl', '2xl'].includes(val)
    },
    name: {
      default: 'hardware',
      type: String,
      required: true
    },
    clickable: {
      type: Boolean,
      default: false
    }
  },
  computed: {
    isHover() {
      return Object.keys(this.hover).length
    },
    classes() {
      return {
        [`color--fill--${this.color}`]: !this.isHover ? !!this.color : '',
        [`color--text--${this.color}`]: !this.isHover ? !!this.color : '',
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
  },
  methods: {
    setHover(status) {
      if (!status) return (this.hover = {})

      this.hover = {
        [`color--fill--${this.hoverColor}`]: !!this.hoverColor,
        [`color--text--${this.hoverColor}`]: !!this.hoverColor
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
