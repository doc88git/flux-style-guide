<template>
  <div class="f-separator"></div>
</template>

<script>
export default {
  name: 'f-separator'
}
</script>

<style lang="scss">
.f-separator {
  display: block;
  width: 100%;
  box-shadow: 0 1px 3px 0 rgba(0, 0, 0, 0.1), 0 1px 2px 0 rgba(0, 0, 0, 0.06);
  background-color: var(--color-gray-500);
  opacity: 0.25;
  height: 1px;
  min-height: 1px;
  margin-top: 16px;
  margin-bottom: 16px;
}
</style>
