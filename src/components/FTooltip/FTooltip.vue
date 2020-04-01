<template>
  <div class="f-tooltip">
    <div
      @[showEvent].capture="show"
      class="f-tooltip__main"
      @[hideEvent]="hide"
      v-click-outside="hide"
      ref="mainContent"
    >
      <slot>
        <f-button v-bind="[$props, $attrs]">{{ label }}</f-button>
      </slot>
    </div>

    <transition v-if="showTooltip" :name="`fade-${transition}`">
      <div
        class="f-tooltip__item"
        :class="[classDynamic, bgColor]"
        :style="tooltipPosition"
        ref="tipContent"
        size="large"
      >
        <slot name="content" />
        <div :class="classDynamicArrow" />
      </div>
    </transition>
  </div>
</template>

<script>
import { FButton } from '../FButton'

export default {
  name: 'f-tooltip',
  components: {
    FButton
  },

  data: () => ({
    isVisible: false,
    tooltipPosition: {
      top: 0,
      left: 0
    }
  }),

  props: {
    label: String,
    position: {
      type: String,
      default: 'top',
      validator: val => ['top', 'bottom', 'left', 'right'].includes(val)
    },
    overlap: {
      type: Boolean,
      default: false
    },
    aligned: {
      type: String,
      default: 'center',
      validator: val => ['center', 'start', 'end'].includes(val)
    },
    color: {
      type: String,
      default: 'default',
      validator: val => ['default', 'secondary'].includes(val)
    },
    disabled: Boolean,
    bgColor: {
      type: String,
      default: 'black'
    },
    textColor: {
      type: String,
      default: 'white'
    },
    clickOutside: {
      type: Boolean,
      default: false
    },
    showEvent: {
      type: String,
      default: 'mouseover'
    },
    hideEvent: {
      type: String,
      default: 'mouseleave'
    }
  },

  watch: {
    showTooltip() {
      this.$nextTick(this.setTooltipPosition)
    }
  },

  created() {
    window.addEventListener('resize', this.setTooltipPosition)
  },

  beforeDestroy() {
    window.removeEventListener('resize', this.setTooltipPosition)
  },

  computed: {
    arrowDistance() {
      return this.overlap ? -5 : 5
    },
    showTooltip() {
      return this.isVisible && !this.disabled
    },
    classDynamic() {
      return [
        `f-tooltip--${this.color}`,
        `f-tooltip__item--${this.position}`,
        `f-tooltip__item--${this.aligned}`,
        `f-tooltip__item--${this.bgColor}`,
        `text-${this.textColor}`
      ]
    },
    classDynamicArrow() {
      return [
        `f-tooltip__item--${this.position}`,
        'f-tooltip__item__arrow',
        `f-tooltip__item__arrow--${this.position}`,
        `f-tooltip__item__arrow--${this.aligned}`,
        `f-tooltip__item__arrow--${this.bgColor}`
      ]
    },
    transition() {
      return this.isVisible ? 'in' : 'out'
    }
  },
  methods: {
    setTooltipPosition() {
      if (
        !this.showTooltip ||
        !this.$refs.mainContent ||
        !this.$refs.tipContent
      )
        return

      const target = this.$refs.mainContent.getBoundingClientRect()
      const tooltip = this.$refs.tipContent.getBoundingClientRect()

      this.tooltipPosition = {
        top: this.getTopPosition({ target, tooltip }) + 'px',
        left: this.getLeftPosition({ target, tooltip }) + 'px'
      }
    },
    getTopPosition({ target, tooltip }) {
      if (this.position === 'top')
        return target.top - (this.arrowDistance + tooltip.height)

      if (this.position === 'bottom')
        return target.top + (this.arrowDistance + target.height)

      return target.top - tooltip.height / 2 + target.height / 2
    },
    getLeftPosition({ target, tooltip }) {
      if (this.aligned === 'start') return target.left

      if (this.aligned === 'end')
        return target.left + (target.width - tooltip.width)

      if (['top', 'bottom'].includes(this.position))
        return target.left - tooltip.width / 2 + target.width / 2

      if (this.position === 'left')
        return target.left - tooltip.width - this.arrowDistance

      return target.left + target.width + this.arrowDistance
    },
    show(e) {
      if (e.type === 'click' && this.isVisible) this.isVisible = false
      else this.isVisible = true
    },
    hide() {
      this.isVisible = false
    }
  }
}
</script>

<style lang="scss" scoped>
.f-tooltip {
  position: relative;
  cursor: pointer;
  display: inline-block;

  &__main {
    height: 100%;
  }

  &__item {
    position: fixed;
    background-color: var(--color-black);
    padding: 12px;
    font-size: var(--text-sm);
    border-radius: 0.5rem;
    box-shadow: 0 1px 3px 0 rgba(0, 0, 0, 0.1), 0 1px 2px 0 rgba(0, 0, 0, 0.06);
    align-self: center;
    text-align: center;
    white-space: nowrap;
    left: 100%;
    z-index: 10;
    color: var(--color-white);

    &--primary {
      background-color: var(--color-primary);
      color: var(--color-white);
      .f-tooltip__arrow {
        &:after {
          background-color: var(--color-primary);
        }
      }
    }

    &--secondary {
      background-color: var(--color-secondary);
      color: var(--color-white);
      .f-tooltip__arrow {
        &:after {
          background-color: var(--color-secondary);
        }
      }
    }

    &__arrow {
      position: absolute;
      overflow: hidden;
      width: 18px;
      height: 10px;
      &:after {
        position: absolute;
        background-color: var(--color-black);
        box-shadow: 0 1px 3px 0 rgba(0, 0, 0, 0.1),
          0 1px 2px 0 rgba(0, 0, 0, 0.06);
        content: '';
        width: 10px;
        height: 10px;
        transform: translateX(-50%) translateY(-50%) rotate(45deg);
        top: 0;
        left: 50%;
      }
      &--top {
        top: 100%;
        left: 50%;
        transform: translateX(-50%);
      }
      &--bottom {
        top: 0%;
        left: 50%;
        transform: translateX(-50%) translateY(-100%) rotate(180deg);
      }
      &--right {
        top: 50%;
        right: 99%;
        transform: translate(4px, -51%) rotate(90deg);
      }
      &--left {
        top: 50%;
        left: calc(100% - 5px);
        transform: translate(0%, -50%) rotate(-90deg);
      }
      &--primary {
        &:after {
          background-color: var(--color-primary);
        }
      }
      &--secondary {
        &:after {
          background-color: var(--color-secondary);
        }
      }
    }
  }
}
</style>
