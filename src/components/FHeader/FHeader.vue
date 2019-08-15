<template>
  <header class="main-header">
    <!-- <slot name="menu"></slot> -->
    <h4 class="main-header__title">{{ mainTitle }}</h4>
    <!-- <slot name="settings"></slot> -->
  </header>
</template>

<script>
import { FButton } from '../FButton';
export default {
  name: 'f-header',
  components: { FButton },
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
    @apply flex justify-between w-full p-4 text-center items-center shadow-xxxl;
    &__title {
      @apply w-full font-bold;
      color: #666;
    }
  }

  .f-icon--base {
    font-size: 1.5rem;
  }
</style>

