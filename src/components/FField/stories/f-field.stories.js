import { storiesOf } from '@storybook/vue'
import { text, boolean } from '@storybook/addon-knobs'
import { FField, FInput, FInputType } from '..'
import { FButton } from '../../FButton'
import { FAvatar } from '../../FAvatar'

const groupId = 'FIELD-OPTIONS-ID1'
const summary = `
## Form => Field
`

storiesOf('Form|Field', module)
  .add(
    'Basic',
    () => ({
      components: { FField, FInput, FButton, FAvatar },
      data: () => ({
        value: 'oi'
      }),
      props: {
        name: {
          default: text('name', 'name', groupId)
        },
        label: {
          default: text('label', 'Nome completo', groupId)
        },
        hint: {
          default: text('hint', 'Escreva seu nome', groupId)
        },
        rules: {
          default: text('rules', 'required|email', groupId)
        },
        hasError: {
          default: boolean('hasError', false, groupId)
        },
        mask: {
          default: text('mask', '', groupId)
        },
        errorMessage: {
          default: text('errorMessage', '', groupId)
        },
        type: {
          default: text('type', 'text', groupId)
        },
        avatar: {
          default: text(
            'avatar',
            'https://cdn.quasar.dev/img/avatar5.jpg',
            groupId
          )
        },
        icon: {
          default: text('icon', 'search', groupId)
        }
      },
      propsDescription: {
        FField: {
          label: 'Label of field',
          hint: 'Hint',
          rules: 'Rules for VeeValidate',
          errorMessage: 'Message error'
        },
        FInput: {
          name: 'Name of field'
        }
      },
      template: `
      <div style="padding: 20px;">
        <f-field
          :label="label"
          :hint="hint"
          :rules="rules"
          :hasError="hasError"
          :errorMessage="errorMessage"
          >
          <f-input
            placeholder="Seu nome aqui"
            :type="type"
            :mask="mask"
            :name="name"
            v-model="value" />
        </f-field>
        <span>Valor: {{ value }}</span>
        <br/>
        <button @click="value = ''">Limpa</button>
      </div>
      `
    }),
    {
      info: {
        summary
      }
    }
  )
  .add(
    'Before',
    () => ({
      components: { FField, FInput, FButton, FAvatar },
      data: () => ({
        value: ''
      }),
      props: {
        name: {
          default: text('name', 'name', groupId)
        },
        label: {
          default: text('label', 'Nome completo', groupId)
        },
        hint: {
          default: text('hint', 'Escreva seu nome', groupId)
        },
        rules: {
          default: text('rules', 'required|email', groupId)
        },
        hasError: {
          default: boolean('hasError', false, groupId)
        },
        mask: {
          default: text('mask', '', groupId)
        },
        errorMessage: {
          default: text('errorMessage', '', groupId)
        },
        type: {
          default: text('type', 'text', groupId)
        },
        avatar: {
          default: text(
            'avatar',
            'https://cdn.quasar.dev/img/avatar5.jpg',
            groupId
          )
        },
        icon: {
          default: text('icon', 'search', groupId)
        }
      },
      template: `
      <div style="padding: 20px;">
        <f-field
          :label="label"
          :hint="hint"
          :rules="rules"
          :hasError="hasError"
          :errorMessage="errorMessage"
          >
          <f-input placeholder="Seu nome aqui" :type="type" :mask="mask" v-model="value" />
          <template v-slot:before>
            <f-avatar :src="avatar" v-if="avatar" />
          </template>
        </f-field>
      </div>
      `
    }),
    {
      info: {
        summary
      }
    }
  )
  .add(
    'After',
    () => ({
      components: { FField, FInput, FButton, FAvatar },
      data: () => ({
        value: ''
      }),
      props: {
        name: {
          default: text('name', 'name', groupId)
        },
        label: {
          default: text('label', 'Nome completo', groupId)
        },
        hint: {
          default: text('hint', 'Escreva seu nome', groupId)
        },
        rules: {
          default: text('rules', 'required|email', groupId)
        },
        hasError: {
          default: boolean('hasError', false, groupId)
        },
        mask: {
          default: text('mask', '', groupId)
        },
        errorMessage: {
          default: text('errorMessage', '', groupId)
        },
        type: {
          default: text('type', 'text', groupId)
        },
        avatar: {
          default: text(
            'avatar',
            'https://cdn.quasar.dev/img/avatar5.jpg',
            groupId
          )
        },
        icon: {
          default: text('icon', 'search', groupId)
        }
      },
      template: `
      <div style="padding: 20px;">
        <f-field
          :label="label"
          :hint="hint"
          :rules="rules"
          :hasError="hasError"
          :errorMessage="errorMessage"
          >
          <f-input placeholder="Seu nome aqui" :type="type" :mask="mask" v-model="value" />
          <template v-slot:after>
            <f-button>Salvar</f-button>
          </template>
        </f-field>
      </div>
      `
    }),
    {
      info: {
        summary
      }
    }
  )
  .add(
    'Append',
    () => ({
      components: { FField, FInput, FButton, FAvatar },
      data: () => ({
        value: ''
      }),
      props: {
        name: {
          default: text('name', 'name', groupId)
        },
        label: {
          default: text('label', 'Nome completo', groupId)
        },
        hint: {
          default: text('hint', 'Escreva seu nome', groupId)
        },
        rules: {
          default: text('rules', 'required|email', groupId)
        },
        hasError: {
          default: boolean('hasError', false, groupId)
        },
        mask: {
          default: text('mask', '', groupId)
        },
        errorMessage: {
          default: text('errorMessage', '', groupId)
        },
        type: {
          default: text('type', 'text', groupId)
        },
        avatar: {
          default: text(
            'avatar',
            'https://cdn.quasar.dev/img/avatar5.jpg',
            groupId
          )
        },
        icon: {
          default: text('icon', 'search', groupId)
        }
      },
      template: `
      <div style="padding: 20px;">
        <f-field
          :label="label"
          :hint="hint"
          :rules="rules"
          :hasError="hasError"
          :errorMessage="errorMessage"
          >
          <f-input placeholder="Seu nome aqui" :type="type" :mask="mask" v-model="value" />
          <template v-slot:append>
            <f-button flat :icon="icon" />
          </template>
        </f-field>
      </div>
      `
    }),
    {
      info: {
        summary
      }
    }
  )
  .add(
    'Complete',
    () => ({
      components: { FField, FInput, FButton, FAvatar },
      data: () => ({
        value: ''
      }),
      props: {
        name: {
          default: text('name', 'name', groupId)
        },
        label: {
          default: text('label', 'Nome completo', groupId)
        },
        hint: {
          default: text('hint', 'Escreva seu nome', groupId)
        },
        rules: {
          default: text('rules', 'required|email', groupId)
        },
        hasError: {
          default: boolean('hasError', false, groupId)
        },
        mask: {
          default: text('mask', '', groupId)
        },
        errorMessage: {
          default: text('errorMessage', '', groupId)
        },
        type: {
          default: text('type', 'text', groupId)
        },
        avatar: {
          default: text(
            'avatar',
            'https://cdn.quasar.dev/img/avatar5.jpg',
            groupId
          )
        },
        icon: {
          default: text('icon', 'search', groupId)
        }
      },
      template: `
      <div style="padding: 20px;">
        <f-field
          :label="label"
          :hint="hint"
          :rules="rules"
          :hasError="hasError"
          :errorMessage="errorMessage"
          >
          <f-input placeholder="Seu nome aqui" :type="type" :mask="mask" v-model="value" />
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
      </div>
      `
    }),
    {
      info: {
        summary
      }
    }
  )
  .add(
    'Example Validation',
    () => ({
      components: { FField, FInput, FButton },
      data: () => ({
        form: {
          name: '',
          email: '',
          age: ''
        },
        message: ''
      }),
      methods: {
        submit() {
          this.$validator.validate().then(valid => {
            const is = valid ? 'is' : 'NOT is'

            this.message = `This form ${is} valid!`
          })
        }
      },
      template: `
        <div style="padding: 20px;">
          <f-field label="Name" hint="Name is required">
            <f-input
              placeholder="Your name here"
              v-model="form.name"
              v-validate="'required'"
              name="name"
            />
            <template v-slot:error>
              {{ errors.first("name") }}
            </template>
          </f-field>

          <f-field label="E-mail" hint="E-mail is required">
            <f-input
              placeholder="Your email here"
              v-model="form.email"
              v-validate="'required|email'"
              name="email"
            />
            <template v-slot:error>
              {{ errors.first("email") }}
            </template>
          </f-field>

          <f-field label="Age" hint="Only numbers please">
            <f-input
              placeholder="Your age here"
              v-model="form.age"
              v-validate="'required|numeric|max:2'"
              name="age"
              :mask="'##'"
            />
            <template v-slot:error>
              {{ errors.first("age") }}
            </template>
          </f-field>

          <f-button @click="submit" label="send" /> {{ message }}
        </div>
      `
    }),
    {
      info: {
        summary
      }
    }
  )
  .add('Percentage', () => ({
    components: { FInputType, FField },
    data: () => ({}),
    props: {},
    template: `
      <div style="padding: 20px;">
        <f-field>
          <f-input-type></f-input-type>
        </f-field>
      </div>
      `
  }))
