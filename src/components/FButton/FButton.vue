<template>
  <button
    class="btn"
    type="button"
    :class="[btnStyle]"
    @click="$emit('click')"
    @click.stop="blur"
    @mouseover="mouseover"
    @mouseleave="mouseleave"
  >
    <div class="btn__inner">
      <div class="btn__inner__icon" :class="[btnCenter]" v-if="icon">
        <f-icon :name="icon" />
      </div>
      <div class="btn__inner__content" v-if="label || $slots.default">
        <slot> {{ label }} </slot>
      </div>
    </div>
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
    disabled: Boolean,
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
    btnCenter() {
      if (this.label || this.hasDefaultSlot) return "";
      return "btn__inner__icon--center";
    },
    hasDefaultSlot() {
      return !!this.$slots.default;
    }
  },
  methods: {
    blur(e) {
      e.target.blur();
    },
    mouseover(e) {
      this.$emit("mouseover", e);
    },
    mouseleave(e) {
      this.blur(e);
      this.$emit("mouseleave", e);
    }
  }
};
</script>

<style lang="scss">
.btn {
  @apply font-primary text-center py-1 px-3 m-1 rounded text-base uppercase h-10;
  width: auto;
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
    @apply text-xs h-6 py-0 px-2;
    zoom: 0.8;
  }
  &--bigger {
    @apply py-2 px-3 m-1 h-12 text-xl;
    zoom: 1.2;
  }
  &--dense {
    @apply py-0 px-1 m-0 h-6;
  }

  &--default {
    @apply text-white bg-primary;
  }

  &--flat {
  }

  &--outline {
    @apply border rounded;
  }

  &__inner {
    @apply flex flex-no-wrap items-center content-center w-full;
    &__icon {
      @apply h-full items-center mr-2;
      line-height: 0;
      &--center {
        @apply mr-0 #{!important};
      }
    }
    &__content {
      @apply h-full items-center w-full;
      line-height: 0;
    }
  }
}

@import "../../assets/f-colors.scss";
</style>
