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
  data: () => ({})
}
</script>

<style lang="scss">
.FApp {
}
</style>
