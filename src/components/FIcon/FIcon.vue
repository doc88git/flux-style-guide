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
$size: xs sm base lg;

.f-icon {
  @apply p-0 m-0;
  line-height: 0;

  @each $s in $size {
    &--#{$s} {
      @apply text-#{$s};
    }
  }
}

@import '../../assets/f-colors.scss';
</style>
