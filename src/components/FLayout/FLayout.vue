<template>
  <section class="f-layout">
    <div class="f-layout__left">
      <f-menu class="f-layout__left__menu" />
    </div>
    <div class="f-layout__right">
      <f-header class="f-layout__header" mainTitle="test">
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
    background-color: #FFF;
    z-index: 80;
  }

  &__right {
    z-index: 90;
    flex-grow: 1;
    padding: 80px 10px 0;
  }
}
</style>
