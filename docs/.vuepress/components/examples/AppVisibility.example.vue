<template>
  <section class="q-pa-md">
    <p>
      Switch to another browser tab or app then come back here to see some
      changes.
    </p>

    <table v-if="eventList.length > 0">
      <tr v-for="evt in eventList" :key="evt.timestamp">
        <td>{{ evt.timestamp }}</td>
        <td>{{ evt.label }}</td>
      </tr>
    </table>
  </section>
</template>

<script>
const pad = number => {
  return (number < 10 ? '0' : '') + number
}

export default {
  data() {
    return {
      eventList: []
    }
  },

  watch: {
    '$f.appVisible'(state) {
      const date = new Date()
      this.eventList.unshift({
        timestamp:
          pad(date.getHours()) +
          ':' +
          pad(date.getMinutes()) +
          ':' +
          pad(date.getSeconds()) +
          '.' +
          date.getMilliseconds(),
        label: `App became ${state ? 'visible' : 'hidden'}`
      })
    }
  }
}
</script>

<style lang="scss" scoped>
section {
  padding: 16px 0;
  table {
    width: 100%;
  }
}
</style>
