<template>
  <header class="main-header">
    <slot name="menu"></slot>
    <div class="main-header__logo" v-if="logo">
      <img :src="logo" alt="Logo" />
    </div>
    <h2 class="main-header__title" v-else>{{ mainTitle }}</h2>
    <slot name="settings"></slot>
  </header>
</template>

<script>
export default {
  name: "f-header",
  props: {
    mainTitle: {
      type: String,
      default: "Main Title"
    },
    logo: {
      type: String,
      default: ""
    },
    align: {
      type: String,
      default: "center"
    },
    weight: {
      type: String,
      default: "500"
    },
    styles: {
      type: String,
      default: null
    }
  }
};
</script>

<style lang="scss" scoped>
.main-header {
  @apply flex justify-between pr-5 w-full text-center items-center shadow-xxxl top-0 fixed;
  max-height: 70px;
  &__title {
    @apply w-full px-5 font-normal text-xl text-left;
    color: #666;
  }

  &__logo {
    @apply w-full px-5 py-3 font-normal text-xl text-left;
    img {
      height: 46px;
    }
  }
}

.f-icon--base {
  font-size: 1.5rem;
}
</style>
