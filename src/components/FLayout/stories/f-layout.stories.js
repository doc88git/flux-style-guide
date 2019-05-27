import { storiesOf } from "@storybook/vue";
import { FLayout } from "..";

const summary = `
## Layout
`;

storiesOf("Template|Layout", module).add(
  "Layout",
  () => ({
    components: { FLayout },
    props: {},
    template: `
      <f-layout>
        <template v-slot:logo>Flux | Style Guide</template>
      </f-layout>
    `
  }),
  {
    info: {
      summary
    }
  }
);
