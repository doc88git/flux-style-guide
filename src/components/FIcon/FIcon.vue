<template>
  <span>
    <f-icon-material
      v-if="lib === 'material'"
      v-bind="{ name: $props.name, type: $props.type }"
      style="font-size: 48px"
    />
  </span>
</template>

<script>
import FIconMaterial from "./components/FIconMaterial";

export default {
  name: "f-icon",
  components: {
    FIconMaterial
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
