<template>
  <div class="AppMenu">
    <f-list>
      <f-list-item
        v-for="(item, key) in clenedRoutes"
        :key="key"
        :to="item.path"
        >{{ item.path }}
      </f-list-item>
    </f-list>
  </div>
</template>

<script>
export default {
  computed: {
    routes() {
      return this.$router.options.routes
    },
    clenedRoutes() {
      return this.routes.filter(i => i.path.startsWith('/F'))
    }
  }
}
</script>

<style lang="scss" scoped>
.AppMenu {
  padding-top: 8px;
}
</style>
