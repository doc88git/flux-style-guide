import { storiesOf } from "@storybook/vue";
import FPagination from "../FPagination.vue";

storiesOf("Components|Pagination", module).add("Default", () => ({
  components: { FPagination },
  props: {},
  template: `<div class="p-8"><f-pagination /></div>`
}));
