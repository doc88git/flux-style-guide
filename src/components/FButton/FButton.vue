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
    <div class="btn__inner" :class="[btnInnerCenter]">
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
      default: ""
    },
    radius: {
      type: Boolean,
      default: true
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

      let btnRadius = {
        ["btn--noradius"]: this.radius === false
      };

      return {
        ...btnDefault,
        ...btnOutline,
        ...btnFlat,
        ...btnRadius,
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
    btnInnerCenter() {
      if (this.label || this.hasDefaultSlot) return "";
      return "btn__inner--center";
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
  @apply font-primary text-center py-1 px-3 h-12 m-1 rounded uppercase;
  width: auto;
  cursor: pointer;
  &:hover {
    @apply outline-none;
    opacity: 0.7;
  }

  &:focus {
    @apply outline-none;
  }

  &:active {
    @apply outline-none;
  }

  &--noradius {
    border-radius: 0px;
  }

  &--default {
    @apply text-white px-6 bg-primary;
  }

  &--small {
    @apply text-left py-1 px-2 h-8 text-xl;

    * {
      @apply text-sm;
    }
  }
  &--bigger {
    @apply text-base h-16 px-6 m-1 w-auto;
  }
  &--bigger-x {
    @apply py-2 px-4 m-1 h-20 text-xl;
  }
  &--dense {
    @apply py-0 px-1 m-0 h-6;
  }

  &--flat {
  }

  &--outline {
    @apply border rounded px-6;
  }

  &__inner {
    @apply flex flex-no-wrap items-center content-center w-full h-auto;
    &--center {
      justify-content: center;
    }
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
      letter-spacing: 1px;
    }
  }
}

@import "../../assets/f-colors.scss";
</style>
