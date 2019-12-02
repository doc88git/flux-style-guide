<template>
  <div class="f-select" tabindex="-1">
    <f-dropdown
      :list="optionsFiltered"
      :color="color"
      :textColor="textColor"
      :type="type"
      @selected="setValue"
      :closeOnClick="closeOnClick"
      @status="setStatus"
    >
      <div v-show="showLabel" class="f-select__label">
        {{ labelSelected || customLabel }}
      </div>

      <div v-show="multiple" class="f-select__multiple">
        <f-chip
          v-for="item in multipleList"
          :key="item.id"
          :label="item.label"
          :value="item.value"
          :removable="true"
          color="white"
          textColor="primary"
          @remove="removeChip"
        />
      </div>

      <f-input
        ref="input"
        :name="name"
        v-show="openList && search"
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
import { FChip } from "../FChip/index.js";

import Fuse from "fuse.js";

const fuseOptions = {
  keys: ["label"],
  threshold: 0.1,
  shouldSort: false
};

let intTimeout = 0;

export default {
  name: "f-select",
  components: { FDropdown, FInput, FChip },
  data: () => ({
    innerValue: "",
    selected: null,
    selectedOld: null,
    openList: false,
    event: null,
    list: []
  }),
  props: {
    name: String,
    type: {
      type: String,
      default: "input"
    },
    customLabel: {
      type: String,
      default: "Selecione"
    },
    color: String,
    textColor: String,
    options: {
      type: Array,
      required: true,
      validator: items => {
        let filter = items.filter(item => "label" in item && "value" in item);
        return filter.length === items.length;
      }
    },
    search: Boolean,
    multiple: Boolean,
    closeOnClick: {
      type: Boolean,
      default: true
    }
  },
  watch: {
    "$attrs.value": {
      handler: function() {
        this.selected = this.$attrs.value;
      },
      immediate: true
    },
    innerValue: {
      handler: function() {
        this.debounceInput(this.innerValue);
      }
    }
  },
  computed: {
    dropdownType() {
      return this.type === "fill" ? "default" : "this.type";
    },
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
        ["f-select--outlined"]: this.type === "outlined",
        ["f-select--input"]: this.type === "input"
      };
    },
    multipleList() {
      return this.list.map(item => {
        let v = this.options.filter(option => option.value === item);
        if (v.length) return v[0];
      });
    },
    showLabel() {
      if (!this.search && !this.multiple) return true;
      if (this.search && !this.openList) return true;

      if (this.multiple) return this.multipleList.length === 0;

      return false;
    }
  },
  methods: {
    removeChip(value) {
      this.list = this.list.filter(item => item !== value);
    },
    debounceInput(value) {
      if (intTimeout) clearTimeout(intTimeout);
      if (!value) return false;

      intTimeout = setTimeout(() => {
        this.$emit("search-value", value);
      }, 100);
    },
    setValue(value) {
      if (this.multiple) return this.addMultiple(value);
      this.selected = value;

      this.$emit("input", value);
    },
    addMultiple(value) {
      if (this.list.includes(value)) return false;

      this.list.push(value);
    },
    setFocus() {
      this.selectedOld = this.selected;
      this.selected = null;

      setTimeout(() => {
        this.$refs.input.$el.focus();
      }, 200);
    },
    setStatus(status) {
      if (status) this.setFocus();

      this.openList = status;

      if (!status && !this.selected) this.selected = this.selectedOld;

      if (!status) this.resetInnerValue();
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
  &__multiple {
    @apply flex-wrap;
  }

  &--outlined {
    @apply text-primary;
  }

  &--input {
    @apply text-black;
  }
}

@import "../../assets/f-colors.scss";
</style>
