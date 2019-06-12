import { storiesOf } from "@storybook/vue";
import FTable from "../FTable.vue";

storiesOf("Components|Table", module).add("Default", () => ({
  components: { FTable },
  props: {},
  template: `<div class="p-8"><f-table /></div>`
}));
