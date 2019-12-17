<template>
  <section class="f-layout">
    <div class="f-layout__top">
      <f-header
        :mainTitle="mainTitle"
        :logo="logo"
        :align="align"
        :weight="weight"
        :styles="styles"
        class="f-layout__header"
      >
        <template v-slot:menu>
          <f-menu-button :handler="handleMenu" :expanded="menuExpand" :color="color" />
        </template>
        <template v-slot:settings>
          <div class="flex items-center justify-center">
            <f-widget></f-widget>
            <f-avatar></f-avatar>
          </div>
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
      />
      <div class="f-layout__wrapper__content">
        <slot name="content"></slot>
      </div>
    </div>
  </section>
</template>

<script>
import { FMenu } from "../FMenu";
import { FHeader } from "../FHeader";
import { FMenuButton } from "../FMenu";
import { FWidget } from "../FWidget";
import { FAvatar } from "../FAvatar";

export default {
  name: "f-layout",
  components: {
    FMenu,
    FHeader,
    FMenuButton,
    FWidget,
    FAvatar
  },
  data: () => ({
    menuExpand: false
  }),
  props: {
    menuItems: {
      type: Array,
      default: () => {
        return [
          { name: "Home", url: "#", id: "home", icon: "home" },
          { name: "Empresa", url: "#", id: "company", icon: "apartment" },
          {
            name: "Configurações",
            url: "#",
            id: "configuration",
            icon: "brightness_5"
          }
        ];
      }
    },
    menuSelected: {
      type: String,
      default: "home"
    },
    color: {
      type: String,
      default: "primary"
    },
    mainTitle: {
      type: String,
      default: "Main Title"
    },
    logo: {
      type: String,
      default: ""
    },
    align: {
      type: String,
      default: "center"
    },
    weight: {
      type: String,
      default: "500"
    },
    styles: {
      type: String,
      default: null
    }
  },
  methods: {
    handleMenu() {
      this.menuExpand = !this.menuExpand;
    },
    handleClickMenuItem() {
      this.menuExpand = false;
    }
  }
};
</script>

<style lang="scss" scoped>
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

      @media screen and (max-width: $size-tablet) {
        position: fixed;
      }
    }

    &__content {
      width: 100%;
      position: relative;
      z-index: 10;
      padding: 10px 10px 10px 80px;

      @media screen and (max-width: $size-tablet) {
        padding: 10px;
      }
    }
  }

  &__header {
    width: 100%;
    background-color: #fff;
    z-index: 80;
  }

  &__top {
    z-index: 100;
    flex-grow: 1;
    padding: 70px 0 0;
  }
}
</style>
