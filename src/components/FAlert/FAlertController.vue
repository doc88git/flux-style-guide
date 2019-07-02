<script>
import FAlert from "./FAlert";
import Screen from "@/plugins/Screen";
import { setTimeout } from "timers";

export default {
  data: () => ({
    width: Screen.width,

    toClear: 0
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
  computed: {
    list() {
      return this.alerts.reverse();
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
      if (!this.alerts.length) {
        clearTimeout(this.toClear);
        return false;
      }

      this.toClear = setTimeout(this.kill, this.timeout * 1000);
    },
    kill() {
      if (!this.alerts.length) return false;
      this.alerts.shift();
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

    const alert = this.list.map((item, index) => {
      return h(FAlert, {
        key: index,
        props: {
          title: item.title,
          content: item.content
        }
      });
    });

    const transition = [
      h("transition-group", { props: { name: "fade" } }, [alert])
    ];

    return h("div", dataObject, transition);
  }
};
</script>

<style lang="scss" scoped>
.f-alert-controller {
  @apply absolute;
}

.fade-enter-active,
.fade-leave-active {
  transition: opacity 0.2s;
}
.fade-enter, .fade-leave-to /* .fade-leave-active below version 2.1.8 */ {
  opacity: 0;
}
</style>
