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
      <FSeparator margin="sm" />
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
    options: Array,
    fill: Boolean
  },
  computed: {
    isFill() {
      return this.fill
    },
    headerSize() {
      return this.$refs.tabHeader && this.$refs.tabHeader.$el
        ? this.$refs.tabHeader.$el.clientWidth
        : 0
    },
    btnGroupSize() {
      return this.$refs.btnGroup && this.$refs.btnGroup.$el
        ? this.$refs.btnGroup.$el.clientWidth
        : 0
    }
  },
  data: () => ({
    selected: null
  }),
  mounted() {
    // console.log({ self: this });
    // console.log({ btnGroupSize: this.btnGroupSize });
  },
  methods: {
    setSelected(id) {
      this.selected = id
    },
    drag(e) {
      return e
    },
    stopDrag(e) {
      return e
    },
    userSwiped(e) {
      return e
    }
  }
}
</script>

<style lang="scss" scoped>
.f-tab {
  &__header {
    overflow: auto;
    margin-bottom: 0px;
  }
}
</style>
