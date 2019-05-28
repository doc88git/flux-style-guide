<template>
  <button class="btn" :class="[btnStyle, btnIcon]" @click="$emit('click')">
    <f-icon
      v-if="icon"
      class="btn__slot__icon"
      :class="[btnCenter]"
      :name="icon"
    />
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
    btnIcon() {
      return this.icon ? "btn--flex" : "";
    },
    btnCenter() {
      if (this.name || this.hasDefaultSlot) return "";
      return "btn__slot__icon--center";
    },
    hasDefaultSlot() {
      return !!this.$slots.default;
    }
  }
};
</script>

<style lang="scss">
.btn {
  @apply text-center py-1 px-2 m-1 rounded;
  &__default {
    @apply bg-blue-500 text-white;
    &:hover {
      @apply bg-blue-300;
    }
  }
  &__flat {
    @apply bg-transparent;
    &:hover {
      @apply text-gray-700;
    }
  }
  &__outline {
    @apply bg-transparent border border-blue-500 text-blue-700 rounded;
    &:hover {
      @apply border-blue-400 text-blue-400;
    }
  }
  &--flex {
    @apply inline-flex items-center;
  }
  &__slot {
    &__icon {
      @apply fill-current h-6 mr-2;
      &--center {
        @apply ml-2;
      }
    }
  }
}
</style>
