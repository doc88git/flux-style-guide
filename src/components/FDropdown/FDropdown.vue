<template>
  <div class="f-dropdown" :class="classDynamic" @click="toggleDropdown">
    <FField class="f-dropdown__field">
      <div class="f-dropdown__selected">
        <div class="f-dropdown__current">{{ labelSelected }}</div>
      </div>
      <template v-slot:append v-if="caret">
        <f-button
          flat
          :icon="isOpen ? 'keyboard_arrow_up' : 'keyboard_arrow_down'"
          text-color="black"
          @click="toggleDropdown"
          class="f-dropdown__button"
        />
      </template>
    </FField>
    <transition :name="`slide-${position}`">
      <ul v-if="isOpen" class="f-dropdown__list">
        <li
          v-for="(item, index) in list"
          :key="index"
          class="f-dropdown__item"
          @click="clickOnItem(item, index)"
        >
          {{ item.label }}
        </li>
      </ul>
    </transition>
  </div>
</template>

<script>
import { FButton } from "../FButton";
import { FField } from "../FField";
export default {
  name: "f-dropdown",
  components: {
    FButton,
    FField
  },
  props: {
    list: {
      type: Array,
      required: true,
      validator: items => {
        return (
          items.filter(item => {
            return (
              item.hasOwnProperty("label") &&
              (item.hasOwnProperty("action") || item.hasOwnProperty("emit"))
            );
          }).length === items.length
        );
      }
    },
    caret: {
      type: Boolean,
      default: true
    },
    type: {
      type: String,
      default: "default",
      validator: item => {
        return ["default", "outlined"].includes(item);
      }
    },
    position: {
      type: String,
      default: "down"
    }
  },
  data() {
    return {
      isOpen: false,
      selected: 0
    };
  },
  computed: {
    classDynamic() {
      return {
        "f-dropdown__default": this.type === "default",
        "f-dropdown__outlined": this.type === "outlined",
        [`f-dropdown--${this.position}`]: true
      };
    },
    labelSelected() {
      return this.list[this.selected].label;
    }
  },
  destroyed() {
    if (process.browser) {
      window.removeEventListener("click", this.toggleDropdown);
    }
  },
  methods: {
    toggleDropdown(e) {
      this.isOpen = !this.isOpen;
      if (!process.browser) return;

      if (this.isOpen) {
        window.addEventListener("click", this.toggleDropdown);
      } else {
        window.removeEventListener("click", this.toggleDropdown);
      }
      if (e) e.stopPropagation();
    },
    clickOnItem(item, index) {
      this.selected = index;
      if (item.action) item.action();
      if (item.emit) this.$emit("emit", item.emit);
    }
  }
};
</script>

<style lang="scss" scoped>
@import "../../assets/f-transitions.scss";

.f-dropdown {
  @apply relative leading-normal select-none min-w-full text-left;
  min-width: 150px;
  &--up {
    .f-dropdown__list {
      @apply shadow;
    }
  }
  &__field {
    @apply mb-0 relative z-10 bg-white;
  }
  &__button {
    @apply mt-1;
  }
  &__selected {
    @apply py-2 px-4 border rounded border-solid cursor-pointer relative pr-10;
  }
  &__current {
    @apply relative align-middle;
  }
  &__list {
    @apply list-none m-0 -mt-4 pt-6 border text-black border-solid rounded bg-white cursor-pointer shadow-md absolute w-full;
  }
  &__item {
    @apply py-1 align-middle py-2 px-4;
  }
  &__outlined {
    @apply border-primary bg-white;
    &:hover {
      @apply border-primary text-primary;
      button {
        @apply text-primary #{!important};
      }
      .f-dropdown__selected {
        @apply border-primary;
      }
    }
    .f-dropdown__field {
      @apply bg-white;
    }
    .f-dropdown__selected {
      @apply border-gray;
    }
    .f-dropdown__list {
      @apply text-black border-solid border-gray bg-white;
    }
    .f-dropdown__item {
      @apply py-1 align-middle py-2 px-4;
      user-select: none;
      &:hover {
        @apply bg-gray-300 text-primary;
      }
    }
  }
  &__default {
    @apply bg-primary text-white border rounded border-primary;
    &:hover {
      @apply text-white border-primary;
      button {
        @apply text-white #{!important};
      }
      .f-dropdown__selected {
        @apply border-white;
      }
    }
    .f-dropdown__field {
      @apply bg-primary m-0;
      * {
        @apply border-none;
      }
    }
    .f-dropdown__button {
      @apply text-white #{!important};
    }
    .f-dropdown__selected {
      @apply border border-gray rounded;
      &:hover {
        background-color: lighten($color-primary, 15%);
      }
    }
    .f-dropdown__list {
      @apply text-white border-solid border-primary bg-primary;
    }
    .f-dropdown__item {
      @apply py-1 align-middle py-2 px-4;
      user-select: none;
      &:hover {
        @apply text-white;
        background-color: lighten($color-primary, 15%);
      }
    }
  }
}
</style>
