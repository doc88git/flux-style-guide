<template>
  <div class="f-image">
    <img v-bind="$attrs" :class="classes" />
  </div>
</template>

<script>
export default {
  name: 'f-image',
  props: {
    rounded: Boolean,
    roundedT: Boolean,
    roundedB: Boolean,
    roundedTl: Boolean,
    roundedTr: Boolean,
    roundedBl: Boolean,
    roundedBr: Boolean
  },
  computed: {
    classes() {
      return {
        'f-image--rounded': this.rounded === true,
        'f-image--rounded-t': this.roundedT === true,
        'f-image--rounded-b': this.roundedB === true,
        'f-image--rounded-tl': this.roundedTl === true,
        'f-image--rounded-tr': this.roundedTr === true,
        'f-image--rounded-bl': this.roundedBl === true,
        'f-image--rounded-br': this.roundedBr === true
      }
    }
  }
}
</script>

<style lang="scss" scoped>
.f-image {
  @apply w-full h-full;
  &--rounded {
    @apply rounded-lg;
  }
  &--rounded-t {
    @apply rounded-t-lg;
  }
  &--rounded-b {
    @apply rounded-b-lg;
  }
  &--rounded-tl {
    @apply rounded-tl-lg;
  }
  &--rounded-tr {
    @apply rounded-tl-lg;
  }
  &--rounded-bl {
    @apply rounded-bl-lg;
  }
  &--rounded-br {
    @apply rounded-bl-lg;
  }
}
</style>
