<template>
  <div class="f-chip" :class="classes" @click="onClick">
    <div class="f-chip__icon" v-if="icon">
      <slot name="icon">
        <f-icon :name="selected ? 'check' : icon" />
      </slot>
    </div>
    <div class="f-chip__content">
      <slot>{{ label }}</slot>
    </div>
    <div
      class="f-chip__close"
      v-if="removable"
      @click="onRemove($event, value)"
    >
      <slot name="close">
        <f-icon name="close" size="sm" />
      </slot>
    </div>
  </div>
</template>

<script>
import { FIcon } from "..";
export default {
  name: "f-chip",
  components: {
    FIcon
  },
  props: {
    label: String,
    value: [String, Number],
    color: String,
    textColor: String,
    icon: String,
    removable: Boolean,
    disable: Boolean,
    selected: {
      type: Boolean,
      default: null
    }
  },
  computed: {
    colors() {
      return {
        [`color--text--${this.textColor}`]: !!this.textColor,
        [`color--${this.color}`]: !!this.color
      };
    },
    isDisabled() {
      if (!this.disable) return {};
      return { ["f-chip--disabled"]: this.disable };
    },
    classes() {
      return {
        ...this.colors,
        ...this.isDisabled
      };
    }
  },
  methods: {
    onRemove(e, value) {
      if (!this.disable) this.$emit("remove", value);

      e.stopPropagation();
    },
    onClick(e) {
      if (this.disable) return false;

      this.$emit("update:selected", !this.selected);
      this.$emit("click", e);

      e.stopPropagation();
    }
  }
};
</script>

<style lang="scss" scoped>
.f-chip {
  @apply flex flex-no-wrap inline-flex items-center align-middle;
  @apply bg-primary text-white;
  @apply py-1 px-3 mx-1 rounded-full;
  @apply outline-none relative select-none cursor-pointer;
  @apply border;
  transition: 0.3s;
  min-height: 23px;

  &__icon {
    @apply flex align-middle align-middle rounded-full m-0 p-0 mr-2 leading-normal;
    i {
      @apply text-xl;
    }
  }
  &__content {
    @apply flex align-middle flex-no-wrap whitespace-no-wrap;
    @apply font-light font-secondary text-sm antialiased leading-none;
  }
  &__close {
    @apply flex align-middle m-0 p-0 ml-2 -mr-1;
    &:hover {
      @apply opacity-50;
    }
  }
  &--disabled {
    @apply opacity-75;
    .f-chip__close {
      &:hover {
        @apply opacity-50;
      }
    }
  }
}

@import "../../assets/f-colors.scss";
</style>
