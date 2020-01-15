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
  display: flex;
  align-items: center;
  width: 100%;
  &__content {
    overflow: hidden;
    background-color: var(--color-white);
    border-radius: 0.25rem;
    width: 100%;
    line-height: 1.5;
  }
}
</style>
