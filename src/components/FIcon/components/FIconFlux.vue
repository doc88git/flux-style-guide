<script>
import FluxIcon from '@doc88/flux-icon'

export default {
  name: 'FIconFlux',
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
            this.icon = FluxIcon(this.name, this.size).default
          }
        } catch (e) {
          console.log({ e })
        }
      },
      immediate: true
    }
  },
  computed: {
    classes() {
      return [
        { 'f-icon--clickable': this.clickable },
        `color--fill--${this.color}`
      ]
    }
  },
  methods: {
    clickHandler(e) {
      if (this.clickable) this.$emit('click', e)
    }
  },
  render(createElement) {
    return createElement(this.icon, {
      class: ['f-icon', ...this.classes],
      key: this.name,
      on: {
        click: this.clickHandler
      }
    })
  }
}
</script>

<style lang="scss" scoped>
.f-icon {
  &--clickable {
    cursor: pointer;
    transition: opacity 0.2s ease-in-out;

    &:hover {
      opacity: 0.5;
    }
  }
}
</style>
