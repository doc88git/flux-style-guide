<template>
  <div class="FProgressBar" :class="progressTheme">
    <div v-if="theme == 'text'">
      <slot>Name Progress:</slot>
      {{ value | percent }}
    </div>
    <div class="FProgressBar__main" :class="backgroundFill">
      <component
        :is="withComponent"
        class="FProgressBar__content"
        :style="{ width: progressValue + '%' }"
        aligned="end"
      >
        <template>
          <div class="FProgressBar__content-filled" :class="colorFill" />
        </template>
        <template v-slot:content>{{ progressValue | percent }}</template>
      </component>
    </div>
    <div v-if="theme == 'side'">{{ value | percent }}</div>
  </div>
</template>

<script>
import { FTooltip } from '../FTooltip'

export default {
  name: 'FProgressBar',
  data: () => ({}),
  components: {
    FTooltip
  },
  filters: {
    percent: val => `${val}%`
  },
  props: {
    value: {
      type: Number,
      default: 0
    },
    theme: {
      type: String,
      default: 'tooltip',
      validator: val => ['tooltip', 'text', 'side'].includes(val)
    },
    color: {
      type: String,
      default: ''
    },
    bgColor: {
      type: String,
      default: 'gray-300'
    }
  },
  computed: {
    progressValue() {
      return this.value > 100 ? 100 : this.value
    },
    withComponent() {
      return this.theme === 'tooltip' ? 'f-tooltip' : 'div'
    },
    progressTheme() {
      return `FProgressBar--${this.theme}`
    },
    colorFill() {
      return `color--${this.color}`
    },
    backgroundFill() {
      return `color--${this.color}`
    }
  }
}
</script>

<style lang="scss" scoped>
.FProgressBar {
  width: 100%;
  height: 100%;
  white-space: nowrap;
  display: flex;

  &__main {
    width: 100%;
    height: 100%;
    border-radius: 10px;
    margin: 6px 10px 0 0;
  }

  &__content-filled {
    height: 100%;
    border-radius: 10px;
    cursor: default;
  }

  &__content {
    width: 100%;
    transition: 750ms ease-in-out width;
    display: block;
  }

  &--text {
    flex-direction: column;
  }

  div {
    height: 100%;
  }
}
</style>
