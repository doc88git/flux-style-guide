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
    props: {
      label: {
        default: text("label", "Nome completo", groupId)
      },
      avatar: {
        default: text(
          "avatar",
          "https://cdn.quasar.dev/img/avatar5.jpg",
          groupId
        )
      },
      hint: {
        default: text("hint", "Escreva seu nome", groupId)
      },
      error: {
        default: boolean("error", false, groupId)
      },
      errorMessage: {
        default: text("errorMessage", "", groupId)
      },
      icon: {
        default: text("icon", "search", groupId)
      }
    },
    template: `
        <f-field :label="label" :hint="hint" :error="error" :errorMessage="errorMessage">
          <f-input placeholder="Seu nome aqui" type="search" />
          <template v-slot:before>
            <f-avatar :src="avatar" v-if="avatar" />
          </template>
          <template v-slot:after>
            <f-button>Salvar</f-button>
          </template>
          <template v-slot:append>
            <f-button flat :icon="icon" />
          </template>
        </f-field>
      `
  }),
  {
    info: {
      summary
    }
  }
);
