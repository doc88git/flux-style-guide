<template>
  <div class="f-tab">
    <FCard>
      <FButtonGroup
        :tab="!fill"
        :options="options"
        :default="1"
        @change="setSelected"
      />
      <FCardSeparator />
      <FCardBody
        v-for="(item, index) in options"
        :key="index"
        :data-value="item.value"
      >
        <template v-if="item.value === selected">
          <slot :name="`content-${item.value}`" />
        </template>
      </FCardBody>
    </FCard>
  </div>
</template>

<script>
import { FCard, FCardBody, FCardSeparator } from "../FCard";
import { FButtonGroup } from "../FButton";

export default {
  name: "f-tab",
  components: {
    FCard,
    FCardBody,
    FCardSeparator,
    FButtonGroup
  },
  props: {
    options: Array,
    fill: Boolean
  },
  computed: {
    isFill() {
      return this.fill;
    }
  },
  data: () => ({
    selected: null
  }),
  methods: {
    setSelected(id) {
      this.selected = id;
    }
  }
};
</script>

<style lang="scss" scoped>
.f-tab {
}
</style>
