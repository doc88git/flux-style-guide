<template>
  <div class="f-separator"></div>
</template>

<script>
export default {
  name: "f-separator"
};
</script>

<style lang="scss">
.f-separator {
  @apply block w-full shadow bg-gray-500 opacity-25;
  height: 1px;
  min-height: 1px;
  margin-top: 16px;
  margin-bottom: 16px;
}
</style>
