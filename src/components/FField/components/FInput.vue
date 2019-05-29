<template>
  <div>
    <template v-if="type === 'textarea'">
      <textarea :class="classes" v-bind="$attrs"></textarea>
    </template>
    <template v-else>
      <input
        v-bind="$attrs"
        :type="type"
        :class="classes"
        :disabled="disable"
        :readonly="readonly"
        @input="$emit('input', $event.target.value)"
      />
    </template>
  </div>
</template>

<script>
export default {
  name: "f-input",
  components: {},
  props: {
    value: [String, Number],

    disable: Boolean,
    readonly: Boolean,

    type: {
      default: "text",
      type: String
    }
  },
  computed: {
    classes() {
      return {
        "f-input": true,
        "f-input__textarea": this.type === "textarea",
        "f-input--readonly": this.readonly,
        "f-input--disabled": this.disable
      };
    }
  }
};
</script>

<style lang="scss" scoped>
.f-input {
  @apply shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight;
  &:focus {
    @apply outline-none shadow-outline;
  }
  &__textarea {
    @apply w-full;
  }
  &--hasError {
    @apply border border-red-300;
  }
  &--readonly {
    @apply text-gray-300;
  }
  &--disabled {
    @apply text-gray-300;
  }
}
</style>
