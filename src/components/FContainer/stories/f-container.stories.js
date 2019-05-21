import { storiesOf } from "@storybook/vue";

import FContainer from "../FContainer.vue";

storiesOf("Template|Container", module).add(
  "Container",
  () => ({
    components: { FContainer },
    template: `
    <f-container>
      <div>Content</div>
    </f-container>`
  }),
  {
    info: "Container component"
  }
);
