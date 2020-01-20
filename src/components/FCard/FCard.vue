<template>
  <section class="f-card">
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
    headerBg: String
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
