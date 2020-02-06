import { storiesOf } from '@storybook/vue'
import { FButton } from '@/components/FButton'
import { FImage } from '@/components/FImage'
import { FSeparator } from '@/components/FSeparator'
import { FCard, FCardActions, FCardBody, FCardTitle } from '@/components/FCard'

storiesOf('Components|Card', module)
  .add(
    'Default',
    () => ({
      components: {
        FCard,
        FCardActions,
        FCardBody,
        FCardTitle,
        FButton,
        FSeparator
      },
      template: `
        <div style="padding: 20px; width: 600px;">
          <f-card>
            <f-card-title>Where does it come from?</f-card-title>
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
          </f-card>
        </div>`
    }),
    {
      info: {
        summary: `
          # Card

          - Card Title
          - Card Body
          - Card Actions
        `
      }
    }
  )
  .add(
    'With Image',
    () => ({
      components: {
        FCard,
        FCardActions,
        FCardBody,
        FCardTitle,
        FButton,
        FSeparator
      },
      template: `
      <div style="padding: 20px; width: 600px;">
          <f-card
            header-bg="https://altitude-community.aircanada.com/app/webroot/img/default-bg-card.png"
          >
            <f-card-title>Where does it come from?</f-card-title>
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
            <f-separator />
            <f-card-actions >
              <f-button label="Ver mais" icon="list" outline></f-button>
              <f-button label="Cancelar" icon="close"></f-button>
            </f-card-actions>
          </f-card>
        </div>`
    }),
    {
      info: {
        sumary: 'Container component'
      }
    }
  )
  .add(
    'Card Title',
    () => ({
      components: {
        FCard,
        FCardActions,
        FCardBody,
        FCardTitle,
        FButton
      },
      template: `
      <div style="padding: 20px; width: 600px;">
          <f-card>
            <f-card-title>Where does it come from?</f-card-title>
          </f-card>
        </div>`
    }),
    {
      info: {
        sumary: 'Container component'
      }
    }
  )
  .add(
    'Card Body',
    () => ({
      components: {
        FCard,
        FCardActions,
        FCardBody,
        FCardTitle,
        FButton
      },
      template: `
        <div style="padding: 20px; width: 600px;">
          <f-card>
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
          </f-card>
        </div>`
    }),
    {
      info: {
        sumary: 'Container component'
      }
    }
  )
  .add(
    'Card Actions',
    () => ({
      components: {
        FCard,
        FCardActions,
        FCardBody,
        FCardTitle,
        FButton,
        FSeparator
      },
      template: `
        <div style="padding: 20px; width: 600px;">
          <f-card>
            <card-title>Default</card-title>
            <f-card-actions>
              <f-button label="Ver mais" icon="list" outline></f-button>
              <f-button label="Cancelar" icon="close"></f-button>
            </f-card-actions>
            <f-separator />
            <card-title>Left</card-title>
            <f-card-actions align="left">
              <f-button label="Ver mais" icon="list" outline></f-button>
              <f-button label="Cancelar" icon="close"></f-button>
            </f-card-actions>
            <f-separator />
            <card-title>Right</card-title>
            <f-card-actions align="right">
              <f-button label="Ver mais" icon="list" outline></f-button>
              <f-button label="Cancelar" icon="close"></f-button>
            </f-card-actions>
            <f-separator />
            <card-title>Center</card-title>
            <f-card-actions align="center">
              <f-button label="Ver mais" icon="list" outline></f-button>
              <f-button label="Cancelar" icon="close"></f-button>
            </f-card-actions>
            <f-separator />
            <card-title>Justify</card-title>
            <f-card-actions align="justify">
              <f-button label="Ver mais" icon="list" outline></f-button>
              <f-button label="Cancelar" icon="close"></f-button>
            </f-card-actions>
          </f-card>
        </div>`
    }),
    {
      info: {
        sumary: 'Container component'
      }
    }
  )
  .add(
    'Slot: With Image',
    () => ({
      components: {
        FCard,
        FCardActions,
        FCardBody,
        FCardTitle,
        FButton,
        FImage,
        FSeparator
      },
      template: `
        <div style="padding: 20px; width: 600px;">
          <f-card>
            <template v-slot:image-header>
              <f-image rounded-t src="https://altitude-community.aircanada.com/app/webroot/img/default-bg-card.png" />
            </template>
            <f-card-title>Where does it come from?</f-card-title>
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
            <f-separator />
            <f-card-actions align="justify">
              <f-button label="Ver mais" icon="list" outline></f-button>
              <f-button label="Cancelar" icon="close"></f-button>
            </f-card-actions>
          </f-card>
        </div>`
    }),
    {
      info: {
        sumary: 'Container component'
      }
    }
  )
