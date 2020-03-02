<template>
  <section class="f-table">
    <div class="f-table__body">
      <table class="f-table__content">
        <thead>
          <tr>
            <slot
              name="th"
              v-for="(head, index) in keysHeaders"
              v-bind="{ head, index }"
            >
              <th :key="`th:${head}`" :sort="sort" @click="setSortBy(head)">
                <f-icon
                  dense
                  :name="sortIcon"
                  color="gray"
                  v-if="sortBy === head"
                />
                {{ header[head] }}
              </th>
            </slot>
          </tr>
        </thead>
        <tbody>
          <slot name="tr" v-for="(row, index) in show" v-bind="{ row, index }">
            <tr :key="`tr:${index}`">
              <td v-for="head in keysHeaders" :key="`td:${head}`">
                {{ row[head] }}
              </td>
            </tr>
          </slot>
        </tbody>
      </table>
    </div>
  </section>
</template>

<script>
import collect from 'collect.js'
import { FIcon } from '../FIcon'

export default {
  name: 'f-table',
  components: {
    FIcon
  },
  props: {
    data: Array,
    header: Object,
    sort: {
      type: Boolean,
      default: false
    }
  },
  data: () => ({
    sortBy: '',
    sortDirection: 'asc'
  }),
  computed: {
    keysHeaders() {
      return Object.keys(this.header)
    },
    sortIcon() {
      return this.sortDirection === 'asc' ? 'arrow_downward' : 'arrow_upward'
    },
    content() {
      let data = this.data.length ? this.data : []
      return collect(data)
    },
    show() {
      let data = this.content

      if (this.sortBy) {
        let method = this.sortDirection === 'desc' ? 'sortByDesc' : 'sortBy'
        data = this.content[method](this.sortBy)
      }

      data.keyBy(item => this.getContent(item))

      return data.all()
    }
  },
  methods: {
    getContent(item) {
      this.keysHeaders.map(h => {
        item[h] = h.split('.').reduce((o, i) => {
          try {
            return o[i]
          } catch (e) {
            return ''
          }
        }, item)
      })

      return item
    },
    setSort() {
      !this.sort ? this.setSortBy : this.$emit('click')
      console.log(this.sortBy, this.sort, this.sortDirection, 'a')
    },
    setSortBy(item) {
      !this.sort
        ? [(this.sortBy = item), this.setSortDirection()]
        : this.$emit('click')
      //   this.sortBy = item
      //   this.setSortDirection()
      console.log(this.sortBy, this.sort, this.sortDirection, 'b')
    },
    setSortDirection() {
      this.sortDirection = this.sortDirection === 'asc' ? 'desc' : 'asc'
    }
  }
}
</script>

<style lang="scss" scoped>
.f-table {
  &__body {
    overflow: auto;
    table {
      table-layout: auto;
      background: white;
      width: 100%;
      th,
      td {
        padding: 1rem;
        white-space: nowrap;
        text-align: left;
        vertical-align: middle;
        color: #666666;
      }
      thead {
        tr {
          color: #666666;
          border-color: #d2d2d2;
          margin-bottom: 4px;
          background: white;
          user-select: none;
          font-weight: 600;
          border-bottom-width: 1px;
        }

        th {
          &:hover {
            opacity: 0.75;
            cursor: pointer;
          }
          .f-icon {
            margin-left: 0.5rem;
            font-size: var(--text-xs);
          }
        }
      }
      tbody {
        tr {
          &:hover {
            background: rgba(245, 245, 245, 1);
          }
          td {
            border-bottom-width: 1px;
            border-color: #edf2f7;
            margin-bottom: 1rem;
          }
        }
      }
    }
  }
}
</style>
