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
import FImage from "../FImage/FImage";

export default {
  name: "f-card",
  components: {
    FImage
  },
  props: {
    headerBg: String,
    shadow: {
      type: String,
      default: "0px 5px 25px 0px rgba(0, 0, 0, .1)"
    }
  }
};
</script>

<style lang="scss">
.f-card {
  @apply max-w-full mx-auto bg-white rounded-lg shadow-md;
  width: 100%;
  .f-card__content {
    @apply p-6;
    height: 100%;
  }
}
</style>
