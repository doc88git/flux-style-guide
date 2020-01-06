<template>
  <component class="f-list-item" :is="tag" :to="to" :link="link" tabindex="0">
    <p v-if="title" class="f-list-item__item--title">
      {{ title }}
    </p>
    <p class="f-list-item__item--label">
      <slot>{{ label }}</slot>
    </p>
  </component>
</template>

<script>
import { FLink } from '../FLink'

export default {
  name: 'f-item',
  props: {
    title: String,
    label: String,
    to: String,
    link: {
      type: String,
      default: '#'
    }
  },
  computed: {
    tag() {
      return this.to || this.link ? FLink : 'a'
    }
  }
}
</script>

<style lang="scss" scoped>
.f-list-item {
  @apply block px-4 py-2 border-b text-sm;
  &:hover,
  &:focus {
    background-color: var(--color-gray-300);
  }
  &__item {
    &--title {
      @apply font-semibold mb-1;
    }
    &--label {
      @apply mb-1;
      color: var(--color-gray-800);
    }
  }
}
</style>
