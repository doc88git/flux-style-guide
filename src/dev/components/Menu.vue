<template>
  <div class="AppMenu">
    <f-list>
      <f-list-item v-for="(group, g) in menu" :key="g">
        <p>{{ group.name }}</p>

        <f-list v-for="(child, c) in group.child" :key="c">
          <f-list-item :to="child.path">
            {{ child.name }}
          </f-list-item>
        </f-list>

        <f-list>
          <f-list-item>
            {{ group.subgroup.name }}

            <f-list v-for="(subgroup, s) in group.subgroup.child" :key="s">
              <f-list-item :to="subgroup.path">
                {{ subgroup.name }}
              </f-list-item>
            </f-list>
          </f-list-item>
        </f-list>
      </f-list-item>
    </f-list>
  </div>
</template>

<script>
import collect from 'collect.js'

export default {
  data: () => ({
    menu: []
  }),
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
      handler: function() {
        this.makeGroups()
      },
      immediate: true
    }
  },
  methods: {
    getGroups() {
      let data = collect(this.clenedRoutes)
      let groups = data.groupBy(item => item.meta.group)

      return groups.map(item => item.groupBy(item => item.meta.subgroup).all())
    },
    getSubgroups(item, key) {
      let model = {
        name: key,
        child: [],
        subgroup: {}
      }

      Object.keys(item).forEach(k => {
        if (!k) {
          model.child = item[k].all()
          return
        }

        let sub = {
          name: k,
          child: []
        }

        sub.child = item[k].all()
        model.subgroup = sub
      })

      return model
    },
    makeGroups() {
      const groups = this.getGroups()
      this.menu = []

      groups.map((i, k) => {
        let data = this.getSubgroups(i, k)
        this.menu.push(data)
      })

      console.log(this.menu)
    }
  }
}
</script>

<style lang="scss" scoped>
.AppMenu {
  padding-top: 8px;
}
</style>
