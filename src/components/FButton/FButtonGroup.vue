<template>
  <div class="f-button-group">
    <f-button
      v-for="opt in options"
      :key="opt.value"
      :label="opt.label"
      @click="change(opt.value)"
      :class="{ 'f-button-group--selected': opt.value === selected }"
    />
  </div>
</template>

<script>
import FButton from "./FButton";

export default {
  name: "f-button-group",
  components: {
    FButton
  },
  props: {
    options: {
      type: Array,
      required: true
    }
  },
  data: () => ({
    selected: null
  }),
  mounted() {
    console.log({ options: this.options });
  },
  methods: {
    change(item) {
      this.selected = item;
      this.$emit("change", this.selected);
    }
  }
};
</script>

<style lang="scss" scoped>
.f-button-group {
  &--selected {
    filter: opacity(0.75);
  }
}
</style>
