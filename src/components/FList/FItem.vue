<template>
  <component class="f-list-item" :is="tag" :to="to" :link="link" tabindex="0">
    <slot>
      <p v-if="title" class="f-list-item__item--title">
        {{ title }}
      </p>
      <p class="f-list-item__item--label">
        {{ label }}
      </p>
    </slot>
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
  display: block;
  padding: 0.5rem 1rem;
  border-bottom-width: 1px;
  font-size: var(--text-sm);
  &:hover,
  &:focus {
    background-color: var(--color-gray-300);
  }
  &__item {
    &--title {
      font-weight: 600;
      margin-bottom: 0.25rem;
    }
    &--label {
      margin-bottom: 0.25rem;
      color: var(--color-gray-800);
    }
  }
}
</style>
