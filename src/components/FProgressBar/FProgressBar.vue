<template>
  <div class="FProgressBar">
    <f-tooltip />
  </div>
</template>

<script>
import { FTooltip } from '../FTooltip'

export default {
  name: 'FProgressBar',
  components: {
    FTooltip
  },
  props: {},
  methods: {}
}
</script>

<style lang="scss" scoped>
.FProgressBar {
  display: inline-block;
  width: 100%;
  padding: 10px 0;
  margin-bottom: 10px;
  color: var(--color-font-base);

  &__wrapper {
    display: flex;

    &--before {
      display: flex;
      align-items: center;
      margin-right: 20px;
    }

    &__text {
      display: flex;
      align-items: center;
      font-size: var(--text-xl);
      padding: 0;
      margin: 0;
    }

    &--after {
      display: flex;
      align-items: center;
      margin-left: 20px;
    }
  }

  &__hr {
    border-color: #ccc;
    margin-top: 20px;
  }
}
</style>
