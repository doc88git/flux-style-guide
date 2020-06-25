<template>
  <layout class="FApp">
    <router-view />
  </layout>
</template>

<script>
import Layout from './Layout'

export default {
  components: {
    Layout
  },

  created() {
    document.title = 'Flux Style Guide'
  }
}
</script>

<style lang="scss">
.FApp {
}
</style>
