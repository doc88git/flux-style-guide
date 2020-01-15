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
  &--rounded {
    border-radius: 0.5rem;
  }
  &--rounded-t {
    border-top-left-radius: 0.5rem;
    border-top-right-radius: 0.5rem;
  }
  &--rounded-b {
    border-bottom-right-radius: 0.5rem;
    border-bottom-left-radius: 0.5rem;
  }
  &--rounded-tl {
    border-top-left-radius: 0.5rem;
  }
  &--rounded-tr {
    border-top-right-radius: 0.5rem;
  }
  &--rounded-bl {
    border-bottom-left-radius: 0.5rem;
  }
  &--rounded-br {
    border-bottom-right-radius: 0.5rem;
  }
}
</style>
