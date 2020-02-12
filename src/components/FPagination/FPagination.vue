<template>
  <section class="f-pagination">
    <ul>
      <li>
        <button :disabled="isFirstPage" @click="jumpTo('first')">
          Primeira
        </button>
      </li>
      <li>
        <button :disabled="isFirstPage" @click="jumpTo('prev')">
          <
        </button>
      </li>
      <li v-for="i in show" :key="i">
        <button :class="getPageClasses(i)" @click="setCurrentPage(i)">
          {{ i }}
        </button>
      </li>
      <li>
        <button :disabled="isLastPage" @click="jumpTo('next')">
          >
        </button>
      </li>
      <li>
        <button :disabled="isLastPage" @click="jumpTo('last')">
          Última
        </button>
      </li>
    </ul>
  </section>
</template>

<script>
export default {
  name: 'f-pagination',

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
  }),

  computed: {
    isFirstPage () {
      return this.localCurrentPage === 1
    },

    isLastPage () {
      return this.localCurrentPage === this.totalPages
    },

    totalPages() {
      if (!this.total || !this.perPage) return 0
      return Math.ceil(this.total / this.perPage)
    },

    show() {
      const base = this.localCurrentPage
      const max = this.max
      const factor = Math.ceil(max / 2)

      const pgFrom = base - factor
      const pgTo = base <= this.totalPages ? base + factor : this.totalPages

      const result = Array.from({ length: max }, (e, i) =>
        pgFrom + max > this.totalPages
          ? (this.totalPages + 1) - (max - i)
          : pgFrom < 0 ? i + 1 : pgFrom + i)
      
      return result
    }
  },

  methods: {
    getPageClasses (i) {
      return { 'selected': this.localCurrentPage === i }
    },

    setCurrentPage(value) {
      this.localCurrentPage = value
      this.$emit('update:current_page', value)
    },

    jumpTo(position) {
      const value = parseInt(this.localCurrentPage)

      if (position === 'first') this.setCurrentPage(1)
      if (position === 'last') this.setCurrentPage(this.totalPages)

      if (position === 'prev' && value > 0)
        this.setCurrentPage(value - 1)

      if (position === 'next' && value <= this.totalPages)
        this.setCurrentPage(value + 1)
    },

    initPagination () {
      this.localCurrentPage = parseInt(this.currentPage)
      this.lastPage = this.totalPages.length - 1
    }
  },

  created() {
    this.initPagination()
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