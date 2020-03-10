<template>
  <f-container class="content">
    <h1 class="flux-logo">{{ styleGuideName }}</h1>
    <f-menu :menuItems="menuItems" />

    <FIcon name="download" clickable />

    <ul class="menu">
      <li v-for="(item, index) in menuItems" :key="index">
        <a target="_blank" :href="item.url">
          {{ item.name }}
        </a>
        <f-icon
          :color="item.color"
          :name="item.icon"
          :size="item.size"
          clickable
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
        size: 16
      },
      {
        name: 'Storybook',
        to: '#',
        icon: 'star',
        color: 'green',
        size: 16
      },
      {
        name: 'Widget Base',
        to: 'https://github.com/doc88git/flux-widget-base',
        icon: 'apps',
        color: 'blue',
        size: 16
      },
      {
        name: 'Flux-CLI',
        to: 'https://github.com/doc88git/flux-cli',
        icon: 'energy-distribution',
        color: 'yellow',
        size: 16
      },
      {
        name: 'Doc88',
        to: 'http://doc88.com.br',
        icon: 'factory',
        color: 'pink',
        size: 16
      }
    ]
  }),
  link: {
    type: String,
    default: 'https://github.com/doc88git/flux-cli'
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
