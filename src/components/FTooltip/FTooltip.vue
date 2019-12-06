<template>
  <div class="f-tooltip">
    <div @click="toggleVisible" @mouseover="show" @mouseleave="hide">
      <slot>
        <f-button @click="toggleVisible" v-bind="[$props, $attrs]"
          >{{ label }}
        </f-button>
      </slot>
    </div>
    <transition v-if="isVisible" :name="`fade-${transition}`">
      <div class="f-tooltip__item" :class="[classDynamic, bgColor]">
        <slot name="content" />
        <div :class="classDynamicArrow" />
      </div>
    </transition>
  </div>
</template>

<script>
import { FButton } from "../FButton";

export default {
  name: "f-tooltip",
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
      default: "top",
      validator: val => ["top", "bottom", "left", "right"].includes(val)
    },
    color: {
      type: String,
      default: "default",
      validator: val => ["default", "secondary"].includes(val)
    },
    click: Boolean,
    bgColor: {
      type: String,
      default: "black"
    },
    textColor: {
      type: String,
      default: "white"
    }
  },
  computed: {
    classDynamic() {
      return [
        `f-tooltip--${this.color}`,
        `f-tooltip__item--${this.position}`,
        `f-tooltip__item--${this.bgColor}`,
        `text-${this.textColor}`
      ];
    },
    classDynamicArrow() {
      return [
        `f-tooltip__item--${this.position}`,
        "f-tooltip__item__arrow",
        `f-tooltip__item__arrow--${this.position}`,
        `f-tooltip__item__arrow--${this.bgColor}`
      ];
    },
    transition() {
      return this.isVisible ? "in" : "out";
    }
  },
  methods: {
    toggleVisible() {
      if (this.click) this.isVisible = !this.isVisible;
    },
    show() {
      if (!this.click) this.isVisible = true;
    },
    hide() {
      if (!this.click) this.isVisible = false;
    }
  }
};
</script>

<style lang="scss" scoped>
.f-tooltip {
  @apply relative cursor-pointer inline-block;

  &__item {
    @apply absolute bg-black px-2 py-1 text-sm rounded-lg shadow self-center text-center;
    width: 7rem;
    max-width: 10rem;
    min-width: 3rem;
    left: 100%;
    z-index: 10;

    &--primary {
      @apply bg-primary text-white;
      .f-tooltip__arrow {
        &:after {
          @apply bg-primary;
        }
      }
    }

    &--secondary {
      @apply bg-secondary text-white;
      .f-tooltip__arrow {
        &:after {
          @apply bg-secondary;
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
      @apply absolute overflow-hidden;
      width: 18px;
      height: 10px;
      &:after {
        @apply absolute bg-black shadow;
        content: "";
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
        right: 100%;
        transform: translate(4px, -50%) rotate(90deg);
      }
      &--left {
        top: 50%;
        left: calc(100% - 5px);
        transform: translate(0%, -50%) rotate(-90deg);
      }
      &--primary {
        &:after {
          @apply bg-primary;
        }
      }
      &--secondary {
        &:after {
          @apply bg-secondary;
        }
      }
    }
  }
}

@import "../../assets/f-transitions.scss";
@import "../../assets/f-colors.scss";
</style>
