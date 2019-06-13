import { storiesOf } from "@storybook/vue";
import { text } from "@storybook/addon-knobs";
import FTable from "../FTable.vue";

storiesOf("Components|Table", module).add("Default", () => ({
  components: { FTable },
  props: {
    title: {
      default: text("title", "Table 1")
    }
  },
  template: `<div class="p-8"><f-table :title="title" /></div>`
}));
