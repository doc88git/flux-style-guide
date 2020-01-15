<template>
  <div>
    <div class="flex items-center justify-between">
      <span class="block ">
        <strong class="font-bold">Total:</strong>
        <span v-if="totalResults > 0">
          {{
            totalResults > 1
              ? totalResults + ' resultados'
              : totalResults + ' resultado'
          }}</span
        >
      </span>
      <slot></slot>
    </div>
    <f-separator></f-separator>
    <div class="table-head">
      <div
        v-for="(item, i) in headers"
        :key="`th-${item.id}-${i}`"
        class="flex items-center"
      >
        <span v-if="sortBy === item" :class="sortIcon" class="mr-1"></span>
        <button
          v-if="item.sortable"
          class="font-bold cursor-pointer"
          @click.prevent="setSortBy(item)"
        >
          {{ item.label }}
        </button>
        <span v-else class="font-bold">
          {{ item.label }}
        </span>
      </div>
    </div>
    <div v-if="body.length" class="table-body">
      <div
        v-for="(item, i) in body"
        :id="item.id"
        :key="`field-${i}`"
        :class="{ active: item.id === isActive }"
        class="table-body__itens cell"
      >
        <span
          v-for="(elem, index) in item"
          :key="index"
          class="item-cell"
          :class="{ inactive: item.deleted_at }"
          @click.stop="$emit('detail', item.id)"
        >
          {{ setElem(elem) }}
        </span>
        <span>
          <slot :item="item"></slot>
        </span>
        <slot :id="item.id" name="detail"></slot>
      </div>
    </div>
    <div v-else class="table-body">
      <div class="table-body__itens cell no-data">
        <span class="item-cell text-center">
          Sem dados
        </span>
      </div>
    </div>
    <slot name="pagination"></slot>
  </div>
</template>

<script>
import { FSeparator } from '../FSeparator'
export default {
  name: 'f-table-custom',
  components: {
    FSeparator
  },
  props: {
    headers: {
      type: [Array, Object],
      default: () => ({})
    },
    totalResults: {
      type: Number,
      default: 0
    },
    body: {
      type: [Array, Object],
      default: () => ({})
    },
    rowItem: {
      type: Number,
      default: null
    },
    isActive: {
      type: Number,
      default: 0
    },
    itemDetail: {
      type: Function,
      default: () => ({})
    }
  },
  data: () => ({
    options: [
      { label: 10, value: 1, selected: true },
      { label: 25, value: 2, selected: false },
      { label: 50, value: 3, selected: false }
    ],
    sortBy: '',
    sortDirection: false
  }),
  computed: {
    sortIcon() {
      return this.sortDirection === 'asc'
        ? 'icon-chevron-up small'
        : 'icon-chevron-down small'
    }
  },
  methods: {
    setElem(elem) {
      return elem || '---'
    },
    handleChange(value) {
      const elem = document.querySelector('.selected')
      const val = parseInt(value.target.value)
      elem.classList.remove('selected')
      value.target.classList.add('selected')
      this.$emit('per_page', val)
    },
    setSortBy(item) {
      this.sortBy = item
      this.setSortDirection()
      this.$emit('update:order_by', item.id)
    },
    setSortDirection() {
      this.sortDirection = this.sortDirection === 'asc' ? 'desc' : 'asc'
      this.$emit('update:sort', this.sortDirection)
    },
    toggleActivateUser(payload) {
      const val = payload[0]
      this.$emit('toogle:user-status', val)
    }
  }
}
</script>

<style lang="scss" scoped>
.table-head,
.table-body__itens {
  display: grid;
  grid-template-columns: repeat(1, auto);
}

.table-head {
  .items-center {
    padding: 10px;
  }
}

.table-body__itens {
  border: 1px solid transparent;
  background: var(--color-gray--light);
  border-radius: 5px;
  margin-bottom: 5px;
  overflow: hidden;

  span {
    display: flex;
    align-items: center;
    word-break: break-word;
    padding: 7px 10px;
    height: 40px;
  }

  .icon {
    padding: 0;
  }

  // Tabela exibida quando não ha dados
  &.no-data {
    display: flex;
    justify-content: center;
  }

  &:hover {
    background: #fff;
    border: 1px solid var(--color-gray--light);
  }
}

/* Exibir por página */
.f-display-per-page {
  .btn {
    padding: 0;
    height: 30px;
    width: 30px;
  }
  &.standard {
    .btn.selected {
      background-color: var(--color-standard);
    }
  }
  &.secondary {
    .btn.selected {
      background-color: var(--color-blue);
    }
  }
}
</style>
