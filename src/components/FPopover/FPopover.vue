<template>
  <div class="f-popover">
    <f-tooltip position="top" label="Button">
      <template v-slot:content>
        tooltip content
      </template>
    </f-tooltip>
  </div>
</template>

<script>
import { FTooltip } from "../FTooltip";

export default {
  name: "f-popover",
  components: {
    FTooltip
  },
  data: () => ({
    isVisible: false
  }),
  props: {},
  computed: {},
  methods: {}
};
</script>

<style lang="scss" scoped>
.f-popover {
}
</style>
