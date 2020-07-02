<template>
  <div>
    <h3>Basic</h3>
    <section>
      <f-button
        outline
        small
        @click="$f.fullscreen.toggle()"
        :icon="$f.fullscreen.isActive ? 'X' : 'expand'"
        :label="$f.fullscreen.isActive ? 'Exit Fullscreen' : 'Go Fullscreen'"
        size="small"
      />
    </section>
    <h3>On custom element</h3>
    <section>
      <f-button
        outline
        small
        @click="toggle($event)"
        :icon="$f.fullscreen.isActive ? 'X' : 'expand'"
        :label="$f.fullscreen.isActive ? 'Exit Fullscreen' : 'Go Fullscreen'"
        size="small"
      />
    </section>
  </div>
</template>

<script>
import { FButton } from '@/components/FButton'

export default {
  components: {
    FButton
  },
  methods: {
    toggle(e) {
      const target = e.target.parentNode.parentNode.parentNode

      this.$f.fullscreen
        .toggle(target)
        .then(() => {
          // success!
        })
        .catch(err => {
          alert(err)
          // uh, oh, error!!
          // console.error(err)
        })
    }
  }
}
</script>

<style lang="scss" scoped>
section {
  margin: 16px 0;
}
</style>
