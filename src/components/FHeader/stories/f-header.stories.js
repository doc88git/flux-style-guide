import { storiesOf } from "@storybook/vue";
import { text } from "@storybook/addon-knobs";
import FHeader from "../FHeader";
import FWidget from "../../FWidget/FWidget.vue";
import FAvatar from "../../FAvatar/FAvatar.vue";

storiesOf("Components|Header", module).add("Default", () => ({
  components: { FHeader, FWidget, FAvatar },
  props: {
    label: {
      default: text("label")
    }
  },
  template: `
      <f-header mainTitle="Reembolso de Despesas" align="left" weight="300">
        <template v-slot:menu>
        </template>
        <template v-slot:settings>
          <div class="flex items-center justify-center">
            <f-widget></f-widget>
            <f-avatar></f-avatar>
          </div>
        </template>
      </f-header>
    `
}));
