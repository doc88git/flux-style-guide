<template>
  <button
    class="btn"
    :class="[btnStyle, btnIcon]"
    @click="$emit('click')"
    @mouseleave="blur"
    @click.stop="blur"
  >
    <f-icon v-if="icon" class="btn__icon" :class="[btnCenter]" :name="icon" />
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
    outline: Boolean,
    flat: Boolean,
    label: String,
    icon: String,
    color: String,
    textColor: String
  },
  computed: {
    hasName() {
      return this.label === "";
    },
    hasBg() {
      return !this.flat && !this.outline;
    },
    btnStyle() {
      let btnDefault = {
        ["btn--default"]: !this.flat && !this.outline,
        [`bg-${this.color}`]: !!this.color && this.hasBg,
        [`hover:bg-${this.color}-400`]: !!this.color && this.hasBg,
        [`focus:bg-${this.color}-600`]: !!this.color && this.hasBg
      };
      let btnOutlined = {
        ["btn--flat"]: this.flat === true,
        [`text-${this.color}`]: !!this.color && !this.hasBg,
        [`hover:text-${this.color}-400`]: !!this.color && !this.hasBg,
        [`focus:text-${this.color}-600`]: !!this.color && !this.hasBg,
        [`border-${this.color}`]: !!this.color && this.outline
      };
      let btnFlat = {
        ["btn--outline"]: this.outline === true,
        [`hover:border-${this.color}-400`]: !!this.color && this.outline,
        [`focus:border-${this.color}-600`]: !!this.color && this.outline
      };

      return {
        ...btnDefault,
        ...btnOutlined,
        ...btnFlat,
        [`text-${this.textColor}`]: !!this.textColor
      };
    },
    btnIcon() {
      return this.icon ? "btn--flex" : "";
    },
    btnCenter() {
      if (this.label || this.hasDefaultSlot) return "";
      return "btn__icon--center";
    },
    hasDefaultSlot() {
      return !!this.$slots.default;
    }
  },
  methods: {
    blur(e) {
      e.target.blur();
    }
  }
};
</script>

<style lang="scss">
.btn {
  @apply text-white;
  @apply text-center py-1 px-2 m-1 rounded bg-primary;
  &:hover {
    @apply bg-primary-lighter;
  }
  &:focus {
    @apply bg-primary-dark;
  }
  &--flat {
    @apply bg-transparent text-primary;
    &:hover {
      @apply bg-transparent text-primary-lighter;
    }
    &:focus {
      @apply bg-transparent text-primary-dark;
    }
  }
  &--outline {
    @apply bg-transparent border rounded border-primary text-primary;
    &:hover {
      @apply bg-transparent text-primary-lighter;
    }
    &:focus {
      @apply bg-transparent text-primary-dark;
    }
  }
  &--flex {
    @apply inline-flex items-center;
  }
  &__icon {
    @apply fill-current h-6 mr-2;
    &--center {
      @apply ml-2;
    }
  }
}
</style>
