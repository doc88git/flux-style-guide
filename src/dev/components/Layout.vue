<template>
  <f-container :class="{ Layout: true, 'Layout--hideLayout': hideLayout }">
    <div v-if="!hideLayout" class="Layout__logo">
      <router-link to="/">
        <h1>FSG</h1>
      </router-link>
    </div>

    <div v-if="!hideLayout" class="Layout__head"></div>

    <LayoutMenu v-if="!hideLayout" class="Layout__menu" />

    <div class="Layout__content">
      <slot />
    </div>
  </f-container>
</template>

<script>
import LayoutMenu from './Menu'

export default {
  components: { LayoutMenu },
  computed: {
    hideLayout() {
      return typeof this.$route.query.hideLayout !== 'undefined'
    }
  }
}
</script>

<style lang="scss" scoped>
$header-height: 100px;
$grid-gap: 16px;
$menu-width: 200px;

.Layout {
  display: grid;
  grid-template-areas:
    'logo head-content'
    'menu content';
  grid-column-gap: $grid-gap;
  height: 100vh;

  &--hideLayout {
    display: block;
    .Layout--content {
      width: 100%;
      height: auto;
      margin: 10px;
      padding: 0;
    }
  }

  &__logo {
    grid-area: logo;
    width: $menu-width;
    height: 100px;
    margin: auto;
    padding: 16px;
  }

  &__menu {
    grid-area: menu;
    width: $menu-width;
    height: 100vh;
    background: rgba(47, 49, 153, 0.05);
  }

  &__head {
    grid-area: head-content;
    width: calc(100vw - (#{$menu-width} + #{$grid-gap}));
    height: 100px;
    padding: 10px;
  }

  &__content {
    grid-area: content;
    width: calc(100vw - (#{$menu-width} + #{$grid-gap * 2}));
    overflow: auto;
    padding: 20px;
    // height: calc(100vh - (#{$header-height} + #{$grid-gap}));
  }
}
</style>
