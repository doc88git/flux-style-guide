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
  font-family: var(--font-secondary);
  margin-top: 1rem;
  margin-bottom: 1rem;
}
</style>
