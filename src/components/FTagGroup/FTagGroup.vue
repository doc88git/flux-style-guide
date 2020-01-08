<template>
  <div class="FTagGroup">
    <div
      class="FTagGroup__box"
      @mouseover="setShowLegend(true)"
      @mouseout="setShowLegend(false)"
    >
      <FTag
        v-for="(tag, i) in list"
        :key="i"
        :bgColor="tag.bgColor"
        :lineColor="tag.lineColor"
        :legend="tag.legend"
        :icon="tag.icon"
        :iconColor="tag.iconColor"
        :text="tag.text"
        :textColor="tag.textColor"
        :showLegend="showLegend"
      />
    </div>
  </div>
</template>

<script>
import { FTag } from "../FTag";

export default {
  name: "FTagGroup",
  components: { FTag },
  data: () => ({
    showLegend: false
  }),
  props: {
    list: {
      type: Array,
      required: true
    }
  },
  methods: {
    setShowLegend(bool) {
      this.showLegend = bool;
    }
  }
};
</script>

<style lang="scss" scoped>
.FTagGroup {
  display: flex;
  align-items: center;
  min-height: 57px;
  min-width: 700px;
  overflow: auto;
  &::-webkit-scrollbar {
    height: 6px;
  }
  &::-webkit-scrollbar-thumb {
    background: rgba(204, 204, 204, 0.582);
    border-radius: 10px;
  }

  &__box {
    display: flex;
  }

  .FTag {
    position: relative;
    &:before {
      content: "";
      width: 20px;
      height: 1px;
      background-color: #c1c1c1;
      position: absolute;
      transform: translateX(-100%) translateY(15px);
    }
    &:first-child:before {
      display: none;
    }
  }
}
</style>
