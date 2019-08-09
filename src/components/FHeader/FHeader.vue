<template>
  <header class="main-header">
    <!-- <slot name="menu"></slot> -->
    <f-menu></f-menu>
    <h4 class="main-header__title">{{ mainTitle }}</h4>
    <slot name="avatar"></slot>
  </header>
</template>

<script>
import { FMenu } from '../FMenu';
export default {
  name: 'f-header',
  components: { FMenu },
  props: {
    mainTitle: {
      type: String,
      default: 'Main Title'
    }
  }
}
</script>

<style lang="scss" scoped>
  .main-header {
    @apply flex justify-between w-full p-4 text-center shadow-xxxl;
    &__title {
      @apply w-full font-bold;
      color: #666;
    }
  }
</style>

