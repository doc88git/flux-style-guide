<template>
  <div class="FTagGroup" :class="classBgColor">
    <div class="FTagGroup__fieldset">
      <div class="FTagGroup__legend" :class="classBgColor">{{ legend }}</div>
      <div class="FTagGroup__slot-div" :class="classLineColor">
        <slot class="FTagGroup__slot">
          <f-icon class="FTagGroup__icon" :name="icon" :color="iconColor" />
          <div class="FTagGroup__text">{{ text }}</div>
        </slot>
      </div>
    </div>
  </div>
</template>

<script>
import FIcon from "../FIcon/FIcon";

export default {
  name: "FTagGroup",
  components: {
    FIcon
  },
  props: {
    bgColor: String,
    lineColor: String,
    legend: String,
    icon: String,
    iconColor: String,
    text: String
  },
  computed: {
    classBgColor() {
      return this.bgColor ? `FTagGroup--${this.bgColor}` : "";
    },
    classLineColor() {
      return this.lineColor ? `FTagGroup__fieldset--${this.lineColor}` : "";
    }
  }
};
</script>

<style lang="scss" scoped>
.FTagGroup {
  &__fieldset {
    display: flex;
    &:hover {
      .FTagGroup__legend {
        display: block;
      }
    }
  }

  &__legend {
    display: none;
    padding-right: 7px;
    padding-left: 3px;
    padding-bottom: 0;
    position: absolute;
    transform: translateY(-9px);
    margin-left: 0;
    font-size: 12px;
    z-index: 2;
    background: #ffffff;
  }

  &__slot-div {
    align-items: center;
    border: 1px solid;
    padding-top: 4px;
    padding-right: 10px;
    padding-left: 7px;
    padding-bottom: 4px;
    border-radius: 5px;
    display: flex;
    min-width: 65px;
    justify-content: center;
  }

  &__icon {
    padding-top: 0;
    padding-left: 1px;
    padding-right: 5px;
    padding-bottom: 1px;
  }
}

@import "../../assets/f-colors.scss";
</style>
