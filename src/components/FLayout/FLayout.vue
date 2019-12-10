<template>
  <section class="f-layout">
    <div class="f-layout__menu">
      <f-menu />
    </div>
    <div class="f-layout__header">
      <f-header mainTitle="test">
      </f-header>
    </div>
  </section>
</template>

<script>
import { FMenu } from "../FMenu";
import { FHeader } from "../FHeader";

export default {
  name: "f-layout",
  components: {
    FMenu,
    FHeader
  }
};
</script>

<style lang="scss" scoped>
  .f-layout {
    display: flex;
  }
</style>
