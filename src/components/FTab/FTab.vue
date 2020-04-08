<template>
  <div class="f-tab">
    <FCard>
      <FCardTitle
        v-touch-swipe.mouse="userSwiped"
        ref="tabHeader"
        class="f-tab__header"
      >
        <FButtonGroup
          ref="btnGroup"
          :tab="!fill"
          :options="options"
          :default="1"
          @change="setSelected"
        />
      </FCardTitle>
      <FSeparator v-if="!noSeparator" />
      <FCardBody
        v-for="(item, index) in options"
        :key="index"
        :data-value="item.value"
      >
        <template v-if="item.value === selected">
          <slot :name="`content-${item.value}`" />
        </template>
      </FCardBody>
    </FCard>
  </div>
</template>

<script>
import { FCard, FCardBody, FCardTitle } from '../FCard'
import { FSeparator } from '../FSeparator'
import { FButtonGroup } from '../FButton'

export default {
  name: 'f-tab',

  components: {
    FCard,
    FCardBody,
    FSeparator,
    FButtonGroup,
    FCardTitle
  },

  props: {
    fill: Boolean,
    options: Array,
    noSeparator: Boolean
  },

  data: () => ({ selected: null }),

  computed: {
    headerSize() {
      console.log({ b: this.$refs.tabHeader })
      return this.$refs.tabHeader && this.$refs.tabHeader.$el
        ? this.$refs.tabHeader.$el.clientWidth
        : 0
    },
    btnGroupSize() {
      console.log({ b: this.$refs.btnGroup })
      return this.$refs.btnGroup && this.$refs.btnGroup.$el
        ? this.$refs.btnGroup.$el.clientWidth
        : 0
    }
  },

  methods: {
    setSelected(id) {
      this.selected = id
    },
    drag(e) {
      console.log(this.$refs)
      console.log({ e })
    },
    stopDrag(e) {
      console.log({ e })
    },
    userSwiped(e) {
      console.log({ userSwiped: e })
    }
  }
}
</script>

<style lang="scss" scoped>
.f-tab {
  &__header {
    overflow: auto;
  }
}
</style>
