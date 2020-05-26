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
  flex: 1;
  font-family: var(--font-secondary);
}
</style>
