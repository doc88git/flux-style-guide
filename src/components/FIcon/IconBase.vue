<script>
import FluxIcon from '@doc88/flux-icon'

export default {
  name: 'IconBase',
  data: () => ({
    icon: null
  }),
  props: {
    name: {
      type: String,
      required: true
    },
    color: {
      type: String,
      default: 'primary'
    },
    size: {
      type: Number,
      default: 16,
      validator: val => [16, 24].includes(val)
    },
    clickable: {
      type: Boolean,
      default: false
    }
  },
  watch: {
    name: {
      handler(newVal, oldVal) {
        try {
          if (newVal !== oldVal) {
            this.icon = FluxIcon(this.name, this.size)
          }
        } catch (e) {
          console.log({ e })
        }
      },
      immediate: true
    }
  },
  methods: {
    clickHandler(e) {
      if (this.clickable) this.$emit('click', e)
    }
  },
  render(h) {
    return h('i', {
      class: [
        'icon-base',
        { 'icon-base--clickable': this.clickable },
        `color--fill--${this.color}`
      ],
      key: this.name,
      on: {
        click: this.clickHandler
      },
      domProps: { innerHTML: this.icon }
    })
  }
}
</script>

<style lang="scss" scoped>
.icon-base {
  &--clickable {
    cursor: pointer;
    transition: opacity 0.2s ease-in-out;

    &:hover {
      opacity: 0.5;
    }
  }
}
</style>
