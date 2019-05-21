<template>
  <div v-bind="$attrs" class="container">
    <slot></slot>
  </div>
</template>

<script>
export default {
  name: "f-container"
};
</script>

<style lang="scss" scoped></style>
