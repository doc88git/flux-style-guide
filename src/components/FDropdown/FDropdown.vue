<template>
  <div class="f-dropdown" :class="classes" @click="toggleDropdown">
    <div
      class="f-dropdown__inner"
      :class="{
        'f-dropdown__inner--opened': isOpen
      }"
    >
      <div class="f-dropdown__inner__content">
        <slot>{{ labelSelected }}</slot>
      </div>
      <div v-if="caret" class="f-dropdown__inner__append">
        <f-icon :name="iconName" :color="iconColor" />
      </div>
    </div>
    <transition :name="`slide-${position}`">
      <div class="f-dropdown__list" v-show="isOpen">
        <ul>
          <li
            v-for="(item, index) in list"
            :key="`dwn:${index}`"
            @click="clickOnItem($event, item)"
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
    selected: null
  }),
  props: {
    list: {
      type: Array,
      required: true,
      validator: list => {
        let required = ["label", "value"];

        let filter = list.filter(() => {
          return (
            list.filter(item => {
              return required.filter(r => !!item[r]).length === required.length;
            }).length === list.length
          );
        });

        return filter.length === list.length;
      }
    },
    closeOnClick: {
      type: Boolean,
      default: true
    },
    input: Boolean,
    open: Boolean,
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
    selectedItem() {
      let selectedItem = this.list.filter(item => item.value === this.selected);
      return selectedItem.length ? selectedItem[0] : this.list[0];
    },
    labelSelected() {
      return this.selectedItem && this.selectedItem.label
        ? this.selectedItem.label
        : "";
    },
    valueSelected() {
      return this.selectedItem && this.selectedItem.value
        ? this.selectedItem.value
        : "";
    },
    classes() {
      return this.isOutlined ? "f-dropdown--outlined" : "";
    }
  },
  watch: {
    open: {
      handler: function(value) {
        if (value) return this.openList();
        return this.closeList();
        // this.toggleDropdown(null, value);
      }
    }
  },
  methods: {
    isClickedIn(e, classItem) {
      let isClicked = e.path.filter(item => {
        return item.classList ? item.classList.contains(classItem) : false;
      });

      return isClicked.length;
    },
    isClickedOut(e) {
      return !this.isClickedIn(e, "f-dropdown");
    },
    clickedInCaret(e) {
      return (
        this.isClickedIn(e, "f-icon") && this.iconName === "keyboard_arrow_up"
      );
    },
    closeList() {
      this.isOpen = false;

      if (process.browser) {
        window.removeEventListener("click", this.toggleDropdown);
      }

      this.emitStatus();
    },
    openList() {
      this.isOpen = true;

      if (process.browser) {
        window.addEventListener("click", this.toggleDropdown);
      }

      this.emitStatus();
    },
    emitStatus() {
      this.$emit("status", this.isOpen);
    },
    toggleDropdown(e) {
      if (this.isClickedOut(e) || this.clickedInCaret(e)) {
        this.closeList();
        e.stopPropagation();

        return false;
      }

      this.openList();

      e.stopPropagation();
    },
    clickOnItem(e, item) {
      this.selected = item.value;
      this.$emit("selected", item.value);

      if (this.closeOnClick) this.closeList();

      e.stopPropagation();
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
.f-dropdown {
  @apply select-none relative max-w-full;
  min-width: 200px;
  &__inner {
    @apply flex flex-no-wrap justify-between bg-primary rounded text-white w-full py-2 px-3 min-w-full;
    position: relative;
    z-index: 1;
    &__content {
      @apply truncate;
    }
    &__append {
      @apply flex flex-no-wrap items-center items-center w-1 pl-4 pr-4;
      .f-icon {
        @apply p-2 -m-2 cursor-pointer;
      }
    }
    &--opened {
      @apply rounded-none rounded-t;
    }
  }

  &__list {
    @apply absolute m-0 pt-2 pb-2 rounded-b bg-primary cursor-pointer shadow-md w-full text-white text-left;
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

@import "../../assets/f-transitions.scss";
@import "../../assets/f-colors.scss";
</style>
