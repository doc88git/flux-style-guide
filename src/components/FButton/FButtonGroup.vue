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
    default: [String, Number],
    size: {
      type: String,
      default: ''
    }
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
        flat: this.isFlat,
        small: this.size === 'small',
        bigger: this.size === 'bigger'
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
  display: flex;
  &__tab {
    border-radius: 0;
    color: var(--color-gray);
    &--selected {
      color: var(--color-primary);
      border-bottom-width: 1px;
      border-color: var(--color-primary);
    }
  }
}
</style>
