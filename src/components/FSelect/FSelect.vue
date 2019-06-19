<template>
  <div class="f-select">
    <f-dropdown :list="optionsFiltered" @selected="setValue">
      <span @click="setFocus">{{ labelSelected }}</span>
      <f-input
        ref="input"
        v-model="innerValue"
        class="f-select__input"
        @focus="openDropdown('focus')"
        @blur="openDropdown('blur')"
      />
    </f-dropdown>
  </div>
</template>

<script>
import { FDropdown } from "../FDropdown/index.js";
import { FInput } from "../FField/index.js";
import Fuse from "fuse.js";

const fuseOptions = {
  keys: ["label"],
  threshold: 0.1,
  shouldSort: false
};

export default {
  name: "f-select",
  components: { FDropdown, FInput },
  data: () => ({
    innerValue: "",
    selected: null,
    selectedOld: null,
    openList: false
  }),
  props: {
    options: {
      type: Array,
      required: true,
      validator: items => {
        return (
          items.filter(
            item => item.hasOwnProperty("label") && item.hasOwnProperty("value")
          ).length === items.length
        );
      }
    }
  },
  computed: {
    labelSelected() {
      let selectedItem = this.options
        .filter(item => item.value === this.selected)
        .map(item => item.label || "");

      return selectedItem.join("");
    },
    optionsFiltered() {
      let fuse = new Fuse(this.options, fuseOptions);

      let result = this.innerValue
        ? fuse.search(this.innerValue)
        : this.options || [];

      console.log({ result: fuse.search(this.innerValue) });

      return result;
    }
  },
  methods: {
    setValue(value) {
      this.selected = value;
    },
    setFocus() {
      this.selectedOld = this.selected;
      this.selected = null;

      this.$refs.input.$el.focus();
    },
    openDropdown(type) {
      this.openList = type === "focus";
      this.innerValue = "";

      if (this.openList) this.setFocus();

      if (!this.openList && !this.selected) {
        this.selected = this.selectedOld;
      }
    }
  }
};
</script>

<style lang="scss" scoped>
.f-select {
  @apply max-w-full;

  &__input {
    @apply bg-transparent border-none text-white p-0 m-0 h-6;
  }
}
</style>
