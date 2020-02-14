<template>
  <section class="f-card" :class="classes">
    <slot name="image-header">
      <f-image v-if="headerImage" rounded-t :src="headerImage" />
    </slot>
    <slot name="content">
      <main class="f-card__content">
        <slot></slot>
      </main>
    </slot>
  </section>
</template>

<script>
import FImage from '../FImage/FImage'

export default {
  name: 'f-card',
  components: {
    FImage
  },
  props: {
    padding: {
      type: String,
      default: 'base'
    },
    borderRadius: {
      type: String,
      default: 'base'
    },
    margin: {
      type: String,
      default: ''
    },
    bgColor: {
      type: String,
      default: 'white'
    },
    textColor: {
      type: String,
      default: 'font-base'
    },
    headerImage: {
      type: [String, Function],
      default: ''
    }
  },
  computed: {
    classes() {
      return [
        `p--${this.padding}`,
        `br--${this.borderRadius}`,
        `m--${this.margin}`,
        `color--background--${this.bgColor}`,
        `color--text--${this.textColor}`
      ]
    }
  }
}
</script>

<style lang="scss" scoped>
.f-card {
  max-width: 100%;
  box-shadow: var(--shadow-base);
  width: 100%;
  .f-card__content {
    display: flex;
    flex-direction: column;
    height: 100%;
  }
}
</style>
