<template>
  <div class="f-field">
    <label v-if="label" v-text="label" class="f-field__label" />
    <slot />
  </div>
</template>

<script>
export default {
  name: "f-field",
  props: {
    label: {
      default: "",
      type: String
    }
  }
};
</script>

<style lang="scss" scoped>
.f-field {
  @apply w-full;
  &__label {
    @apply block text-gray-700 text-sm font-bold mb-2;
  }
}
</style>
