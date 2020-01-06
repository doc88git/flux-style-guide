<template>
  <div class="f-card-separator"></div>
</template>

<script>
export default {
  name: 'f-card-separator'
}
</script>

<style lang="scss" scoped>
.f-card-separator {
  @apply block w-full shadow opacity-25;
  background-color: var(--color-gray-500);
  height: 1px;
  min-height: 1px;
  margin-top: 16px;
  margin-bottom: 16px;
}
</style>
