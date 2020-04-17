<template>
  <div class="AppMenu">
    <f-list>
      <f-list-item v-for="(f, key) in clenedRoutes" :key="key">
        {{ f.name }}

        <f-list>
          <f-list-item
            v-for="(c, i) in f.children"
            :key="i"
            :to="`${f.path}${c.path}`"
          >
            {{ c.name }}
          </f-list-item>
        </f-list>
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
      return this.routes.filter(i => !['*', '/'].includes(i.path))
    }
  },
  watch: {
    $route: {
      handler(n) {
        console.log({ n })
      }
    }
  }
}
</script>

<style lang="scss" scoped>
.AppMenu {
  padding-top: 8px;
}
</style>
