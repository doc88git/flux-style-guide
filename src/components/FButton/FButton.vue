<template>
  <button
    class="btn"
    type="button"
    :class="[btnStyle, btnIcon]"
    @click="$emit('click')"
    @click.stop="blur"
    @mouseleave="blur"
  >
    <f-icon v-if="icon" class="btn__icon" :class="[btnCenter]" :name="icon" />
    <span>
      <slot> {{ label }} </slot>
    </span>
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
    small: Boolean,
    bigger: Boolean,
    dense: Boolean,
    label: String,
    icon: String,
    color: {
      type: String,
      default: "primary"
    },
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
        [`color--default--${this.color}`]: !this.flat && !this.outline
      };

      let btnFlat = {
        ["btn--flat"]: this.flat === true,
        [`color--flat--${this.color}`]: !!this.color && this.flat
      };

      let btnOutline = {
        ["btn--outline"]: this.outline === true,
        [`color--outline--${this.color}`]: !!this.color && this.outline
      };

      return {
        ...btnDefault,
        ...btnOutline,
        ...btnFlat,
        ["btn--small"]: this.small,
        ["btn--bigger"]: this.bigger,
        ["btn--dense"]: this.dense,
        [`color--text--${this.textColor}`]: !!this.textColor
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
@import "../../assets/f-colors.scss";

.btn {
  @apply font-primary text-center py-1 px-3 m-1 rounded text-base uppercase h-10;
  &:hover {
    @apply outline-none;
  }
  &:focus {
    @apply outline-none;
  }
  &:active {
    @apply outline-none;
  }

  &--small {
    // @apply py-0 px-1 m-1 text-xs;
    zoom: 0.8;
  }
  &--bigger {
    @apply py-2 px-3 m-1 text-xl;
    zoom: 1.2;
  }
  &--dense {
    @apply py-0 px-1 m-0 h-0;
  }

  &--default {
    @apply text-white bg-primary;
  }

  &--flat {
  }

  &--outline {
    @apply border rounded;
  }

  &--flex {
    @apply inline-flex items-center content-center;
  }

  &__icon {
    @apply flex fill-current mr-2 h-full items-center content-center;
    &--center {
      @apply ml-2;
    }
  }
}
</style>
