<template>
  <div class="f-select">
    <f-dropdown
      :list="optionsFiltered"
      :color="color"
      :textColor="textColor"
      :type="type"
      @selected="setValue"
      @status="setStatus"
    >
      <div v-show="!openList" class="f-select__label">
        {{ labelSelected || "Selecione" }}
      </div>
      <f-input
        ref="input"
        v-show="openList"
        v-model="innerValue"
        class="f-select__input"
        :class="inputClasses"
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
    openList: false,
    event: null
  }),
  props: {
    type: String,
    color: String,
    textColor: String,
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

      return this.innerValue
        ? fuse.search(this.innerValue)
        : this.options || [];
    },
    inputClasses() {
      return {
        ["f-select--outlined"]: this.type === "outlined"
      };
    }
  },
  methods: {
    setValue(value) {
      this.selected = value;
    },
    setFocus() {
      this.selectedOld = this.selected;
      this.selected = null;

      setTimeout(() => {
        this.$refs.input.$el.focus();
      }, 200);

      console.log(this.$refs.input.$el);
    },
    setStatus(status) {
      if (status) this.setFocus();
      this.openList = status;
    },
    resetInnerValue() {
      this.innerValue = "";
    },
    openDropdown() {
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

  &__label {
    padding-right: 100%;
  }
  &__input {
    @apply bg-transparent border-none text-white p-0 m-0 h-6;
  }

  &--outlined {
    @apply text-primary;
  }
}

@import "../../assets/f-colors.scss";
</style>
