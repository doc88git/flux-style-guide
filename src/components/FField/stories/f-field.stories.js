import { storiesOf } from "@storybook/vue";
import { text, boolean } from "@storybook/addon-knobs";
import { FField, FInput } from "..";
import { FButton } from "../../FButton";
import { FAvatar } from "../../FAvatar";

const groupId = "FIELD-OPTIONS-ID1";
const summary = `
## Label
`;

storiesOf("Form|Field", module).add(
  "Field Component",
  () => ({
    components: { FField, FInput, FButton, FAvatar },
    data: () => ({
      value: ""
    }),
    props: {
      name: {
        default: text("name", "name", groupId)
      },
      label: {
        default: text("label", "Nome completo", groupId)
      },
      hint: {
        default: text("hint", "Escreva seu nome", groupId)
      },
      rules: {
        default: text("rules", "required|email", groupId)
      },
      hasError: {
        default: boolean("hasError", false, groupId)
      },
      mask: {
        default: text("mask", "", groupId)
      },
      errorMessage: {
        default: text("errorMessage", "", groupId)
      },
      type: {
        default: text("type", "text", groupId)
      },
      avatar: {
        default: text(
          "avatar",
          "https://cdn.quasar.dev/img/avatar5.jpg",
          groupId
        )
      },
      icon: {
        default: text("icon", "search", groupId)
      }
    },
    template: `
      <div class="p-8">
        <f-field
          :name="name"
          :label="label"
          :hint="hint"
          :rules="rules"
          :hasError="hasError"
          :errorMessage="errorMessage"
          >
          <f-input placeholder="Seu nome aqui" :type="type" :mask="mask" v-model="value" />
        </f-field>
      </div>
      `
  }),
  {
    info: {
      summary
    }
  }
);
