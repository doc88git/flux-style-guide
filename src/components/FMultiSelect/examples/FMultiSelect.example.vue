<template>
  <div class="FMultiSelectExample">
    <div class="FMultiSelectExample__box">
      <f-multi-select
        :options="optionsMock"
        v-model="valueOne"
        label="Cidades"
        type="check"
        multiple
      />
    </div>

    <div class="FMultiSelectExample__box">
      <f-multi-select
        :options="optionsMock"
        v-model="valueTwo"
        label="Cidades"
        type="check"
        multiple
      >
        <template v-slot:option-append="{ isSelected }">
          <f-icon
            slot="option-append"
            lib="flux"
            name="star"
            size="sm"
            :color="isSelected ? 'primary' : 'gray-500'"
          />
        </template>
      </f-multi-select>
    </div>
  </div>
</template>

<script>
import { FMultiSelect } from '@/components/FMultiSelect'
import optionsMock from '@/components/FMultiSelect/examples/mock'

export default {
  name: 'FMultiSelectExample',

  components: { FMultiSelect },

  data: () => ({
    optionsMock,
    valueOne: [],
    valueTwo: []
  }),

  methods: {}
}
</script>

<style lang="scss">
.FMultiSelectExample {
  &__box {
    &:not(:last-child) {
      margin-bottom: 30px;
    }
  }
}
</style>
