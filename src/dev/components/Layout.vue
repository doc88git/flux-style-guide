<template>
  <div class="Layout">
    <LayoutHeader class="Layout--top-header" />
    <LayoutMenu class="Layout--menu" />
    <f-container class="Layout--content">
      <slot />
    </f-container>
  </div>
</template>

<script>
import LayoutHeader from './Header'
import LayoutMenu from './Menu'

export default {
  components: { LayoutMenu, LayoutHeader }
}
</script>

<style lang="scss" scoped>
$header-height: 100px;

.Layout {
  display: grid;
  grid-template-areas:
    'top-header top-header top-header top-header top-header top-header'
    'menu content content content content content';
  grid-column-gap: 16px;
  height: 100vh;

  &--top-header {
    grid-area: top-header;
    width: 100vw;
    height: $header-height;
    background: rgba(47, 49, 153, 0.05);
    padding: 10px;
  }

  &--menu {
    grid-area: menu;
    height: calc(100vh - #{$header-height});
  }

  &--content {
    grid-area: content;
    height: calc(100vh - #{$header-height});
    margin-top: 50px;
  }
}
</style>
