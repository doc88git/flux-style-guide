<template>
  <button class="btn" :class="[btnStyle, btnHover, btnIcon]">
    <f-icon v-if="icon" class="btn__icon" :name="icon" />
    {{ label }}
    <slot></slot>
  </button>
</template>

<script>
import { FIcon } from "../FIcon";

export default {
  name: "f-button",
  components: {
    FIcon
  },
  props: {
    type: {
      default: "default",
      type: String
    },
    label: {
      default: "",
      type: String,
      required: false
    },
    icon: {
      default: "",
      type: String,
      required: false
    }
  },
  computed: {
    hasName() {
      return this.name === "";
    },
    btnStyle() {
      return {
        ["btn__default"]: this.type === "default",
        ["btn__flat"]: this.type === "flat",
        ["btn__outline"]: this.type === "outline"
      };
    },
    btnHover() {
      return {
        ["hover:bg-blue-300"]: this.type === "default",
        ["hover:text-gray-700"]: this.type === "flat",
        ["hover:border-blue-400 hover:text-blue-400"]: this.type === "outline"
      };
    },
    btnIcon() {
      return this.icon ? "inline-flex items-center" : "";
    }
  }
};
</script>

<style lang="scss">
.btn {
  @apply text-center py-1 px-2 m-1 rounded;
  &__default {
    @apply bg-blue-500 text-white;
  }
  &__flat {
    @apply bg-transparent;
  }
  &__outline {
    @apply bg-transparent border border-blue-500 text-blue-700 rounded;
  }
  &__icon {
    @apply fill-current w-8 h-6 -ml-4;
  }
}
</style>
