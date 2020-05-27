<template>
  <div class="FMultiSelectExample">
    <div class="FMultiSelectExample__box">
      <f-select
        :options="optionsMock"
        v-model="valueOne"
        label="Cidades"
        type="check"
        multiple
      />
    </div>

    <div class="FMultiSelectExample__box">
      <f-select
        :options="optionsMock"
        v-model="valueTwo"
        label="Cidades"
        type="check"
        multiple
      >
        <template v-slot:option-prepend="{ isSelected }">
          <f-icon
            slot="option-append"
            lib="flux"
            name="map-pin"
            size="sm"
            :color="isSelected ? 'primary' : 'gray-500'"
          />
        </template>

        <template v-slot:option-append="{ isSelected }">
          <f-icon
            slot="option-append"
            lib="flux"
            name="star"
            size="sm"
            :color="isSelected ? 'primary' : 'gray-500'"
          />
        </template>
      </f-select>
    </div>

    <div class="FMultiSelectExample__box">
      <f-select
        :options="optionsMock"
        v-model="valueThree"
        label="Cidades"
        type="photo"
        multiple
      >
        <template v-slot:option-prepend="{ isSelected }">
          <f-icon
            slot="option-append"
            lib="flux"
            name="map-pin"
            size="sm"
            :color="isSelected ? 'primary' : 'gray-500'"
          />
        </template>

        <template v-slot:option-append="{ isSelected }">
          <f-icon
            slot="option-append"
            lib="flux"
            name="star"
            size="sm"
            :color="isSelected ? 'primary' : 'gray-500'"
          />
        </template>
      </f-select>
    </div>
  </div>
</template>

<script>
import { FSelect } from '@/components/FSelect'
import optionsMock from '@/components/FSelect/examples/mock'

export default {
  name: 'FMultiSelectExample',

  components: { FSelect },

  data: () => ({
    optionsMock,
    valueOne: [],
    valueTwo: [],
    valueThree: []
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
