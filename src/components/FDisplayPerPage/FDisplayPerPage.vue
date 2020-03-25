<template>
  <div class="f-display-per-page" :class="theme">
    <span class="text-gray-800">Exibir por página:</span>
    <button
      v-for="item in options"
      :key="item.id"
      class="btn"
      :class="{ selected: item.selected }"
      :value="item.label"
      @click="change(item)"
    >
      {{ item.label }}
    </button>
  </div>
</template>

<script>
export default {
  name: 'f-display-per-page',

  props: {
    options: {
      type: Array,
      required: true
    },
    outline: Boolean,
    tab: Boolean,
    default: [String, Number],
    change: {
      type: Function,
      default: null
    },
    theme: {
      type: String,
      default: 'primary'
    },
    value: {
      type: String,
      default: null
    }
  },

  data: () => ({ selected: null }),

  computed: {
    isOutline() {
      return this.outline
    },
    isFlat() {
      return this.tab
    },
    isDefault() {
      return !this.outline && !this.tab
    }
  },

  mounted() {
    if (this.default) this.change(this.default)
  },

  methods: {
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

<style lang="scss">
.f-display-per-page {
  display: flex;
  align-items: center;

  .text-gray-800 {
    color: var(--color-gray-800);
  }

  .btn {
    padding: 0.5rem 0.75rem;
    font-size: var(--text-xs);
    height: auto;
    background-color: var(--color-gray-200);
    color: var(--color-gray-700);
    &.selected {
      background-color: var(--color-primary);
      color: var(--color-white);
    }
  }

  &.secondary {
    .btn {
      &.selected {
        background-color: var(--color-primary);
        color: var(--color-white);
      }
    }
  }
}
</style>
