<template>
  <div class="f-button-group">
    <f-button
      v-for="opt in options"
      :key="opt.value"
      @click="change(opt.value)"
      :class="{
        ...classes,
        'f-button-group__tab--selected': isFlat && opt.value === selected
      }"
      v-bind="btnOptions(opt.value)"
    >
      {{ opt.label }}
    </f-button>
  </div>
</template>

<script>
import FButton from './FButton'

export default {
  name: 'f-button-group',
  components: {
    FButton
  },
  props: {
    options: {
      type: Array,
      required: true
    },
    outline: Boolean,
    tab: Boolean,
    default: [String, Number]
  },
  data: () => ({
    selected: null
  }),
  computed: {
    isOutline() {
      return this.outline
    },
    isFlat() {
      return this.tab
    },
    isDefault() {
      return !this.outline && !this.tab
    },
    classes() {
      return {
        'f-button-group__tab': this.isFlat
      }
    }
  },
  created() {
    if (this.default) this.change(this.default)
  },
  methods: {
    change(value) {
      this.selected = value
      this.$emit('change', this.selected)
    },
    btnOptions(id) {
      let mustBeO = true

      if (this.isOutline && id === this.selected) {
        mustBeO = false
      }

      if (this.isDefault) {
        mustBeO = id === this.selected
      }

      if (this.isFlat) {
        mustBeO = false
      }

      return {
        outline: mustBeO,
        flat: this.isFlat
      }
    },
    isSelected(id) {
      return id === this.selected
    }
  }
}
</script>

<style lang="scss" scoped>
.f-button-group {
  @apply flex;
  &__tab {
    @apply rounded-none;
    color: var(--color-gray);
    &--selected {
      @apply text-primary;
      @apply border-b border-primary border-solid;
    }
  }
}
</style>
