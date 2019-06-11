<template>
  <img :src="src" class="f-avatar" />
</template>

<script>
export default {
  name: "f-avatar",
  props: {
    src: {
      type: String,
      default: "https://cdn.quasar.dev/img/avatar5.jpg",
      required: true
    }
  }
};
</script>

<style lang="scss" scoped>
.f-avatar {
  @apply items-center h-16 w-16 relative align-middle inline-block rounded-full object-cover bg-center;
  font-size: 48px;
}
</style>
