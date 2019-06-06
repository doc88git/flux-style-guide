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
  @apply text-center py-1 px-2 m-1 rounded;
  &:hover {
    @apply outline-none;
  }
  &:focus {
    @apply outline-none;
  }
  &:active {
    @apply outline-none;
  }

  &--default {
    @apply text-white bg-primary;
    // &:hover {
    //   @apply bg-primary-lighter;
    // }
    // &:focus {
    //   @apply bg-primary-dark;
    // }
  }

  &--flat {
  }

  &--outline {
    @apply border rounded;
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

$colors: gray red orange yellow green teal blue indigo purple pink;

.color {
  @each $color in $colors {
    &--text {
      &--#{$color} {
        @apply text-#{$color} #{!important};
        &:hover {
          @apply text-#{$color}-400;
        }
        &:focus {
          @apply text-#{$color}-600;
        }
      }
    }
    &--flat {
      &--#{$color} {
        @apply bg-transparent text-#{$color};
        &:hover {
          @apply text-#{$color}-400;
        }
        &:focus {
          @apply text-#{$color}-600;
        }
      }
    }
    &--outline {
      &--#{$color} {
        @apply bg-transparent text-#{$color} border-#{$color};
        &:hover {
          @apply text-#{$color}-400 border-#{$color}-400;
        }
        &:focus {
          @apply text-#{$color}-600 border-#{$color}-600;
        }
      }
    }
    &--default {
      &--#{$color} {
        @apply bg-#{$color};
        &:hover {
          @apply bg-#{$color}-400;
        }
        &:focus {
          @apply bg-#{$color}-600;
        }
      }
    }
  }
  &--flat {
    &--primary {
      @apply bg-transparent text-primary;
      &:hover {
        @apply text-primary-lighter;
      }
      &:focus {
        @apply text-primary-dark;
      }
    }
    &--secondary {
      @apply bg-transparent text-secondary;
      &:hover {
        @apply text-secondary-lighter;
      }
      &:focus {
        @apply text-secondary-dark;
      }
    }
  }
  &--outline {
    &--primary {
      @apply bg-transparent text-primary border-primary;
      &:hover {
        @apply text-primary-lighter border-primary-lighter;
      }
      &:focus {
        @apply text-primary-dark border-primary-dark;
      }
    }
    &--secondary {
      @apply bg-transparent text-secondary;
      &:hover {
        @apply text-secondary-lighter;
      }
      &:focus {
        @apply text-secondary-dark;
      }
    }
  }
  &--default {
    &--primary {
      @apply bg-primary text-white;
      &:hover {
        @apply bg-primary-lighter;
      }
      &:focus {
        @apply bg-primary-dark;
      }
    }
    &--secondary {
      @apply bg-secondary text-white;
      &:hover {
        @apply bg-secondary-lighter;
      }
      &:focus {
        @apply bg-secondary-dark;
      }
    }
  }
}
</style>
