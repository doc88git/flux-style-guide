<template>
  <f-container class="content">
    <h1 class="flux-logo">{{ styleGuideName }}</h1>

    <IconBase name="download" />

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
import { FContainer } from '../src/components/FContainer'
import IconBase from '../src/components/FIcon/IconBase'

const styleGuideName = 'Flux Style Guide'
export default {
  components: {
    FContainer,
    IconBase
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
  display: flex;
  flex-wrap: wrap;
  margin-right: auto;
  margin-left: auto;
  align-items: center;
  justify-content: center;
  height: 100vh;
  .flux-logo {
    width: 100%;
    text-align: center;
    margin: 0;
    color: var(--color-primary);
  }
  ul.menu {
    width: 100%;
    text-align: center;
    text-transform: uppercase;
    li {
      display: inline;
      margin-right: 2.5rem;
      margin-left: 2.5rem;
      color: var(--color-secondary);
      a:hover {
        color: var(--color-secondary-light);
      }
    }
  }
}
</style>
