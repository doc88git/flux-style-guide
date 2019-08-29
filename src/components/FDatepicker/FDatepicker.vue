<template>
  <div class="p-8">
    <DatePicker
      v-model="time1"
      format="DD-MM-YYYY"
      :lang="setLang"
      :range="range"
      :range-separator="rangeSeparator"
    ></DatePicker>
  </div>
</template>

<script>
import DatePicker from 'vue2-datepicker'

export default {
  name: 'f-datepicker',
  components: { DatePicker },
  props: {
    range: {
      default: false
    },
    setLang: {
      type: Object,
      default: null
    },
    rangeSeparator: {
      type: String,
      default: ''
    }
  },
  data() {
    return {
      time1: '',
      // custom lang
      lang: {
        days: ['Dom', 'Seg', 'Ter', 'Qua', 'Qui', 'Sex', 'Sab'],
        months: ['Jan', 'Fev', 'Mar', 'Abr', 'Mai', 'Jun', 'Jul', 'Ago', 'Set', 'Out', 'Nov', 'Dez'],
        pickers: ['próximos 7 dias', 'próximos 30 dias', '7 dias anteriores', '30 dias anteriores'],
        placeholder: {
          date: 'Selecione uma data',
          dateRange: 'Selecione um período'
        }
      },
      timePickerOptions:{
        start: '00:00',
        step: '00:30',
        end: '23:30'
      }
    }
  }
}
</script>

<style lang="scss">
  .mx-datepicker {
    @apply w-full;
    font-family: 'Roboto', -apple-system, 'BlinkMacSystemFont', sans-serif;

    ::-webkit-input-placeholder { /* Chrome/Opera/Safari */
      color: black;
    }
    ::-moz-placeholder { /* Firefox 19+ */
      color: black;
    }
    :-ms-input-placeholder { /* IE 10+ */
      color: black;
    }
    :-moz-placeholder { /* Firefox 18- */
      color: black;
    }
  }

  .mx-calendar {
    * {
      @apply text-gray-700;
    }
  }

  .mx-input {
    border-color: #e2e8f0;
    box-shadow: none;
    color: black;
    cursor: pointer;
    height: 37px;
  }

  .mx-calendar-content {
    .cell {
      &.actived {
        @apply bg-primary text-white rounded-sm;
      }

      &.inrange {
        @apply bg-purple-100;
      }
    }
  }
</style>