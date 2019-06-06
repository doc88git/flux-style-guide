<template>
  <button
    class="btn"
    :class="[btnStyle, btnIcon]"
    @click="$emit('click')"
    @mouseleave="blur"
    @click.stop="blur"
  >
    <f-icon v-if="icon" class="btn__icon" :class="[btnCenter]" :name="icon" />
    <span>
      {{ label }}
      <slot></slot>
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
  @apply font-primary text-center py-1 px-3 m-1 rounded text-base uppercase;
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

$colors: gray red orange yellow green teal blue indigo purple pink;

.color {
  &--text {
    &--white {
      @apply text-white #{!important};
      &:hover {
        @apply text-white;
      }
      &:focus {
        @apply text-white;
      }
    }
    &--black {
      @apply text-black #{!important};
      &:hover {
        @apply text-black;
      }
      &:focus {
        @apply text-black;
      }
    }
  }
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
        @apply text-primary-light;
      }
      &:focus {
        @apply text-primary-dark;
      }
    }
    &--secondary {
      @apply bg-transparent text-secondary;
      &:hover {
        @apply text-secondary-light;
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
        @apply text-primary-light border-primary-light;
      }
      &:focus {
        @apply text-primary-dark border-primary-dark;
      }
    }
    &--secondary {
      @apply bg-transparent text-secondary;
      &:hover {
        @apply text-secondary-light;
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
        @apply bg-primary-light;
      }
      &:focus {
        @apply bg-primary-dark;
      }
    }
    &--secondary {
      @apply bg-secondary text-white;
      &:hover {
        @apply bg-secondary-light;
      }
      &:focus {
        @apply bg-secondary-dark;
      }
    }
  }
}
</style>
