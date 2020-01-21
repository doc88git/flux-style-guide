<script>
import FAlert from './FAlert'
import Screen from '../../plugins/Screen'
import uid from '../../utils/uid.js'

export default {
  name: 'f-alert-controller',
  data: () => ({
    width: Screen.width,
    size: 0,
    list: [],
    active: '',
    interval: 0
  }),
  props: {
    fill: Boolean,
    outline: Boolean,
    closable: Boolean,
    color: String,
    textColor: String,
    timeout: {
      type: Number,
      default: 10
    },
    position: {
      type: String,
      default: 'top-center',
      validator: v =>
        [
          'top-left',
          'top-center',
          'top-right',
          'bottom-left',
          'bottom-center',
          'bottom-right'
        ].includes(v)
    }
  },
  mounted() {
    // this.interval = setInterval(this.verify, 1000);
  },
  watch: {
    list: {
      handler: 'doInterval',
      immediate: true
    }
  },
  beforeDestroy() {
    clearInterval(this.interval)
  },
  methods: {
    doInterval() {
      if (!this.list.length) {
        clearInterval(this.interval)
        return false
      }

      this.interval = setInterval(this.autoRemove, 1000)
    },
    autoRemove() {
      let now = this.getTime()

      for (let item of this.list) {
        if (!item.id || !item.time) continue

        if (now - this.timeout > item.time) {
          this.kill(item.id)
        }
      }
    },
    getTime() {
      return Math.floor(Date.now() / 1000)
    },
    add(opts) {
      const alert = {
        ...opts,
        id: uid(),
        time: this.getTime()
      }
      this.list.push(alert)
    },
    keepAlive(id) {
      this.active = id
    },
    letDie(id) {
      this.active = null
      for (let item of this.list) {
        if (item.id === id) item.time = this.getTime()
      }
    },
    kill(id) {
      for (let i in this.list) {
        if (this.list[i] && this.list[i].id === id) this.list.splice(i, 1)
      }
    }
  },
  render(h) {
    const dataObject = {
      class: ['f-alert-controller', `f-alert-controller--${this.position}`]
      // style: {
      //   top: '15px',
      //   width: `${this.width * 0.3}px`,
      //   left: '50%',
      //   transform: `translateX(-${(this.width * 0.3) / 2}px)`
      // }
    }

    const alert = this.list.map((item, index) => {
      let props = {
        type: 'fill',
        color: 'primary'
      }

      if (typeof item === 'string') {
        props = {
          ...props,
          content: item
        }
      }

      if (typeof item === 'object') {
        props = {
          ...props,
          ...item,
          title: item.title || '',
          content: item.content
        }
      }

      const vm = this

      return h(FAlert, {
        key: index,
        class: ['f-alert-dialog'],
        on: {
          close({ id }) {
            vm.kill(id)
          },
          mouseover(e) {
            vm.keepAlive(e.id)
          },
          mouseleave(e) {
            vm.letDie(e.id)
          }
        },
        props: {
          ...props,
          closable: true,
          fill: props.type === 'fill',
          outline: props.type === 'outline',
          id: item.id,
          time: item.time
        }
      })
    })

    const transition = [
      h(
        'transition-group',
        {
          props: { name: 'fade', tag: 'div' },
          class: ['f-alert-controller-transition']
        },
        [alert]
      )
    ]

    return h('div', dataObject, transition)
  }
}
</script>

<style lang="scss" scoped>
.f-alert-controller {
  position: fixed;
  &-transition {
    display: flex;
    flex-direction: column-reverse;
  }

  &--top-left {
    left: 100px;
  }

  &--top-center {
    right: calc(50% - 175px);
  }

  &--top-right {
    right: 30px;
  }

  &--bottom-left {
    left: 100px;
    bottom: 20px;
  }

  &--bottom-center {
    right: calc(50% - 175px);
    bottom: 20px;
  }

  &--bottom-right {
    right: 30px;
    bottom: 20px;
  }
}

.fade-enter-active,
.fade-leave-active {
  transition: opacity 0.2s;
}
.fade-enter, .fade-leave-to /* .fade-leave-active below version 2.1.8 */ {
  opacity: 0;
}
</style>
