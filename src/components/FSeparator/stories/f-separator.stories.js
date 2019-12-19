import { storiesOf } from "@storybook/vue";
import { FSeparator } from "@/components/FSeparator";

storiesOf("Components|Separator", module).add(
  "Default",
  () => ({
    components: { FSeparator },
    template: `
      <div class="p-8" style="width: 600px">
        <f-separator />
      </div>`
  }),
  {
    info: {
      summary: `
          # Separator
        `
    }
  }
);
