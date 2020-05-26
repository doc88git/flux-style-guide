<template>
  <div class="f-card-title">
    <slot />
  </div>
</template>

<script>
export default {
  name: 'f-card-title'
}
</script>

<style lang="scss" scoped>
.f-card-title {
  font-family: var(--font-primary);
  font-weight: bold;
  margin-bottom: 1rem;
  width: 100%;
  font-size: var(--text-xl);
}
</style>
