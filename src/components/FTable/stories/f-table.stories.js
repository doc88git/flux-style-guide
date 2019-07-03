import { storiesOf } from "@storybook/vue";
import { text } from "@storybook/addon-knobs";
import FTable from "../FTable.vue";
import { FButton } from "../../FButton/index.js";
import { FPagination } from "../../FPagination//index.js";
import { FDropdown } from "../../FDropdown//index.js";

import Users from "../../../mocks/userList.json";

const arrList = [
  {
    label: "Aprovado",
    value: "aprovado"
  },
  {
    label: "Aguardando conferência",
    value: "aguardando"
  },
  {
    label: "Pago",
    value: "pago"
  }
];

storiesOf("Components|Table", module).add("Default", () => ({
  components: { FTable, FButton, FPagination, FDropdown },
  data: () => ({
    list: arrList,
    caret: true,
    position: "down",
    type: "outlined"
  }),
  props: {
    sortBy: {
      default: text("sortBy", "")
    },
    sortDirection: {
      default: text("sortDirection", "asc")
    },
    data: {
      default: Users
    },
    header: {
      default: {
        email: "Email",
        gender: "Sexo",
        phone_number: "Telefone",
        birthdate: "Data de Nascimento",
        street: "Endereço",
        city: "Cidade",
        state: "Estado",
        postcode: "CEP",
        first_name: "Nome",
        last_name: "Sobrenome",
        title: "Título"
      }
    }
  },
  template: `
    <div class="p-8">
      <f-table
        :sortBy="sortBy"
        :sortDirection="sortDirection"
        :data="data"
        :header="header">
        <template v-slot:header_left>
          <f-button icon="add">Add</f-button>
        </template>
        <template v-slot:header_right>
          <f-dropdown :list="list" :caret="caret" :position="position" :type="type" />
        </template>
        <template v-slot:footer_center>
          <f-pagination
            :currentPage="1"
            :total="100"
            :perPage="6"
            :max="10"
          />
        </template>
      </f-table>
    </div>`
}));
