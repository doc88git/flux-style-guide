<template>
  <section class="f-modal">
    <div class="f-modal__content">
      <slot name="image-header">
        <f-image v-if="headerBg" rounded-t :src="headerBg" />
      </slot>
      <slot name="content">
        <main class="f-modal__body">
          <slot></slot>
        </main>
      </slot>
    </div>
  </section>
</template>

<script>
import FImage from "../FImage/FImage";

export default {
  name: "f-modal",
  components: {
    FImage
  },
  props: {
    headerBg: String
  }
};
</script>

<style lang="scss">
.f-modal {
  position: fixed;
  background: rgba(255, 255, 255, 0.8);
  height: 100%;
  width: 100%;
  display: flex;
  top: 0;

  .f-card-title {
    display: flex;
    align-items: center;
    justify-content: space-between;
  }
}

.f-modal__content {
  padding: 20px;
  max-width: 960px;
  margin: auto;
}
</style>
