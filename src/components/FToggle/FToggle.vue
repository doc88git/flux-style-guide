<template>
  <div class="FToggle">
    <div class="FToggle__wrapper">
      <div
        class="FToggle__wrapper--label"
        :class="labelPosition"
        v-if="$slots.before"
      >
        <slot name="before" />
      </div>

      <div class="FToggle__switch" @click="switchToggle">
        <div class="FToggle__ball" :class="{ 'FToggle__ball--active': value }">
          <f-icon
            v-if="!!value"
            name="check"
            lib="flux"
            type="outlined"
            color="white"
            size="xs"
          />
        </div>
      </div>

      <span
        v-if="!hideLabel"
        class="FToggle__wrapper--label"
        :class="[{ 'FToggle__wrapper--label--active': value }, labelPosition]"
      >
        {{ labelName }}
      </span>
    </div>
  </div>
</template>

<script>
import { FIcon } from '../FIcon'

const hasKeys = (obj, keys) =>
  (keys || []).every(key => Object.keys(obj).includes(key))

export default {
  name: 'FToggle',

  components: {
    FIcon
  },

  props: {
    value: {
      type: Boolean,
      default: false
    },
    align: {
      type: String,
      default: 'right'
    },
    hideLabel: {
      type: Boolean,
      default: false
    },
    labels: {
      type: Object,
      required: true,
      default: () => ({ on: 'Ligado', off: 'Desligado' }),
      validator: v => hasKeys(v, ['on', 'off'])
    }
  },

  computed: {
    labelName() {
      return this.value ? this.labels.on : this.labels.off
    },
    labelPosition() {
      return `FToggle__wrapper--label--${this.align}`
    }
  },

  methods: {
    switchToggle() {
      this.$emit('input', !this.value)
    }
  }
}
</script>

<style lang="scss" scoped>
.FToggle {
  display: inline-block;
  width: 100%;
  padding: 10px 0;
  margin-bottom: 10px;

  &__switch {
    display: flex;
    align-items: center;

    width: 40px;
    border: 1px solid #c1c1c1;
    height: 20px;
    border-radius: 10px;
    cursor: pointer;
    padding: 1px;
    order: 1;
  }

  &__ball {
    display: flex;
    align-items: center;
    justify-content: center;

    height: 14px;
    width: 14px;
    border-radius: 10px;
    background-color: #c1c1c1;
    transition: transform 0.1s ease-in-out;

    &--active {
      transform: translateX(145%);
      background-color: #00f300;
    }
  }

  &__wrapper {
    display: flex;
    align-items: center;

    &--label {
      display: flex;
      align-items: center;

      &--left {
        order: 0;
        margin-right: 8px;
      }

      &--right {
        order: 2;
        margin-left: 8px;
      }

      &--active {
        color: #79df28;
      }
    }
  }
}
</style>
