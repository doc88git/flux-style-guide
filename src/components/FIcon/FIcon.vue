<template>
  <span>
    <f-icon-material
      v-if="lib === 'material'"
      v-bind="{ name: $props.name, type: $props.type }"
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
      default: "default",
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

<style lang="scss" scoped></style>
