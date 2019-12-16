<template>
  <section class="f-layout">
    <div class="f-layout__left">
      <f-menu
        :menuItems="menuItems"
        :menuSelected="menuSelected"
        :color="color"
        class="f-layout__left__menu"
      />
    </div>
    <div class="f-layout__right">
      <f-header
        :mainTitle="mainTitle"
        :align="align"
        :weight="weight"
        :styles="styles"
        class="f-layout__header"
      >
        <template v-slot:settings>
          <div class="flex items-center justify-center">
            <f-widget></f-widget>
            <f-avatar></f-avatar>
          </div>
        </template>
      </f-header>
      <div class="f-layout__content">
        <slot name="content"></slot>
      </div>
    </div>
  </section>
</template>

<script>
import { FMenu } from "../FMenu";
import { FHeader } from "../FHeader";
import { FWidget } from "../FWidget";
import { FAvatar } from "../FAvatar";

export default {
  name: "f-layout",
  components: {
    FMenu,
    FHeader,
    FWidget,
    FAvatar
  },
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
  }
};
</script>

<style lang="scss" scoped>
.f-layout {
  display: flex;
  width: 100%;
  height: 100%;

  &__left {
    flex-grow: 0;
    width: 70px;
    z-index: 100;

    &__menu {
      position: fixed;
      left: 0;
      top: 0;
    }
  }

  &__content {
    width: 100%;
    position: relative;
    z-index: 10;
  }

  &__header {
    width: calc(100% - 70px);
    background-color: #fff;
    z-index: 80;
  }

  &__right {
    z-index: 90;
    flex-grow: 1;
    padding: 80px 10px 0;
  }
}
</style>
