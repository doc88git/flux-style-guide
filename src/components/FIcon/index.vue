<template>
  <span>
    <material
      v-if="lib === 'material'"
      v-bind="{ name: $props.name, type: $props.type }"
      style="font-size: 48px"
    />
  </span>
</template>

<script>
import Material from "./components/Material";

export default {
  name: "f-icon",
  components: {
    Material
  },
  props: {
    lib: {
      default: "material",
      type: String
    },
    type: {
      default: "",
      type: String
    },
    name: {
      default: "",
      type: String,
      required: true
    }
  }
};
</script>

<style lang="scss">
// @import "@/assets/f-style-guide.scss";
</style>
