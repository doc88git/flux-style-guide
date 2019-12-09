<template>
  <div class="FTag" :class="classBgColor">
    <div class="FTag__fieldset">
      <div class="FTag__legend" :class="classBgColor">{{ legend }}</div>
      <div class="FTag__slot-div" :class="classLineColor">
        <slot class="FTag__slot">
          <f-icon class="FTag__icon" :name="icon" :color="iconColor" />
          <div class="FTag__text">{{ text }}</div>
        </slot>
      </div>
    </div>
  </div>
</template>

<script>
import FIcon from "../FIcon/FIcon";

export default {
  name: "FTag",
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
      return this.bgColor ? `FTag--${this.bgColor}` : "";
    },
    classLineColor() {
      return this.lineColor ? `FTag__fieldset--${this.lineColor}` : "";
    }
  }
};
</script>

<style lang="scss" scoped>
.FTag {
  &__fieldset {
    display: flex;
    &:hover {
      .FTag__legend {
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
