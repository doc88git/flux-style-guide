<template>
  <section class="f-layout">
    <div class="f-layout__top">
      <f-header
        :mainTitle="mainTitle"
        :align="align"
        :weight="weight"
        :styles="styles"
        :class="headerClasses"
      >
        <f-menu-button
          v-if="!!menuItems.length || hasMenu"
          slot="menu"
          :color="color"
          :is-open="menuExpand"
          @click="handleMenu"
        />
        <slot slot="logo" name="logo" />
        <slot slot="settings" name="settings" />
      </f-header>
    </div>

    <div class="f-layout__wrapper">
      <f-menu
        v-if="menuItems.length || hasMenu"
        :iconLib="iconLib"
        :menuItems="menuItems"
        :menuSelected="menuSelected"
        :menuExpand="menuExpand"
        :color="color"
        :sub-items-limit="menuSubItemsLimit"
        @click="handleClickMenuItem"
        @expand="handleMenu"
        class="f-layout__wrapper__menu"
      >
        <slot name="menu-prepend" slot="prepend" />
      </f-menu>
      <div :class="contentWrapperClasses">
        <slot name="content" />
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
    menuSubItemsLimit: {
      type: Number,
      default: 1
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
    },
    iconLib: {
      type: String,
      default: 'flux'
    }
  },

  watch: {
    '$f.screen.width': function (width) {
      const { sm } = this.$f.screen.sizes
      if (width < sm && this.menuExpand) this.menuExpand = false
    }
  },

  computed: {
    contentWrapperClasses() {
      return [
        'f-layout__wrapper__content',
        {
          'f-layout__wrapper__content--no-extra-padding':
            this.menuItems.length === 0 && !this.hasMenu
        }
      ]
    },
    headerClasses() {
      return [
        'f-layout__header',
        {
          'f-layout__header--no-menu':
            this.menuItems.length === 0 || !this.hasMenu
        }
      ]
    }
  },

  methods: {
    handleMenu() {
      this.menuExpand = !this.menuExpand
    },
    handleClickMenuItem(ev) {
      this.menuExpand = false
      this.$emit('menu-item-click', ev)
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
    }

    &__content {
      width: 100%;
      position: relative;
      z-index: 10;
      padding: 10px;

      @media screen and (min-width: map-get($sizes, 'tablet')) {
        padding: 10px 10px 10px 80px;
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
