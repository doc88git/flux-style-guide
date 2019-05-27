<template>
  <nav class="f-layout">
    <div class="f-layout__logo">
      <slot name="logo"></slot>
    </div>
    <div class="f-layout__sm-menu">
      <button class="f-layout__sm-menu--btn">
        <f-icon name="menu" />
      </button>
    </div>
    <div class="w-full block flex-grow lg:flex lg:items-center lg:w-auto">
      <div class="text-sm lg:flex-grow">
        <a
          href="#responsive-header"
          class="block mt-4 lg:inline-block lg:mt-0 text-gray-200 hover:text-white mr-4"
        >
          Docs
        </a>
        <a
          href="#responsive-header"
          class="block mt-4 lg:inline-block lg:mt-0 text-gray-200 hover:text-white mr-4"
        >
          Examples
        </a>
        <a
          href="#responsive-header"
          class="block mt-4 lg:inline-block lg:mt-0 text-gray-200 hover:text-white"
        >
          Blog
        </a>
      </div>
      <div>
        <a
          href="#"
          class="inline-block text-sm px-4 py-2 leading-none border rounded text-white border-white hover:border-transparent hover:text-gray-500 hover:bg-white mt-4 lg:mt-0"
          >Download</a
        >
      </div>
    </div>
  </nav>
</template>

<script>
import { FIcon } from "@/components/FIcon";

export default {
  name: "f-layout",
  components: {
    FIcon
  }
};
</script>

<style lang="scss" scoped>
.f-layout {
  @apply flex items-center justify-between flex-wrap bg-gray-500 p-6;
  &__sm-menu {
    @apply text-white;
    &--btn {
      @apply flex items-center px-3 py-2 border rounded border-gray-400
      &:hover {
        @apply text-white border-white;
      }
    }
  }
  &__logo {
    @apply flex items-center flex-shrink-0 text-white mr-6;
    & > span {
      @apply font-semibold text-xl tracking-tight;
    }
    svg,
    img {
      @apply fill-current h-8 w-8 mr-2;
    }
  }
}
@screen lg {
  .f-layout {
    &__sm-menu {
      @apply hidden;
    }
  }
}
</style>
