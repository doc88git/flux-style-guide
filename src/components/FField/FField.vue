<template>
  <div class="f-field">
    <label v-if="label" v-text="label" class="f-field__label" />
    <slot />
    <p v-if="hasError" class="f-field__error-label">{{ errorMessage }}</p>
  </div>
</template>

<script>
export default {
  name: "f-field",
  props: {
    label: {
      default: "",
      type: String
    },
    hasError: {
      default: false,
      type: Boolean
    }
  },
  data: () => ({
    errorMessage: "Preencha o campo corretamente"
  })
};
</script>

<style lang="scss" scoped>
.f-field {
  @apply w-full mb-6;
  &:md {
    @apply mb-0;
  }
  &__label {
    @apply block uppercase tracking-wide text-gray-700 text-xs font-bold mb-2;
  }
  &__error-label {
    @apply text-red-500 text-xs italic;
  }
}
</style>
