<template>
  <section class="f-layout">
    <div class="f-layout__top">
      <f-header
        :mainTitle="mainTitle"
        :align="align"
        :weight="weight"
        :styles="styles"
        class="f-layout__header"
        :class="{
          'f-layout__header--no-menu': menuItems.length === 0 || !hasMenu
        }"
      >
        <template v-slot:menu v-if="menuItems.length || hasMenu">
          <f-menu-button
            @click="handleMenu"
            :expanded="menuExpand"
            :color="color"
          />
        </template>
        <template v-slot:logo>
          <slot name="logo"></slot>
        </template>
        <template v-slot:settings>
          <slot name="settings"></slot>
        </template>
      </f-header>
    </div>
    <div class="f-layout__wrapper">
      <f-menu
        :menuItems="menuItems"
        :menuSelected="menuSelected"
        :menuExpand="menuExpand"
        :color="color"
        @click="handleClickMenuItem"
        class="f-layout__wrapper__menu"
        v-if="menuItems.length || hasMenu"
      />
      <div
        class="f-layout__wrapper__content"
        :class="{
          'f-layout__wrapper__content--no-extra-padding':
            menuItems.length === 0 && !hasMenu
        }"
      >
        <slot name="content"></slot>
      </div>
    </div>
  </section>
</template>

<script>
import { FHeader } from '../FHeader'
import { FMenu, FMenuButton } from '../FMenu'

export default {
  name: 'f-layout',
  components: { FHeader, FMenu, FMenuButton },
  data: () => ({
    menuExpand: false
  }),
  props: {
    menuItems: {
      type: Array,
      default: () => []
    },
    hasMenu: {
      type: Boolean,
      default: false
    },
    menuSelected: {
      type: String,
      default: 'home'
    },
    color: {
      type: String,
      default: 'primary'
    },
    mainTitle: {
      type: String,
      default: ''
    },
    align: {
      type: String,
      default: 'center'
    },
    weight: {
      type: String,
      default: '500'
    },
    styles: {
      type: String,
      default: null
    }
  },
  methods: {
    handleMenu() {
      this.menuExpand = !this.menuExpand
    },
    handleClickMenuItem() {
      this.menuExpand = false
    }
  }
}
</script>

<style lang="scss" scoped>
@import '../../assets/f-variables.scss';
.f-layout {
  display: flex;
  flex-direction: column;
  width: 100%;
  height: 100%;

  &__wrapper {
    display: flex;
    &__menu {
      position: fixed;
      flex-grow: 0;
      width: 70px;
      z-index: 90;
      height: calc(100vh - 70px);

      @media screen and (max-width: map-get($sizes, 'tablet' )) {
        position: fixed;
      }
    }

    &__content {
      width: 100%;
      position: relative;
      z-index: 10;
      padding: 10px 10px 10px 80px;

      @media screen and (max-width: map-get($sizes, 'tablet' )) {
        padding: 1.25rem;
      }

      &--no-extra-padding {
        padding: 1.25rem;
      }
    }
  }

  &__header {
    width: 100%;
    background-color: #fff;
    z-index: 80;

    &--no-menu {
      padding-top: 1.25rem;
      padding-bottom: 1.25rem;
    }
  }

  &__top {
    z-index: 100;
    flex-grow: 1;
    padding: 70px 0 0;
  }
}
</style>
