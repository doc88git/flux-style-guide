import { storiesOf } from "@storybook/vue";
import { select, array, boolean } from "@storybook/addon-knobs";
import FDropdown from "../FDropdown.vue";

const arrList = [
  {
    value: 1,
    label: "Primeiro item com valor muito grande"
  },
  {
    value: 2,
    label: "Segundo item"
  },
  {
    value: 3,
    label: "Terceiro item"
  }
];
const typeList = {
  default: "default",
  outlined: "outlined"
};
const groupId = "FDROPDOWN-ID1";

storiesOf("Components|Dropdown", module).add("Default", () => ({
  components: { FDropdown },
  data: () => ({
    value: 2
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
      default: select("type", typeList, "default", groupId)
    }
  },
  template: `
    <div class="p-8">
      <span v-if="input">Selected: {{ value }}</span>
      <f-dropdown
        :list="list"
        :caret="caret"
        :type="type"
        :input="input"
        v-model="value" />
    </div>
  `
}));
