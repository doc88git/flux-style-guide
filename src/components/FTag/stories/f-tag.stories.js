import { storiesOf } from "@storybook/vue";
import { text } from "@storybook/addon-knobs";
import FTag from "../FTag.vue";

storiesOf("Components|Tags", module).add(
  "Tag",
  () => ({
    components: { FTag },
    data: () => ({
      bgColor: text("Background", "white"),
      lineColor: text("Line Color", "black"),
      legend: text("Label", "Empresa"),
      icon: text("Icon", "done"),
      iconColor: text("Icon Color", "orange"),
      text: text("Text", "Doc88 Software Development")
    }),
    methods: {},
    props: {},
    template: `
        <div class="p-8">
          <f-tag :bg-color="bgColor" :line-color="lineColor" :legend="legend" :icon="icon" :icon-color="iconColor" :text="text"/>
        </div>
      `
  }),
  {
    info: {
      summary: `
          # Tag
        `
    }
  }
);
