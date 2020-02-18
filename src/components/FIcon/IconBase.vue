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
              `@doc88/flux-icon/src/assets/${this.size}px/${this.name}-${this.size}px.svg`
            )
        }
      },
      immediate: true
    }
  },
  methods: {
    clickHandler(e) {
      this.$emit('click', e)
    }
  },
  render(createElement) {
    return createElement(this.icon, {
      class: ['f-icon', `color--fill--${this.color}`],
      key: this.name,
      on: {
        click: this.clickHandler
      }
    })
  }
}
</script>
