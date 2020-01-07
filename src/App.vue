<template>
  <f-container class="content">
    <h1 class="flux-logo">{{ styleGuideName }}</h1>

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
import { FContainer } from '@/components/FContainer'

const styleGuideName = 'Flux Style Guide'
export default {
  components: {
    FContainer
  },
  data: () => ({
    styleGuideName,
    menuItems: [
      {
        name: 'Documentation',
        url: 'https://github.com/doc88git/flux-style-guide'
      },
      {
        name: 'Storybook',
        url: 'http://flux-dev.doc88.com.br:3001'
      },
      {
        name: 'Widget Base',
        url: 'https://github.com/doc88git/flux-widget-base'
      },
      {
        name: 'Flux-CLI',
        url: 'https://github.com/doc88git/flux-cli'
      },
      {
        name: 'Doc88',
        url: 'http://doc88.com.br'
      }
    ]
  })
}
</script>

<style lang="scss">
.content {
  @apply flex flex-wrap mx-auto items-center justify-center h-screen;
  .flux-logo {
    @apply w-full text-center m-0 text-primary;
  }
  ul.menu {
    @apply w-full text-center uppercase;
    li {
      @apply inline mx-10 text-secondary;
      a:hover {
        @apply text-secondary-light;
      }
    }
  }
}
</style>
