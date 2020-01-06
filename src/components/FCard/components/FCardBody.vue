<template>
  <div class="f-card-body">
    <slot />
  </div>
</template>

<script>
export default {
  name: 'f-card-body'
}
</script>

<style lang="scss" scoped>
.f-card-body {
  @apply font-secondary my-4;
}
</style>
