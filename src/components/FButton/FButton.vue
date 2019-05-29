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
    outline: {
      default: false,
      type: Boolean
    },
    flat: {
      default: false,
      type: Boolean
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
        ["btn__default"]: !this.flat && !this.outline,
        ["btn__flat"]: this.flat === true,
        ["btn__outline"]: this.outline === true
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
    @apply text-white;
    background-color: theme("colors.primary");
    &:hover {
      background-color: theme("colors.primary-lighter");
    }
  }
  &__flat {
    @apply bg-transparent;
    color: theme("colors.primary");
    &:hover {
      color: theme("colors.primary-lighter");
    }
  }
  &__outline {
    @apply bg-transparent border rounded;
    color: theme("colors.primary");
    border-color: theme("colors.primary");
    &:hover {
      color: theme("colors.primary-lighter");
      border-color: theme("colors.primary-lighter");
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
