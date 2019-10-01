<template>
  <header class="main-header">
    <slot name="menu"></slot>
    <h2 class="main-header__title">{{ mainTitle }}</h2>
    <slot name="settings"></slot>
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
    },
    align: {
      type: String,
      default: 'center'
    },
    weight: {
      type: String,
      default: 500
    },
    styles: {
      type: String,
      default: null
    }
  }
}
</script>

<style lang="scss" scoped>
  .main-header {
    @apply flex justify-between px-5 py-1 w-full text-center items-center shadow-xxxl top-0 fixed;
    min-height: 70px;
    &__title {
      @apply w-full font-normal text-xl text-left;
      color: #666;
    }
  }

  .f-icon--base {
    font-size: 1.5rem;
  }
</style>

