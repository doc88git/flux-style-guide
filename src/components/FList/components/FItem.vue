<template>
  <div class="f-list-item">
    <component :is="tag" :to="to" :link="link">
      <p v-if="title" class="f-list-item__item--title">
        {{ title }}
      </p>
      <p class="f-list-item__item--label">{{ label }}<slot></slot></p>
    </component>
  </div>
</template>

<script>
import { FLink } from "../../Flink";

export default {
  name: "f-item",
  components: {
    FLink
  },
  props: {
    title: String,
    label: String,
    to: String,
    link: {
      type: String,
      default: "#"
    }
  },
  computed: {
    tag() {
      return this.to || this.link ? FLink : "a";
    }
  }
};
</script>

<style lang="scss" scoped>
.f-list-item {
  @apply block px-4 py-2 border-b text-sm;
  &:hover {
    @apply bg-gray-300;
  }
  &__item {
    &--title {
      @apply font-semibold mb-1; // group-hover:text-white
    }
    &--label {
      @apply text-gray-800 mb-1; // group-hover:text-white
    }
  }
}

@group-hover {
  .f-list-item {
    &__item {
      @apply text-white;
    }
  }
}
</style>
