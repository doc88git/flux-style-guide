<template>
  <section>
    <div>
      <f-button label="Botão" />
      <f-button type="flat">Botão</f-button>
      <f-button icon="alarm" />
      <f-button icon="home" type="outline">Botão</f-button>
    </div>
  </section>
</template>

<script>
import { FButton } from "@/components/FButton";

export default {
  components: {
    FButton
  }
};
</script>

<style lang="scss" src="@/assets/f-style-guide.scss"></style>
