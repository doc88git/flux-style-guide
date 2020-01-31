<template>
  <header class="main-header">
    <slot name="menu"> </slot>
    <div class="main-header__logo" v-if="!!$slots.logo">
      <slot name="logo"></slot>
    </div>
    <h2 class="main-header__title" v-if="!$slots.logo && mainTitle">
      {{ mainTitle }}
    </h2>
    <div class="main-header__settings" v-if="!!$slots.settings">
      <slot name="settings"></slot>
    </div>
  </header>
</template>

<script>
export default {
  name: 'f-header',
  props: {
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
  }
}
</script>

<style lang="scss" scoped>
.main-header {
  display: flex;
  padding-right: 1.25rem;
  width: 100%;
  text-align: center;
  align-items: center;
  top: 0;
  position: fixed;
  max-height: 70px;
  box-shadow: var(--shadow-base);
  &__title {
    padding-right: 2.5rem;
    padding-left: 2.5rem;
    font-weight: 400;
    font-size: var(--text-xl);
    text-align: left;
    color: #666;
  }

  &__logo {
    padding: 0.75rem 2.5rem;
    height: 70px;
    img {
      height: 46px;
    }
  }

  &__settings {
    display: flex;
    align-items: center;
    justify-content: flex-end;
    flex: 1;
  }
}

.f-icon--base {
  font-size: 1.5rem;
}
</style>
