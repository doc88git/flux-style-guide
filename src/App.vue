<template>
  <f-container class="content">
    <h1 class="flux-logo">{{ styleGuideName }}</h1>
    <f-menu iconLib="material" :menuItems="menuItems" />

    <ul class="menu">
      <li v-for="(item, index) in menuItems" :key="index">
        <a target="_blank" :href="item.url">
          {{ item.name }}
        </a>
        <f-icon
          :lib="iconLib"
          :color="item.color"
          :name="item.icon"
          :size="item.size"
        />
      </li>
    </ul>
  </f-container>
</template>

<script>
import { FContainer } from '../src/components/FContainer'
import FIcon from '../src/components/FIcon/FIcon'
import FMenu from '../src/components/FMenu/FMenu.vue'

const styleGuideName = 'Flux Style Guide'
export default {
  components: {
    FContainer,
    FIcon,
    FMenu
  },
  data: () => ({
    styleGuideName,
    menuItems: [
      {
        name: 'Documentation',
        to: '#',
        icon: 'file-text',
        color: 'orange',
        size: 'sm',
        clickable: true
      },
      {
        name: 'Storybook',
        to: '#',
        icon: 'star',
        color: 'green',
        size: 'sm',
        clickable: true
      },
      {
        name: 'Widget Base',
        to: 'https://github.com/doc88git/flux-widget-base',
        icon: 'apps',
        color: 'blue',
        size: 'sm',
        clickable: true
      },
      {
        name: 'Flux-CLI',
        to: 'https://github.com/doc88git/flux-cli',
        icon: 'energy-distribution',
        color: 'yellow',
        size: 'sm',
        clickable: true
      },
      {
        name: 'Doc88',
        to: 'http://doc88.com.br',
        icon: 'factory',
        color: 'pink',
        size: 'sm',
        clickable: true
      }
    ]
  }),
  link: {
    type: String,
    default: 'https://github.com/doc88git/flux-cli'
  },
  props: {
    iconLib: {
      type: String,
      default: 'flux'
    }
  }
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
