<template>
  <section class="f-card" :style="{ boxShadow: shadow }">
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
    headerBg: String,
    shadow: {
      type: String,
      default: '0px 5px 25px 0px rgba(0, 0, 0, .1)'
    }
  }
}
</script>

<style lang="scss" scoped>
.f-card {
  max-width: 100%;
  margin-left: auto;
  margin-right: auto;
  background-color: var(--color-white);
  border-radius: 0.5rem;
  box-shadow: 0 4px 6px -1px rgba(0, 0, 0, 0.1),
    0 2px 4px -1px rgba(0, 0, 0, 0.06);
  width: 100%;
  .f-card__content {
    display: flex;
    flex-direction: column;
    padding: 1.5rem;
    height: 100%;
  }
}
</style>
