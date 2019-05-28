<template>
  <f-container class="content">
    <div class="flux-logo"><span>[</span>Flux<span>]</span>Style Guide</div>

    <FContainer>
      <f-layout>
        <slot v-name="logo">A</slot>
      </f-layout>

      <f-list>
        <f-item to="/" title="Create from scratch">
          Create a repository without any source code
        </f-item>
        <f-item
          title="Fork"
          label="Start a project base on the source of an existing one."
        />
      </f-list>
    </FContainer>

    <ul class="menu">
      <li v-for="(item, index) in menuItems" :key="index">
        <a target="_blank" :href="item.url">
          {{ item.name }}
        </a>
      </li>
    </ul>
  </f-container>
</template>

<script>
import Components from "@/components/index";

export default {
  components: Components,
  data: () => ({
    menuItems: [
      {
        name: "Documentation",
        url: "https://github.com/doc88git/flux-style-guide"
      },
      {
        name: "Widget Base",
        url: "https://github.com/doc88git/flux-widget-base"
      },
      {
        name: "Flux-CLI",
        url: "https://github.com/doc88git/flux-cli"
      },
      {
        name: "Doc88",
        url: "http://doc88.com.br"
      }
    ]
  })
};
</script>

<style lang="scss" src="@/assets/f-style-guide.scss"></style>

<style lang="scss">
.content {
  @apply flex flex-wrap mx-auto items-center justify-center h-screen;
  .flux-logo {
    @apply w-full text-center m-0 text-5xl text-gray-500;
    span {
      @apply text-green-300 text-6xl mx-2;
    }
  }
  ul.menu {
    @apply w-full text-center uppercase;
    li {
      @apply text-gray-700 inline mx-10;
      a:hover {
        @apply text-gray-600;
      }
    }
  }
}
</style>
