import { storiesOf } from "@storybook/vue";
import { select, array } from "@storybook/addon-knobs";
import FSelect from "../FSelect.vue";

const arrList = [
  {
    value: 1,
    label: "Primeiro item"
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

const groupId = "FSelect-ID1";

storiesOf("Form|Select", module).add("Default", () => ({
  components: { FSelect },
  data: () => ({
    value: 1
  }),
  props: {
    options: {
      default: array("options", arrList, groupId)
    },
    type: {
      default: select("type", typeList, "default", groupId)
    }
  },
  template: `
    <div class="p-8">
      <f-select
        :options="options"
        :type="type"
        v-model="value" />
    </div>
  `
}));
