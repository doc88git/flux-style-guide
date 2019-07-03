<script>
import FAlert from "./FAlert";
import Screen from "@/plugins/Screen";

export default {
  data: () => ({
    width: Screen.width,
    size: 0
  }),
  props: {
    alerts: {
      type: Array,
      required: true,
      default: () => []
    },
    timeout: {
      type: Number,
      default: 3
    }
  },
  watch: {
    alerts: {
      handler: "verifty",
      immediate: true
    }
  },
  methods: {
    verifty() {
      if (!this.alerts.length) return false;

      if (this.alerts.length > this.size || this.alerts.length === this.size) {
        setTimeout(this.kill, this.timeout * 1000);
      }

      this.size = this.alerts.length;
    },
    kill() {
      if (!this.alerts.length) return false;
      this.alerts.shift();
    },
    add(opts) {
      this.alert.push({
        title: opts.title,
        content: opts.content
      });
    }
  },
  render(h) {
    const dataObject = {
      class: ["f-alert-controller"],
      style: {
        width: `${this.width * 0.3}px`,
        left: "50%",
        transform: `translateX(-${(this.width * 0.3) / 2}px)`
      }
    };

    const alert = this.alerts.map((item, index) => {
      return h(FAlert, {
        key: index,
        class: ["f-alert-dialog"],
        props: {
          title: item.title,
          content: item.content
        }
      });
    });

    const transition = [
      h(
        "transition-group",
        {
          props: { name: "fade", tag: "div" },
          class: ["f-alert-controller-transition"]
        },
        [alert]
      )
    ];

    return h("div", dataObject, transition);
  }
};
</script>

<style lang="scss" scoped>
.f-alert-controller {
  @apply absolute;
  &-transition {
    @apply flex flex-col-reverse;
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
