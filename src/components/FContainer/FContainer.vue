<template>
  <div v-bind="$attrs" class="f-container">
    <slot></slot>
  </div>
</template>

<script>
export default {
  name: 'f-container'
}
</script>

<style lang="scss" scoped>
.f-container {
  margin-left: auto;
  margin-right: auto;
  padding-left: 1rem;
  padding-right: 1rem;
}
</style>
