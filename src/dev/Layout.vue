<template>
  <f-container class="Layout">
    <LayoutMenu class="Layout--menu" />
    <div class="Layout--content">
      <slot />
    </div>
  </f-container>
</template>

<script>
import LayoutMenu from './Menu'

export default {
  components: { LayoutMenu }
}
</script>

<style lang="scss" scoped>
.Layout {
  display: grid;
  grid-template-areas: 'menu content content content content content';
  grid-column-gap: 16px;

  &--menu {
    grid-area: menu;
    height: 100vh;
  }
  &--content {
    grid-area: content;
    height: 100vh;
  }
}
</style>
