<template>
  <div class="f-list">
    <div class="f-list__content">
      <slot />
    </div>
  </div>
</template>

<script>
export default {
  name: 'f-list',
  components: {}
}
</script>

<style lang="scss" scoped>
.f-list {
  @apply flex items-center w-full;
  &__content {
    @apply overflow-hidden bg-white rounded w-full leading-normal;
  }
}
</style>
