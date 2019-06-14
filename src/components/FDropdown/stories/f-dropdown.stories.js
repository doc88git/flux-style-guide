import { storiesOf } from "@storybook/vue";
import { text, array, boolean } from "@storybook/addon-knobs";
import FDropdown from "../FDropdown.vue";

const arrList = [
  {
    value: 1,
    label: "Primeiro item",
    emit: "emit primeiro item"
  },
  {
    value: 2,
    label: "Segundo item",
    emit: "emit segundo item"
  },
  {
    value: 3,
    label: "Terceiro item",
    emit: "emit terceiro item"
  }
];
const groupId = "FDROPDOWN-ID1";

storiesOf("Components|Dropdown", module).add("Default", () => ({
  components: { FDropdown },
  data: () => ({
    value: 1
  }),
  props: {
    list: {
      default: array("list", arrList, groupId)
    },
    caret: {
      default: boolean("caret", true, groupId)
    },
    input: {
      default: boolean("is input", false, groupId)
    },
    type: {
      default: text("type", "outlined", groupId)
    }
  },
  template: `
    <div class="p-8">
      <span v-if="input">Selected: {{ value }}</span>
      <f-dropdown :list="list" :caret="caret" :type="type" v-model="value" :input="input" />
    </div>
  `
}));
