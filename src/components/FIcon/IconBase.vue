<script>
import fluxIcon from '@doc88/flux-icon'

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
      default: 'black'
    },
    size: {
      type: Number,
      default: 16,
      validator: val => [16, 24].includes(val)
    }
  },
  watch: {
    name: {
      handler(newVal, oldVal) {
        try {
          if (newVal !== oldVal) {
            this.icon = fluxIcon(this.name, this.size)
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
      this.$emit('click', e)
    }
  },
  render(h) {
    return h('div', {
      class: [{ 'icon-base': true }, `color-fill--${this.color}`],
      key: this.name,
      on: {
        click: this.clickHandler
      },
      domProps: { innerHTML: this.icon }
    })
  }
}
</script>

<style lang="scss">
.color-fill {
  &--red {
    svg {
      fill: var(--color-red);
    }
  }
  &--green {
    svg {
      fill: var(--color-green);
    }
  }
  &--gray {
    svg {
      fill: var(--color-gray);
    }
  }
  &--black {
    svg {
      fill: var(--color-black);
    }
  }
}
// .color-fill {
//   @each $color, $value in $colors-theme {
//     &--#{$color} {
//       fill: var(--color-#{$color});
//     }
//   }
// }
</style>
