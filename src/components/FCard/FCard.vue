<template>
  <section class="f-card" :class="classes">
    <slot name="image-header">
      <f-image v-if="headerBg" rounded-t :src="headerBg" />
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
      default: 'sm'
    },
    borderRadius: {
      type: String,
      default: 'sm'
    },
    margin: {
      type: String,
      default: 'sm'
    },
    bgColor: {
      type: String,
      default: 'white'
    },
    textColor: {
      type: String,
      default: 'font-base'
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
  background-color: var(--color-white);
  box-shadow: var(--shadow-base);
  width: 100%;
  .f-card__content {
    display: flex;
    flex-direction: column;
    padding: 1.5rem;
    height: 100%;
  }
}
</style>
