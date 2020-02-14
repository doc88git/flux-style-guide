<script>
export default {
  name: 'IconBase',
  props: {
    name: {
      type: String,
      default: 'bell'
    },
    color: {
      type: String,
      default: 'text'
    },
    size: {
      type: Number,
      default: 16,
      validator: val => [16, 24].includes(val)
    }
  },
  data: () => ({
    icon: null
  }),
  watch: {
    name: {
      handler(newVal, oldVal) {
        if (newVal !== oldVal) {
          this.icon = () =>
            import(
              `@/assets/icons/${this.size}/${this.name}-${this.size}px.svg?inline`
            );
        }
      },
      immediate: true
    }
  },
  methods: {
    clickHandler(e) {
      this.$emit('click', e);
    }
  },
  render(createElement) {
    return createElement(this.icon, {
      class: [{ 'icon-base': true }, `color-fill--${this.color}`],
      key: this.name,
      on: {
        click: this.clickHandler
      }
    });
  }
};
</script>

<style lang="scss" scoped>
.color-fill {
  @each $color, $value in $colors-theme {
    &--#{$color} {
      fill: var(--color-#{$color});
    }
  }
}
</style>
