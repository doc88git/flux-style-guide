<template>
  <div class="f-alert">
    <div class="f-alert__header" v-if="hasTitle">
      <slot name="title">{{ title }}</slot>
    </div>
    <f-card-separator class="f-alert__separator" v-if="hasTitle" />
    <div class="f-alert__body" v-if="hasContent">
      <slot name="content">{{ content }}</slot>
    </div>
  </div>
</template>

<script>
import { FCardSeparator } from "../FCard/index.js";

export default {
  name: "f-alert",
  components: {
    FCardSeparator
  },
  props: {
    title: String,
    content: {
      type: String
    }
  },
  computed: {
    hasTitle() {
      return this.$slots.title || !!this.title;
    },
    hasContent() {
      return this.$slots.content || !!this.content;
    }
  }
};
</script>

<style lang="scss" scoped>
.f-alert {
  @apply absolute;
  @apply max-w-full p-2;
  @apply whitespace-normal;
  @apply rounded-lg mx-auto bg-white shadow-md;
  width: 300px;

  &__header {
    @apply text-sm font-bold p-0 m-0;
  }

  &__body {
    @apply text-sm m-0;
  }

  &__separator {
    @apply my-2;
  }

  &--top {
  }
  &--buttom {
  }
  &--center {
  }
  &--left {
  }
  &--right {
  }
}
</style>
