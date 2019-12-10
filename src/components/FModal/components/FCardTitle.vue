<template>
  <div class="f-card-title">
    <slot />
  </div>
</template>

<script>
export default {
  name: "f-card-title"
};
</script>

<style lang="scss">
.f-card-title {
  @apply font-primary w-full font-bold mb-4 text-lg;
}
</style>
