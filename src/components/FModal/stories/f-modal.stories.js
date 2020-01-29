import { storiesOf } from '@storybook/vue'
import { FButton } from '@/components/FButton'
import { FModal } from '@/components/FModal'
import { FSeparator } from '@/components/FSeparator'
import { FCard, FCardActions, FCardBody, FCardTitle } from '@/components/FCard'

storiesOf('Components|Modal', module).add(
  'Default',
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
      FButton,
      FSeparator
    },
    methods: {
      toggleModal() {
        this.modal = !this.modal
      }
    },
    template: `
      <div>
        <button @click="toggleModal" v-click-outside="toggleModal">Exibir modal</button>
        <f-modal v-if="modal>
          <f-card>
            <f-card-title>
            Where does it come from?
            <f-button flat @click="toggleModal">x</f-button>
            </f-card-title>
            <f-separator></f-separator>
            <f-card-body>
              Lorem Ipsum is simply dummy text of the printing and typesetting
              industry. Lorem Ipsum has been the industry's standard dummy text ever
              since the 1500s, when an
            </f-card-body>
            <f-separator></f-separator>
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
)
