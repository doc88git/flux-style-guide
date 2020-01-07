import { storiesOf } from "@storybook/vue";
import { withKnobs, text, color, boolean } from "@storybook/addon-knobs";

import FCheckbox from "../FCheckbox.vue";

const stories = storiesOf("Components|Checkbox", module);

stories.addDecorator(withKnobs);

stories.add("Default", () => ({
  components: {
    FCheckbox
  },
  props: {
    isDisabled: {
      type: Boolean,
      default: boolean("Disabled", false)
    },
    checked: {
      type: Boolean,
      default: boolean("Checked", false)
    },
    label: {
      type: String,
      default: text("label")
    }
  },
  template: `
      <div class="p-8">

        <h3>Checkbox</h3>
        <f-checkbox :isDisabled="isDisabled" class="f-checkbox--gray" v-model="checked" :label="label">
          <template v-slot:label>
            <span>teste</span>
          </template>
        </f-checkbox>
        <f-checkbox :isDisabled="isDisabled" v-model="checked">
        </f-checkbox>
      </div>
    `
}));
