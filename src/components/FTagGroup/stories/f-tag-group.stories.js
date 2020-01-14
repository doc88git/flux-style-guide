import { storiesOf } from "@storybook/vue";
import { text, object } from "@storybook/addon-knobs";
import FTagGroup from "../FTagGroup.vue";
import { FTag } from "@/components/FTag";

const tagList = [
  {
    bgColor: "white",
    lineColor: "#c1c1c1",
    legend: "Empresa",
    icon: "dashboard",
    iconColor: "purple",
    text: "Flux Services",
    textColor: "#7F7F7F"
  },
  {
    legend: "Cidade | Estado",
    icon: "home",
    iconColor: "green",
    text: "Carag"
  },
  {
    legend: "UC",
    text: "923491"
  },
  {
    legend: "Código",
    text: "10834712-1"
  }
];

storiesOf("Components|Tag Groups", module).add(
  "Tag Groups",
  () => ({
    components: { FTagGroup, FTag },
    data: () => ({
      list: object("list", tagList)
    }),
    methods: {},
    props: {},
    template: `
        <div style="padding: 20px;">
          <f-tag-group :list="list" />
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
