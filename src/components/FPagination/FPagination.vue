<template>
  <section class="FPagination">
    <div class="FPagination__sectionPrevious">
      <button
        class="FPagination__sectionBtn"
        :disabled="isFirstPage"
        @click="jumpTo('first')"
      >
        Primeira
      </button>

      <button
        class="FPagination__sectionBtn"
        :disabled="isFirstPage"
        @click="jumpTo('prev')"
      >
        <f-icon
          lib="flux"
          name="chevron-left"
          :color="isFirstPage ? 'gray-300' : 'gray'"
        />
      </button>
    </div>

    <ul class="FPagination__ul">
      <li v-for="i in show" :key="i" class="FPagination__li">
        <button :class="getPageClasses(i)" @click="setCurrentPage(i)">
          {{ i }}
        </button>
      </li>
    </ul>

    <div class="FPagination__sectionNext">
      <button
        class="FPagination__sectionBtn"
        :disabled="isLastPage"
        @click="jumpTo('next')"
      >
        <f-icon
          lib="flux"
          name="chevron-right"
          :color="isLastPage ? 'gray-300' : 'gray'"
        />
      </button>

      <button
        class="FPagination__sectionBtn"
        :disabled="isLastPage"
        @click="jumpTo('last')"
      >
        Última
      </button>
    </div>
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

  computed: {
    isFirstPage() {
      return this.currentPage === 1
    },

    isLastPage() {
      return this.currentPage >= this.totalPages
    },

    totalPages() {
      if (!this.total || !this.perPage) return 0
      return Math.ceil(this.total / this.perPage)
    },

    pgFrom() {
      return this.totalPages > this.max
        ? this.currentPage - Math.ceil(this.max / 2)
        : 0
    },

    show() {
      const length = Math.min(this.totalPages, this.max)

      const result = Array.from({ length }, (e, i) =>
        this.pgFrom + length > this.totalPages
          ? this.totalPages + 1 - (this.max - i)
          : this.pgFrom <= 0
          ? i + 1
          : this.pgFrom + i
      )

      return result
    }
  },

  methods: {
    getPageClasses(i) {
      return [
        'FPagination__pageBtn',
        {
          'FPagination__pageBtn--selected': this.currentPage === i
        }
      ]
    },

    setCurrentPage(value) {
      this.$emit('update:current_page', value)
    },

    jumpTo(position) {
      const value = parseInt(this.currentPage)

      if (position === 'first') this.setCurrentPage(1)
      if (position === 'last') this.setCurrentPage(this.totalPages)

      if (position === 'prev' && value > 0) this.setCurrentPage(value - 1)

      if (position === 'next' && value <= this.totalPages)
        this.setCurrentPage(value + 1)
    },

    initPagination() {
      this.lastPage = this.totalPages.length - 1
    }
  },

  created() {
    this.initPagination()
  }
}
</script>

<style lang="scss" scoped>
.FPagination {
  display: flex;
  align-items: center;
  user-select: none;

  font-family: var(--font-primary);
  font-size: var(--text-base);
  color: var(--color-gray);

  .f-icon {
    transform: translateY(2px);
    min-width: 35px;
    fill: var(--color-gray);

    &.selected {
      fill: var(--color-primary);
    }

    &:hover {
      fill: var(--color-primary-light);
    }

    &:disabled {
      opacity: 50%;
      cursor: default;
    }
  }

  &__sectionPrevious {
    display: inline-flex;
    align-items: center;

    & > :first-child {
      margin-right: 24px;
    }

    & > :last-child {
      margin-right: 11px;
    }
  }

  &__sectionNext {
    display: inline-flex;
    align-items: center;

    & > *:last-child {
      margin-left: 24px;
    }

    & > :first-child {
      margin-left: 11px;
    }
  }

  &__sectionBtn {
    outline: 0;
  }

  &__ul,
  &__li {
    display: inline-block;
    min-height: 100%;
    text-align: center;
  }

  &__ul {
    display: flex;
    align-items: center;
    align-content: center;
    list-style-type: none;
  }

  &__li {
    display: flex;
    align-items: center;
    justify-content: center;
  }

  &__pageBtn {
    text-transform: capitalize;
    text-align: center;
    padding: 0 9px;
    outline: none;

    &--selected {
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
</style>
