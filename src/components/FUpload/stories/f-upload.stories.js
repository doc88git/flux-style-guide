import { storiesOf } from "@storybook/vue";
// import { select, boolean } from "@storybook/addon-knobs";
import { FUpload } from "../index.js";

storiesOf("Components|Upload", module).add("Default", () => ({
  components: { FUpload },
  data: () => ({}),
  props: {},
  template: `
      <div class="p-10 w-full text-center">
        <f-upload label="Button">
          <template v-slot:content>
            tooltip content
          </template>
        </f-upload>
      </div>
    `
}));
