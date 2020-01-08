import { storiesOf } from "@storybook/vue";
// import { select, boolean } from "@storybook/addon-knobs";
import { FUpload } from "../index.js";
import { FButton } from "../../FButton/index.js";

storiesOf("Components|Upload", module).add("Default", () => ({
  components: { FUpload, FButton },
  data: () => ({}),
  props: {},
  template: `
      <div class="p-10 w-full text-center">
        <f-upload>
          <f-button
            :disabled="false"
            color="standard"
            text-color="white"
            icon="delete"
            :small="true"
            @click="clearFiles()"
          />
        </f-upload>
      </div>
    `
}));
