import { storiesOf } from "@storybook/vue";
import { text } from "@storybook/addon-knobs";
import FTableCustom from "../FTableCustom.vue";
import { FButton } from "../../FButton/index.js";
import { FPagination } from "../../FPagination/index.js";
import { FDropdown } from "../../FDropdown/index.js";

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

storiesOf("Components|TableCustom", module)
.add("Default", () => ({
  components: { FTableCustom, FButton, FPagination, FDropdown },
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
        first_name: "Nome",
        last_name: "Sobrenome",
        title: "Título",
        email: "Email",
        gender: "Sexo",
        phone_number: "Telefone",
        birthdate: "Data de Nascimento",
        "location.street": "Endereço",
        "location.postcode": "CEP",
        "location.city": "Cidade",
        "location.state": "Estado"
      }
    }
  },
  template: `
    <div class="p-8">
      <f-table-custom
        :sortBy="sortBy"
        :sortDirection="sortDirection"
        :data="data"
        :header="header">
        <template v-slot:header_left>
          <span><strong class="text-gray-700">Aproximadamente:</strong> 58 resultados</span>
        </template>
        <template v-slot:header_right>
          <f-display-per-page></f-display-per-page>
        </template>
        <template v-slot:footer_center>
          <f-pagination
            :currentPage="1"
            :total="100"
            :perPage="6"
            :max="10"
          />
        </template>
      </f-table-custom>
    </div>`
}))
