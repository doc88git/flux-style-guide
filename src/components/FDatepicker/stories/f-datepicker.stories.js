import { storiesOf } from '@storybook/vue'

import FDatepicker from '../FDatepicker'

storiesOf('Components|Datepicker', module)
  .add('Default', () => ({
    components: {
      FDatepicker
    },
    data: () => ({
      lang: {
        days: ['Dom', 'Seg', 'Ter', 'Qua', 'Qui', 'Sex', 'Sab'],
        months: [
          'Jan',
          'Fev',
          'Mar',
          'Abr',
          'Mai',
          'Jun',
          'Jul',
          'Ago',
          'Set',
          'Out',
          'Nov',
          'Dez'
        ],
        placeholder: {
          date: 'Selecione uma data'
        }
      }
    }),
    methods: {
      printValue(payload) {
        console.log(payload);
        return payload;
      }
    },
    template: `
      <div style="padding: 20px;">
        <f-datepicker :setLang="lang" :getValue="printValue"></f-datepicker>
      </div>
    `
  }))
  .add('Range', () => ({
    components: {
      FDatepicker
    },
    data: () => ({
      lang: {
        days: ['Dom', 'Seg', 'Ter', 'Qua', 'Qui', 'Sex', 'Sab'],
        months: [
          'Jan',
          'Fev',
          'Mar',
          'Abr',
          'Mai',
          'Jun',
          'Jul',
          'Ago',
          'Set',
          'Out',
          'Nov',
          'Dez'
        ],
        pickers: [
          'Próximos 7 dias',
          'Próximos 30 dias',
          'Últimos 7 dias',
          'Últimos 30 dias'
        ],
        placeholder: {
          dateRange: 'Selecione um período'
        }
      }
    }),
    template: `
      <div>
        <f-datepicker :range="true" :setLang="lang"></f-datepicker>
      </div>
    `
  }))
