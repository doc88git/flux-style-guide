<template>
  <section class="f-pagination">
    <ul>
      <li>
        <button :disabled="localCurrentPage == 1" @click="jumpTo('first')">
          Primeira
        </button>
      </li>
      <li>
        <button @click="jumpTo('prev')" :disabled="localCurrentPage == 1">
          <!-- <f-icon class="f-pagination__icon" name="keyboard_arrow_left" /> -->
          <
        </button>
      </li>
      <li v-for="i in show" :key="i">
        <button
          :class="{ selected: localCurrentPage === i }"
          @click="setCurrentPage(i)"
        >
          {{ i }}
        </button>
      </li>
      <li>
        <button
          @click="jumpTo('next')"
          :disabled="localCurrentPage == totalPages"
        >
          <!-- <f-icon class="f-pagination__icon" name="keyboard_arrow_right" /> -->
          >
        </button>
      </li>
      <li>
        <button
          :disabled="localCurrentPage == totalPages"
          @click="jumpTo('last')"
        >
          Última
        </button>
      </li>
    </ul>
    {{ localCurrentPage }}
  </section>
</template>

<script>
import { FIcon } from '../FIcon'

export default {
  name: 'f-pagination',
  components: {
    FIcon
  },
  props: {
    currentPage: {
      type: Number,
      required: true
    },
    total: {
      type: Number,
      required: true
    },
    perPage: {
      type: Number,
      required: true
    },
    max: {
      type: Number,
      default: 10
    }
  },
  data: () => ({
    localCurrentPage: 0
    // lastPage: this.totalPages.length - 1
  }),
  computed: {
    totalPages() {
      if (!this.total || !this.perPage) return 0
      return Math.ceil(this.total / this.perPage)
    },
    items() {
      return this.currentPage
    },
    show() {
      let result = []
      let base = this.localCurrentPage
      let max = this.max

      let factor = Math.ceil(max / 2)
      let pgFrom = base - factor
      let pgTo = base <= this.totalPages ? base + factor : this.totalPages

      result = [...Array(pgTo + 1)]
        .map((item, index) => index)
        .filter(
          item =>
            item >= pgFrom && item > 0 && item < pgTo && item <= this.totalPages
        )

      result = result.filter(item => item <= this.totalPages)

      return this.complete(result, max, this.totalPages)
    }
  },
  mounted() {
    this.localCurrentPage = parseInt(this.currentPage)
    this.lastPage = this.totalPages.length - 1
  },
  methods: {
    setCurrentPage(value) {
      this.localCurrentPage = value
      this.$emit('update:current_page', value)
    },
    jumpTo(position) {
      let value = parseInt(this.localCurrentPage)

      if (position === 'first') this.setCurrentPage(1)
      if (position === 'last') this.setCurrentPage(this.totalPages)

      if (position === 'prev') {
        value--
        if (value > 0) this.setCurrentPage(value)
      }

      if (position === 'next') {
        value++
        if (value <= this.totalPages) this.setCurrentPage(value)
      }
    },
    complete(arr, max, totalPages) {
      let count = arr.length
      let completeWith = max - count

      ;[...Array(completeWith)].map(() => {
        let up = arr[arr.length - 1]
        let down = arr[0]

        if (up + 1 < totalPages) arr.push(up + 1)
        if (down - 1 >= 1) arr.push(down - 1)

        arr.sort((a, b) => a - b)
      })

      return arr
    }
  }
}
</script>

<style lang="scss" scoped>
.f-pagination {
  user-select: none;

  &__icon {
    margin: auto;
  }
  ul,
  li {
    display: inline-block;
    min-height: 100%;
    text-align: center;
  }
  ul {
    display: flex;
    align-items: center;
    align-content: center;
    list-style-type: none;
    li {
      button {
        text-transform: capitalize;
        padding: 0;
        text-align: center;
        min-width: 35px;
        outline: none;
        color: var(--color-gray);

        &.selected {
          color: var(--color-primary);
        }

        &:hover {
          color: var(--color-primary-light);
        }

        &:disabled {
          opacity: 50%;
          cursor: default;
        }
      }
    }
  }
}
</style>
