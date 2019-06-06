<template>
  <div class="f-card-title">
    <slot />
  </div>
</template>

<script>
export default {};
</script>

<style lang="scss" scoped>
.f-card-title {
  @apply font-primary w-full font-bold mb-4 text-lg;
  color: theme("colors.primary");
}
</style>
