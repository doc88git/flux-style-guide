import VeeValidate from 'vee-validate'
import LocalePTBR from 'vee-validate/dist/locale/pt_BR'

export default {
  install({ Vue }) {
    Vue.use(VeeValidate, {
      locale: 'pt_BR',
      dictionary: {
        pt_BR: LocalePTBR
      }
    })
  }
}
