import { storiesOf } from '@storybook/vue'
import { text, boolean, number, select } from '@storybook/addon-knobs'
import { FField, FInput, FInputType } from '..'
import { FButton } from '../../FButton'
import { FAvatar } from '../../FAvatar'
import { FIcon } from '../../FIcon'

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
        <f-input
          :label="label"
          :hint="hint"
          :rules="rules"
          :hasError="hasError"
          :errorMessage="errorMessage"
          :type="type"
          :mask="mask"
          :name="name"
          v-model="value"
        />
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
        <f-input
          :label="label"
          :hint="hint"
          :rules="rules"
          :hasError="hasError"
          :errorMessage="errorMessage"
          :type="type"
          :mask="mask"
          v-model="value"
        >
          <f-avatar slot="before" :src="avatar" v-if="avatar" />
        </f-input>
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
        <f-input
          :label="label"
          :hint="hint"
          :rules="rules"
          :hasError="hasError"
          :errorMessage="errorMessage"
          :type="type"
          :mask="mask"
          v-model="value"
        >
          <f-button slot="after">Salvar</f-button>
        </f-input>
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
        <f-input
          :label="label"
          :hint="hint"
          :rules="rules"
          :hasError="hasError"
          :errorMessage="errorMessage"
          :type="type"
          :mask="mask"
          v-model="value"
        >
          <f-button slot="append" flat :icon="icon" />
        </f-input>
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
        <f-input
          :label="label"
          :hint="hint"
          :rules="rules"
          :hasError="hasError"
          :errorMessage="errorMessage"
          :type="type"
          :mask="mask"
          v-model="value"
        >
          <f-avatar slot="before" :src="avatar" v-if="avatar" />
          <f-button slot="after">Salvar</f-button>
          <f-button slot="append" flat :icon="icon" />
        </f-input>
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
          <f-input
            label="Name"
            hint="Name is required"
            v-model="form.name"
            v-validate="'required'"
            name="name"
          >
            <template v-slot:error>
              {{ errors.first("name") }}
            </template>
          </f-input>

          <f-input
            label="E-mail"
            hint="E-mail is required"
            v-model="form.email"
            v-validate="'required|email'"
            name="email"
          >
            <template v-slot:error>
              {{ errors.first("email") }}
            </template>
          </f-input>

          <f-input
            label="Age"
            hint="Only numbers please"
            v-model="form.age"
            v-validate="'required|numeric|max:2'"
            name="age"
            :mask="'##'"
          >
            <template v-slot:error>
              {{ errors.first("age") }}
            </template>
          </f-input>

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
  .add(
    'Percentage',
    () => ({
      components: { FInputType, FField, FIcon },
      data: () => ({}),
      props: {
        type: {
          default: text('type', 'number', groupId)
        },
        name: {
          default: text('name', '', groupId)
        },
        bgColorContent: {
          default: text('bgColorContent', 'white', groupId)
        },
        borderColorContent: {
          default: text('borderColorContent', 'gray-500', groupId)
        },
        buttonColor: {
          default: text('buttonColor', 'white', groupId)
        },
        textColor: {
          default: text('textColor', 'font-base', groupId)
        },
        iconUp: {
          default: text('iconUp', 'chevron-up', groupId)
        },
        iconDown: {
          default: text('iconDown', 'chevron-down', groupId)
        },
        message: {
          default: text('message', 'Demanda acima de:', groupId)
        },
        unity: {
          default: text('unity', '%', groupId)
        },
        fontSizeInput: {
          default: text('fontSizeInput', '5xl', groupId)
        },
        fontSizeUnity: {
          default: text('fontSizeUnity', 'lg', groupId)
        },
        fontSizeMessage: {
          default: text('fontSizeMessage', 'base', groupId)
        },
        fontWeightInput: {
          default: text('fontWeightInput', 'light', groupId)
        },
        fontWeightUnity: {
          default: text('fontWeightUnity', 'base', groupId)
        },
        fontWeightMessage: {
          default: text('fontWeightMessage', 'base', groupId)
        },
        paddingX: {
          default: text('paddingX', 'sm', groupId)
        },
        newValue: {
          default: number('newValue', null, {}, groupId)
        },
        sum: {
          default: number('sum', 1, {}, groupId)
        },
        placeHolder: {
          default: text('placeHolder', 'Placeholder', groupId)
        },
        disabled: {
          default: boolean('disabled', false, groupId)
        },
        numberType: {
          default: select('numberType', ['int', 'float'], 'int', groupId)
        }
      },
      template: `
      <div style="padding: 20px;">
        <f-field>
          <f-input-type
          :disabled="disabled"
          :type="type"
          :name="name"
          :bgColorContent="bgColorContent"
          :borderColorContent="borderColorContent"
          :buttonColor="buttonColor"
          :textColor="textColor"
          :iconUp="iconUp"
          :iconDown="iconDown"
          :message="message"
          :unity="unity"
          :fontSizeInput="fontSizeInput"
          :fontSizeUnity="fontSizeUnity"
          :fontSizeMessage="fontSizeMessage"
          :fontWeightInput="fontWeightInput"
          :fontWeightUnity="fontWeightUnity"
          :fontWeightMessage="fontWeightMessage"
          :paddingX="paddingX"
          :newValue="newValue"
          :sum="sum"
          :placeHolder="placeHolder"
          ></f-input-type>
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
