<template>
  <div class="f-dropdown" :class="classes">
    <input ref="input" v-bind="$attrs" type="hidden" />
    <div
      class="f-dropdown__inner"
      @click="toggleDropdown"
      :class="{
        'f-dropdown__inner--opened': isOpen
      }"
    >
      <div class="f-dropdown__inner__content">{{ labelSelected }}</div>
      <div v-if="caret" class="f-dropdown__inner__append">
        <f-icon :name="iconName" :color="iconColor" />
      </div>
    </div>
    <transition :name="`slide-${position}`">
      <div class="f-dropdown__list" v-if="isOpen">
        <ul>
          <li
            @click="clickOnItem(item, index)"
            v-for="(item, index) in list"
            :key="`dwn:${index}`"
          >
            {{ item.label }}
          </li>
        </ul>
      </div>
    </transition>
  </div>
</template>

<script>
import { FIcon } from "../FIcon/index.js";

export default {
  name: "f-dropdown",
  components: { FIcon },
  data: () => ({
    isOpen: false,
    selected: 0,
    innerInput: ""
  }),
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
    input: Boolean,
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
    },
    color: {
      type: String,
      default: "primary"
    },
    textColor: {
      type: String,
      default: "white"
    }
  },
  computed: {
    isOutlined() {
      return this.type === "outlined";
    },
    iconName() {
      return this.isOpen ? "keyboard_arrow_up" : "keyboard_arrow_down";
    },
    iconColor() {
      return this.isOutlined ? this.color : this.textWhite;
    },
    labelSelected() {
      return this.list[this.selected].label;
    },
    valueSelected() {
      return this.list[this.selected].value;
    },
    classes() {
      return this.isOutlined ? "f-dropdown--outlined" : "";
    }
  },
  mounted() {
    this.getBindValue();
  },
  methods: {
    getBindValue() {
      let val = this.$refs.input.value;
      this.list.map((item, index) => {
        if (String(item.value) === String(val)) this.selected = index;
      });
    },
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
      if (this.input) this.$emit("input", this.valueSelected);
    }
  },
  destroyed() {
    if (process.browser) {
      window.removeEventListener("click", this.toggleDropdown);
    }
  }
};
</script>

<style lang="scss" scoped>
@import "../../assets/f-transitions.scss";
@import "../../assets/f-colors.scss";

.f-dropdown {
  @apply select-none relative max-w-full;
  width: 200px;
  &__inner {
    @apply flex flex-no-wrap justify-between bg-primary rounded text-white w-full py-2 px-3 min-w-full;
    &__content {
      @apply truncate;
    }
    &__append {
      @apply flex flex-no-wrap items-center items-center w-1 pl-4 pr-4;
    }
    &--opened {
      @apply rounded-none rounded-t;
    }
  }

  &__list {
    @apply absolute m-0 pt-2 pb-2 rounded-b bg-primary cursor-pointer shadow-md w-full z-10 text-white text-left;
    ul {
      @apply list-none;
      li {
        @apply py-1 px-2 align-middle;
        &:hover {
          @apply bg-gray-300 text-primary;
        }
      }
    }
  }

  &--outlined {
    .f-dropdown__inner {
      @apply bg-white text-primary border border-solid border-primary;
    }
    .f-dropdown__list {
      @apply bg-white text-gray-600 border border-t-0 border-solid border-gray;
      ul {
        li {
          &:hover {
            @apply bg-white;
          }
        }
      }
    }
  }
}
</style>
