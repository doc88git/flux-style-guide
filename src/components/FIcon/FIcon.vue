<template>
  <f-icon-material
    v-if="lib === 'material'"
    v-bind="{ name: $props.name, type: $props.type }"
    :class="classes"
    class="f-icon"
  />
</template>

<script>
import FIconMaterial from "./components/FIconMaterial";

export default {
  name: "f-icon",
  components: {
    FIconMaterial
  },
  props: {
    color: String,
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
  },
  computed: {
    classes() {
      return {
        [`color--text--${this.color}`]: !!this.color
      };
    }
  }
};
</script>

<style lang="scss" scoped>
@import "../../assets/f-colors.scss";
</style>
