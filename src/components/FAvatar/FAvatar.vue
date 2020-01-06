<template>
  <img :src="src" @click="click" class="f-avatar" />
</template>

<script>
export default {
  name: 'f-avatar',
  props: {
    src: {
      type: String,
      default: 'https://cdn.quasar.dev/img/avatar5.jpg'
    },
    click: {
      type: Function,
      default: () => ({})
    }
  }
}
</script>

<style lang="scss" scoped>
.f-avatar {
  @apply items-center border-2 relative align-middle inline-block rounded-full object-cover bg-center;
  height: 50px;
  width: 50px;
  font-size: 48px;
  padding: 1px;
}
</style>
