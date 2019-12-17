<template>
  <f-button
    class="Fmenu-side__button"
    :icon="iconMenu"
    :bigger="true"
    :radius="false"
    :color="color"
    @click="handler"
  />
</template>

<script>
import { FButton } from "../FButton";

export default {
  name: "f-menu-button",
  components: {
    FButton
  },
  props: {
    color: {
      type: String,
      default: "primary"
    },
    handler: Function,
    expanded: Boolean
  },
  computed: {
    iconMenu() {
      return this.expanded ? "chevron_left" : "menu";
    }
  }
};
</script>

<style style="scss" scoped>
.Fmenu-side__button {
  margin: 0;
  width: 70px;
  text-align: center;
  min-height: 70px;
}
</style>
