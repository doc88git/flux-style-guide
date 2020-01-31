<template>
  <div class="f-tooltip">
    <div @[showEvent].capture="show" @[hideEvent]="hide" v-click-outside="hide">
      <slot>
        <f-button v-bind="[$props, $attrs]">{{ label }}</f-button>
      </slot>
    </div>
    <transition v-if="isVisible && !disabled" :name="`fade-${transition}`">
      <div class="f-tooltip__item" :class="[classDynamic, bgColor]" size="large">
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
    isVisible: false
  }),
  props: {
    label: String,
    position: {
      type: String,
      default: 'top',
      validator: val => ['top', 'bottom', 'left', 'right'].includes(val)
    },
    // aligned: {
    //   type: String,
    //   default: 'center',
    //   validator: val => ['center', 'bottom', 'left', 'right'].includes(val)
    // },
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
  computed: {
    classDynamic() {
      return [
        `f-tooltip--${this.color}`,
        `f-tooltip__item--${this.position}`,
        `f-tooltip__item--${this.bgColor}`,
        `text-${this.textColor}`
      ]
    },
    classDynamicArrow() {
      return [
        `f-tooltip__item--${this.position}`,
        'f-tooltip__item__arrow',
        `f-tooltip__item__arrow--${this.position}`,
        `f-tooltip__item__arrow--${this.bgColor}`
      ]
    },
    transition() {
      return this.isVisible ? 'in' : 'out'
      // return this.click ? "fade" : `slide-${this.position}`;
    }
  },
  methods: {
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

  &__item {
    position: absolute;
    background-color: var(--color-black);
    padding: 0.25rem 0.5rem;
    font-size: var(--text-sm);
    border-radius: 0.5rem;
    box-shadow: 0 1px 3px 0 rgba(0, 0, 0, 0.1), 0 1px 2px 0 rgba(0, 0, 0, 0.06);
    align-self: center;
    text-align: center;
    width: 7rem;
    max-width: 10rem;
    min-width: 3rem;
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

    &--top {
      bottom: calc(100% + 5px);
      left: 50%;
      transform: translateX(-50%);
    }

    &--bottom {
      top: calc(100% + 5px);
      left: 50%;
      transform: translateX(-50%);
    }

    &--right {
      top: 50%;
      right: 0%;
      transform: translate(5px, -50%);
    }

    &--left {
      top: 50%;
      left: calc(0% - 5px);
      transform: translate(-100%, -50%);
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
        transform: translate(4px, -50%) rotate(90deg);
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
