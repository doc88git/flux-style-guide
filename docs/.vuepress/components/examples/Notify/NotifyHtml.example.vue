<template>
    <div class="p--base m-b--xl">
      <f-button @click="showNotif" label="Show HTML Notification" />
    </div>
</template>

<script>
export default {
  methods: {
    showNotif() {
      this.$f.notify({
        message: '<em>I can</em> <span style="color: red">use</span> <strong>HTML</strong>',
        html: true
      })
    }
  }
}
</script>

<style lang="scss" scoped></style>
