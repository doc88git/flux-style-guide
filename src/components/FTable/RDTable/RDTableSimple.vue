<template>
  <div>
    <rd-line />
    <div class="table-head">
      <div
        v-for="(item, i) in headers"
        :key="`th-${item.id}-${i}`"
        class="flex items-center"
      >
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
        :id="i"
        :key="`field-${i}`"
        :class="{ active: item.id === isActive }"
        class="table-body__itens cell"
      >
        <span v-for="(elem, index) in item" :key="index" class="item-cell">
          {{ setElem(elem) }}
        </span>
        <button @click.stop.prevent="removeItem(i)">
          <span class="icon-delete"></span>
        </button>
      </div>
    </div>
  </div>
</template>

<script>
import RDLine from '../RDLine'
export default {
  name: 'RDTable',
  transition: 'fade',
  components: {
    'rd-line': RDLine
  },
  props: {
    headers: {
      type: [Array, Object],
      default: () => ({})
    },
    body: {
      type: [Array, Object],
      default: () => ({})
    },
    isActive: {
      type: Number,
      default: 0
    }
  },
  data: () => ({}),
  computed: {},
  methods: {
    setElem(elem) {
      return elem || '---'
    },
    removeItem(index) {
      this.$emit('remove_item', index)
      return true
    }
  }
}
</script>

<style lang="scss">
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
    flex-wrap: wrap;
    padding: 0 10px;
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
</style>
