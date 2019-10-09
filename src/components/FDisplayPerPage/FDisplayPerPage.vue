<template>
  <div class="f-display-per-page" :class="theme">
    <span class="text-gray-800">Exibir por página:</span>
    <button v-for="item in options" :key="item.id" class="btn" :class="{ 'selected': item.selected }" :value="item.label" @click="change">
      {{ item.label }}
    </button>
  </div>
</template>

<script>

export default {
  name: "f-display-per-page",
  components: {},
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
  data: () => ({
    selected: null
  }),
  computed: {
    isOutline() {
      return this.outline;
    },
    isFlat() {
      return this.tab;
    },
    isDefault() {
      return !this.outline && !this.tab;
    }
  },
  mounted() {
    if (this.default) this.change(this.default);
  },
  methods: {
    btnOptions(id) {
      let mustBeO = true;

      if (this.isOutline && id === this.selected) {
        mustBeO = false;
      }

      if (this.isDefault) {
        mustBeO = id === this.selected;
      }

      if (this.isFlat) {
        mustBeO = false;
      }

      return {
        outline: mustBeO,
        flat: this.isFlat
      };
    },
    isSelected(id) {
      return id === this.selected;
    }
  }
};
</script>

<style lang="scss">
.f-display-per-page {
  @apply flex items-center;

  .btn {
    @apply px-3 py-2 bg-gray-200 text-xs h-auto text-gray-700;
    &.selected {
      @apply bg-primary text-white;
    }
  }

  &.secondary {
    .btn {
      &.selected {
        @apply bg-secondary text-white;
      }
    }
  }
}
</style>
