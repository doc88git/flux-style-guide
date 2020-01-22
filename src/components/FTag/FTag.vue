<template>
  <div class="FTag" :style="styleBeforeColor">
    <div
      class="FTag__fieldset"
      :style="styleTextColor"
      @mouseover="onHover = true"
      @mouseout="onHover = false"
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
    onHover: false,
    legendSize: 50
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
        borderColor: this.lineColor,
        minWidth: `${this.legendSize}px`
      }
    },
    styleTextColor() {
      return 'color: ' + this.textColor
    },
    styleBeforeColor() {
      return ':before: ' + this.lineColor
    }
  },
  mounted() {
    this.$nextTick(() => {
      this.setLegendSize()
    })
  },
  methods: {
    setLegendSize() {
      try {
        this.legendSize = this.$refs.fTagLegend.offsetWidth + 10
      } catch (e) {
        this.legendSize = 60
      }
    }
  }
}
</script>

<style lang="scss" scoped>
.FTag {
  &__fieldset {
    display: flex;
    margin-right: 20px;
    white-space: nowrap;
  }

  &__legend {
    visibility: hidden;
    padding-right: 4px;
    padding-left: 4px;
    padding-bottom: 0;
    position: absolute;
    transform: translateY(-6px);
    margin-left: 0;
    font-size: var(--text-xs);
    z-index: 2;
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
  }

  &__icon {
    padding-top: 0;
    padding-left: 1px;
    padding-right: 5px;
    padding-bottom: 1px;
  }
}
</style>
