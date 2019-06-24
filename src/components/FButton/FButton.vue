<template>
  <button
    class="btn"
    type="button"
    :class="[btnStyle, btnIcon]"
    @click="$emit('click')"
    @click.stop="blur"
    @mouseleave="blur"
  >
    <div class="btn__inner">
      <div class="btn__inner__icon" v-if="icon">
        <f-icon :class="[btnCenter]" :name="icon" />
      </div>
      <div class="btn__inner__content">
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
    icon: String,
    color: {
      type: String,
      default: "primary"
    },
    textColor: String
  },
  mounted() {
    console.log({ FIcon });
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

  &__inner {
    @apply flex flex-no-wrap items-center content-center;
    &__icon {
      @apply flex fill-current h-full items-center content-center mr-2 #{!important};
      line-height: 0;
      &--center {
        @apply ml-2;
      }
    }
    &__content {
      @apply flex fill-current h-full items-center content-center;
      line-height: 0;
    }
  }
}

@import "../../assets/f-colors.scss";
</style>
