import { storiesOf } from "@storybook/vue";
import { text } from "@storybook/addon-knobs";
import { FTitle } from "@/components/FTitle";

storiesOf("Components|Title", module).add(
  "Title",
  () => ({
    components: { FTitle },
    data: () => ({
      text: text("Text", "Flux Services")
    }),
    methods: {},
    props: {},
    template: `
        <div class="p-8">
          <f-title :text="text"/>
        </div>
      `
  }),
  {
    info: {
      summary: `
          # Title
        `
    }
  }
);
