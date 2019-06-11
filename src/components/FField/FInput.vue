<template>
  <component
    :is="componentIs"
    :type="type"
    :class="classes"
    :disabled="disable"
    :readonly="readonly"
    @input="runMask"
    ref="input"
    class="f-input"
  />
</template>

<script>
import MaskMixin from "../../mixins/mask.js";

export default {
  name: "f-input",
  components: {},
  mixins: [MaskMixin],
  data() {
    return { innerValue: this.__getInitialMaskedValue() };
  },
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
    componentIs() {
      return this.isTextarea ? "textarea" : "input";
    },
    isTextarea() {
      return this.type === "textarea";
    },
    classes() {
      return {
        "f-input": true,
        "f-input__textarea": this.type === "textarea",
        "f-input--readonly": this.readonly,
        "f-input--disabled": this.disable
      };
    }
  },
  methods: {
    runMask(e) {
      let value = e.target.value;

      if (this.mask && !this.isTextarea) return this.__updateMaskValue(value);

      this.__emitValue(value);
    },
    __emitValue(value) {
      this.$emit("input", value);
    }
  }
};
</script>

<style lang="scss" scoped>
.f-input {
  @apply shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight h-10 inline w-full;
  &:focus {
    @apply outline-none shadow-md;
  }
  &__textarea {
    @apply w-full;
  }
  &--hasError {
    @apply border border-red-500;
  }
  &--readonly {
    @apply text-gray-300;
  }
  &--disabled {
    @apply text-gray-300;
  }
}
</style>
