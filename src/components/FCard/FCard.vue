<template>
  <section class="f-card">
    <slot name="image-header">
      <f-image v-if="headerBg" rounded-t :src="headerBg" />
    </slot>
    <main class="f-card__content">
      <slot></slot>
    </main>
  </section>
</template>

<script>
import FImage from "../FImage/FImage";

export default {
  name: "f-card",
  components: {
    FImage
  },
  props: {
    headerBg: String
  }
};
</script>

<style lang="scss" scoped>
.f-card {
  @apply max-w-full mx-auto bg-white rounded-lg shadow-md;
  .f-card__content {
    @apply p-6;
  }
}
</style>
