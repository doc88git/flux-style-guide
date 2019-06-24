import { storiesOf } from "@storybook/vue";
import FTab from "../FTab.vue";

storiesOf("Components|Tab", module).add("Default", () => ({
  components: { FTab },
  data: () => ({}),
  props: {},
  template: `
    <div class="p-8">
      <f-tab />
    </div>
  `
}));
