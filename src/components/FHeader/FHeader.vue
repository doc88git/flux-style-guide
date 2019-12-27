<template>
  <header class="main-header">
    <slot name="menu">
      <f-menu-button />
    </slot>
    <div class="main-header__logo" v-if="!!$slots.logo">
      <slot name="logo"></slot>
    </div>
    <h2 class="main-header__title" v-if="!$slots.logo && mainTitle">
      {{ mainTitle }}
    </h2>
    <div class="main-header__settings" v-if="!!$slots.settings">
      <slot name="settings"></slot>
    </div>
  </header>
</template>

<script>
import FMenuButton from "../FMenu/FMenuButton";

export default {
  name: "f-header",
  components: { FMenuButton },
  props: {
    mainTitle: {
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
  @apply flex pr-5 w-full text-center items-center shadow-xxxl top-0 fixed;
  max-height: 70px;
  &__title {
    @apply px-10 font-normal text-xl text-left;
    color: #666;
  }

  &__logo {
    @apply px-10 py-3;
    height: 70px;
    img {
      height: 46px;
    }
  }

  &__settings {
    display: flex;
    align-items: center;
    justify-content: flex-end;
    flex: 1;
  }
}

.f-icon--base {
  font-size: 1.5rem;
}
</style>
