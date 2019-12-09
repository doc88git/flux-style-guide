import { storiesOf } from "@storybook/vue";
import { FButton } from "@/components/FButton";
import { FModal } from "@/components/FModal";
import {
  FCard,
  FCardActions,
  FCardBody,
  FCardTitle,
  FCardSeparator
} from "@/components/FCard";

storiesOf("Components|Modal", module).add(
  "Default",
  () => ({
    data: () => ({
      modal: false
    }),
    components: {
      FModal,
      FCard,
      FCardActions,
      FCardBody,
      FCardTitle,
      FCardSeparator,
      FButton
    },
    methods: {
      toggleModal() {
        this.modal = !this.modal;
      }
    },
    template: `
      <div>
        <button @click="toggleModal">Exibir modal</button>
        <f-modal v-if="modal">
          <f-card>
            <f-card-title>
            Where does it come from?
            <f-button flat @click="toggleModal">x</f-button>
            </f-card-title>
            <f-card-separator></f-card-separator>
            <f-card-body>
              Lorem Ipsum is simply dummy text of the printing and typesetting
              industry. Lorem Ipsum has been the industry's standard dummy text ever
              since the 1500s, when an unknown printer took a galley of type and
              scrambled it to make a type specimen book. It has survived not only five
              centuries, but also the leap into electronic typesetting, remaining
              essentially unchanged. It was popularised in the 1960s with the release
              of Letraset sheets containing Lorem Ipsum passages, and more recently
              with desktop publishing software like Aldus PageMaker including versions
              of Lorem Ipsum.
            </f-card-body>
            <f-card-separator></f-card-separator>
            <f-card-actions align="justify">
              <f-button label="Cancelar" flat @click="toggleModal"></f-button>
              <f-button label="Adicionar" color="primary" flat></f-button>
            </f-card-actions>
          </f-card>
        </f-modal>
      </div>
    `
  }),
  {
    info: {
      summary: `
          # Modal

          - Modal Title
        `
    }
  }
);
