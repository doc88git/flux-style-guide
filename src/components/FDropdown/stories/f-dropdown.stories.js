import { storiesOf } from "@storybook/vue";
import { text, array, boolean } from "@storybook/addon-knobs";
import FDropdown from "../FDropdown.vue";

const arrList = [
  {
    label: "primeiro item",
    emit: "emit primeiro item"
  },
  {
    label: "segundo item",
    emit: "emit segundo item"
  },
  {
    label: "terceiro item",
    emit: "emit terceiro item"
  }
];
const groupId = "FDROPDOWN-ID1";

storiesOf("Components|Dropdown", module).add("Default", () => ({
  components: { FDropdown },
  props: {
    list: {
      default: array("list", arrList, groupId)
    },
    caret: {
      default: boolean("caret", true, groupId)
    },
    position: {
      default: text("position", "down", groupId)
    },
    type: {
      default: text("type", "outlined", groupId)
    }
  },
  template: `<div class="p-8"><f-dropdown :list="list" :caret="caret" :position="position" :type="type" /></div>`
}));
