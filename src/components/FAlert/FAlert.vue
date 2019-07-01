<template>
  <div class="f-alert">
    <f-card class="f-alert__card">
      <template v-slot:content>
        <f-card-title class="f-alert__header">
          Contrary to popular belief
        </f-card-title>
        <f-card-separator class="f-alert__separator" />
        <f-card-body class="f-alert__body">
          There are many variations of passages of Lorem Ipsum available, but
          the majority.
        </f-card-body>
      </template>
    </f-card>
  </div>
</template>

<script>
import {
  FCard,
  FCardTitle,
  FCardBody,
  FCardSeparator
} from "../FCard/index.js";

export default {
  name: "f-alert",
  components: {
    FCard,
    FCardTitle,
    FCardSeparator,
    FCardBody
  },
  props: {}
};
</script>

<style lang="scss" scoped>
.f-alert {
  @apply absolute;
  @apply max-w-full;
  @apply whitespace-normal;
  @apply rounded-lg;
  width: 300px;

  &__card {
    @apply px-2 py-2 border;
  }
  &__header {
    @apply text-base p-0 m-0;
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
