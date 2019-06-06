<template>
  <div v-bind="$attrs" class="f-container">
    <slot></slot>
  </div>
</template>

<script>
export default {
  name: "f-container"
};
</script>

<style lang="scss" scoped>
.f-container {
  @apply mx-auto px-4;
}
</style>
