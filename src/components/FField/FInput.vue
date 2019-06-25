<template>
  <component
    :is="componentIs"
    :type="type"
    :class="classes"
    :disabled="disabled"
    :readonly="readonly"
    :name="name"
    v-bind="$attrs"
    @input="runMask"
    @focus="$emit('focus', $event)"
    @blur="$emit('blur', $event)"
    @keyup="$emit('keyup', $event)"
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
    return {
      innerValue: this.__getInitialMaskedValue()
    };
  },
  props: {
    value: [String, Number],

    disabled: Boolean,
    readonly: Boolean,

    name: {
      default: "",
      type: String,
      required: true
    },
    type: {
      default: "text",
      type: String,
      validator: val =>
        [
          "text",
          "password",
          "tel",
          "url",
          "email",
          "textarea",
          "number"
        ].includes(val)
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
        "f-input--disabled": this.disabled
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
  @apply appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight h-10 inline w-full;
  &:focus {
    @apply outline-none;
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
