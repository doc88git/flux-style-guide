<template>
  <div class="FTag" :style="styleBeforeColor">
    <div
      class="FTag__fieldset"
      :style="styleTextColor"
      @mouseover="toggleHover"
      @mouseout="toggleHover"
    >
      <div class="FTag__legend" ref="fTagLegend" :style="[styleLegend]">
        {{ legend }}
      </div>
      <div class="FTag__slot-div" :style="styleLineColor">
        <slot class="FTag__slot">
          <f-icon
            class="FTag__icon"
            v-if="icon"
            :name="icon"
            :color="iconColor"
          />
          <div class="FTag__text">
            {{ text }}
          </div>
        </slot>
      </div>
    </div>
  </div>
</template>

<script>
import FIcon from '../FIcon/FIcon'

export default {
  name: 'FTag',

  components: {
    FIcon
  },

  props: {
    bgColor: {
      type: String,
      default: 'white'
    },
    lineColor: {
      type: String,
      default: '#c1c1c1'
    },
    legend: {
      type: String,
      default: 'legend'
    },
    icon: {
      type: String,
      default: ''
    },
    iconColor: {
      type: String,
      default: 'purple'
    },
    text: {
      type: String,
      default: 'Flux Services'
    },
    textColor: {
      type: String,
      default: '#7F7F7F'
    },
    showLegend: {
      type: Boolean,
      default: false
    }
  },

  data: () => ({
    onHover: false
  }),

  computed: {
    styleLegend() {
      return {
        backgroundColor: this.bgColor,
        visibility: this.onHover || this.showLegend ? 'visible' : 'hidden'
      }
    },

    styleLineColor() {
      return {
        borderColor: this.lineColor
      }
    },

    styleTextColor() {
      return 'color: ' + this.textColor
    },

    styleBeforeColor() {
      return ':before: ' + this.lineColor
    }
  },

  methods: {
    toggleHover () {
      this.onHover = !this.onHover
    }
  }
}
</script>

<style lang="scss" scoped>
.FTag {

  &__fieldset {
    display: inline-flex;
    margin-right: 20px;
    white-space: nowrap;
    position: relative;
  }

  &__legend {
    visibility: hidden;
    padding-right: 4px;
    padding-left: 4px;
    padding-bottom: 0;
    margin-left: 0;
    font-size: var(--text-xs);
    z-index: 2;
    transform: translateY(-6px);
  }

  &__slot-div {
    align-items: center;
    border: 1px solid;
    padding-right: 5px;
    padding-left: 5px;
    border-radius: 5px;
    display: flex;
    min-height: 30px;
    justify-content: flex-start;

    position: absolute;
    width: calc(100% + 10px);
  }

  &__icon {
    padding-top: 0;
    padding-left: 1px;
    padding-right: 5px;
    padding-bottom: 1px;

    // This is so the icon doesn't interfere with the tag size
    // when first loading (flash of unstyled content), since
    // we're using icon ligatures.
    // icon size (12px) + padding-right (5px)
    max-width: 17px;
    overflow: hidden;
  }
}
</style>
