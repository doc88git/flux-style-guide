import { storiesOf } from "@storybook/vue";
import { text } from "@storybook/addon-knobs";
import FAlert from "../FAlert.vue";

const groupId = "FAlert-ID1";

storiesOf("Components|Alerts", module).add("Default", () => ({
  components: { FAlert },
  data: () => ({
    title: "Contrary to popular belief",
    content:
      "There are many variations of passages of Lorem Ipsum available, but the majority."
  }),
  props: {
    src: {
      default: text("src", "https://cdn.quasar.dev/img/avatar5.jpg", groupId)
    }
  },
  template: `
    <div class="p-8">
      <f-alert :title=title :content=content />
    </div>
  `
}));
