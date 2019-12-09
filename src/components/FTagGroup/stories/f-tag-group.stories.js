import { storiesOf } from "@storybook/vue";
import { text } from "@storybook/addon-knobs";
import FTagGroup from "../FTagGroup.vue";
import { FTag } from "@/components/FTag";

storiesOf("Components|Tag Groups", module).add(
  "Tag Groups",
  () => ({
    components: { FTagGroup, FTag },
    data: () => ({
      bgColor: text("Background", "white"),
      lineColor: text("Line Color", "black"),
      legend: text("Label", "Empresa"),
      icon: text("Icon", "dashboard"),
      iconColor: text("Icon Color", "purple"),
      text: text("Text", "Flux Services")
    }),
    methods: {},
    props: {},
    template: `
        <div class="p-8">
          <f-tag-group :bg-color="bgColor" :line-color="lineColor" :text="text">
            <f-tag :bg-color="bgColor" :line-color="lineColor" :legend="legend" :icon="icon" :icon-color="iconColor" :text="text"/>
            <f-tag :bg-color="bgColor" :line-color="lineColor" legend="Cidade | Estado" icon="home" icon-color="green" text="Wallaby Way - Sydney"/>
            <f-tag :bg-color="bgColor" :line-color="lineColor" legend="UC" text="40028922"/>
            <f-tag :bg-color="bgColor" :line-color="lineColor" legend="Nº de série" icon="" icon-color="" text="2345678"/>
          </f-tag-group>
        </div>
      `
  }),
  {
    info: {
      summary: `
          # Tag Groups
        `
    }
  }
);
