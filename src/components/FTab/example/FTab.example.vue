<template>
  <f-container>
    <f-tab :options="tabOptions" v-model="test" />
  </f-container>
</template>

<script>
import { FContainer } from '@/components/FContainer'
import { FTab } from '@/components/FTab'

export default {
  components: {
    FContainer,
    FTab
  },
  data: () => ({
    test: 1,
    tabOptions: [
      {
        label: 'Medição',
        value: 1,
        route: '/dashboard'
      },
      {
        label: 'Alarmes',
        value: 2,
        route: '/dashboard/alarms'
      },
      {
        label: 'Histórico',
        value: 3,
        route: '/dashboard/historic'
      }
    ]
  })
}
</script>

<style lang="scss" scoped></style>
