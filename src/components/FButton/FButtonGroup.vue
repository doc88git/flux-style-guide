<template>
  <div class="f-button-group">
    <f-button
      v-for="opt in options"
      :key="opt.value"
      @click="change(opt.value)"
      :class="{
        ...classes,
        'f-button-group__tab--selected': tab && opt.value === selected
      }"
      v-bind="getAttrs(opt.value)"
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
    isDefault() {
      return !this.outline && !this.tab
    },
    classes() {
      return {
        'f-button-group__tab': this.tab
      }
    },
    btnOptions () {
      return {
        flat: this.tab,
        small: this.size === 'small',
        bigger: this.size === 'bigger'
      }
    }
  },
  methods: {
    change(value) {
      this.selected = value
      this.$emit('change', this.selected)
    },
    getAttrs(id) {
      return this.tab || this.outline && id === this.selected
        ? { ...this.btnOptions, outline: false }
        : this.isDefault
        ? { ...this.btnOptions, outline: id === this.selected }
        : { ...this.btnOptions, outline: true }
    },
    isSelected(id) {
      return id === this.selected
    }
  },
  mounted() {
    if (this.default) this.change(this.default)
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
