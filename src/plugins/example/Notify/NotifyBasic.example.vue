<template>
  <div class="p--base m-b--xl">
    <f-button color="purple" @click="showNotif" label="Show Notification" />
  </div>
</template>

<script>
export default {
  methods: {
    showNotif() {
      this.$f.notify({
        message: 'Jim pinged you.',
        color: 'purple'
      })
    }
  }
}
</script>

<style lang="scss" scoped></style>
