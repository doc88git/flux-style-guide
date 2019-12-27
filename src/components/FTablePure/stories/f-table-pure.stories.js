import { storiesOf } from "@storybook/vue";
import { text } from "@storybook/addon-knobs";
import FTablePure from "../FTablePure.vue";

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

storiesOf("Components|TablePure", module).add("Default", () => ({
  components: {
    FTablePure
  },
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
      <f-table-pure
        :sortBy="sortBy"
        :sortDirection="sortDirection"
        :data="data"
        :header="header">
      </f-table-pure>
    </div>`
}));
