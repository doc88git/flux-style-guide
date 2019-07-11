<script>
import FAlert from "./FAlert";
import Screen from "../../plugins/Screen";

export default {
  data: () => ({
    width: Screen.width,
    size: 0,
    list: []
  }),
  props: {
    fill: Boolean,
    outline: Boolean,
    closable: Boolean,
    color: String,
    textColor: String,
    timeout: {
      type: Number,
      default: 3
    }
  },
  watch: {
    list: {
      handler: "verifty",
      immediate: true
    }
  },
  methods: {
    verifty() {
      if (!this.list.length) return false;

      if (this.list.length > this.size || this.list.length === this.size) {
        setTimeout(this.kill, this.timeout * 1000);
      }

      this.size = this.list.length;
    },
    kill() {
      if (!this.list.length) return false;
      this.list.shift();
    },
    add(opts) {
      this.list.push({
        ...opts
        // title: opts.title,
        // content: opts.content
      });
    }
  },
  render(h) {
    const dataObject = {
      class: ["f-alert-controller"],
      style: {
        top: "15px",
        width: `${this.width * 0.3}px`,
        left: "50%",
        transform: `translateX(-${(this.width * 0.3) / 2}px)`
      }
    };

    const alert = this.list.map((item, index) => {
      let props = {
        type: "fill",
        color: "primary"
      };

      if (typeof item === "string") {
        props = {
          ...props,
          content: item
        };
      }

      if (typeof item === "object") {
        props = {
          ...props,
          ...item,
          title: item.title || "",
          content: item.content
        };
      }

      return h(FAlert, {
        key: index,
        class: ["f-alert-dialog"],
        props: {
          ...props,
          fill: props.type === "fill",
          outline: props.type === "outline"
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
