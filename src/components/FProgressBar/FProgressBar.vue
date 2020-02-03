<template>
  <div class="FProgressBar">
    <div class="FProgressBar__main">
      <f-tooltip class="FProgressBar__tooltip">
        <template>
          <div class="FProgressBar__content" :style="{ width: progressValue + '%'}"></div>
        </template>
        <template v-slot:content>{{ progressValue + '%' }}</template>
      </f-tooltip>
    </div>
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
  props: {
    value: {
      type: Number,
      default: 0
    }
  },
  computed: {
    progressValue() {
      return this.value > 100 ? 100 : this.value
    }
  },
  methods: {}
}
</script>

<style lang="scss" scoped>
.FProgressBar {
  &__main {
    display: flex;
    width: 100%;
    height: 10px;
    border-radius: 10px;
    background-color: var(--color-gray-300);
    margin: 10px;
  }

  &__content {
    height: 10px;
    border-radius: 10px;
    background-color: var(--color-primary);
    transition: 750ms ease-in-out width;
    cursor: default;
  }

  &__tooltip {
    width: 100%;
    right: 10px;
  }
}
</style>
