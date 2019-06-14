<template>
  <section class="f-pagination">
    <ul>
      <li>
        <f-button flat label="Primeira" @click="jumpTo('first')" color="gray" />
      </li>
      <li>
        <f-button
          flat
          icon="keyboard_arrow_left"
          @click="jumpTo('prev')"
          color="gray"
          v-if="localCurrentPage !== 1"
        />
      </li>
      <li v-for="i in show" :key="i">
        <f-button
          flat
          :color="localCurrentPage === i ? 'primary' : 'gray'"
          :label="String(i)"
          @click="setCurrentPage(i)"
        />
      </li>
      <li>
        <f-button
          flat
          icon="keyboard_arrow_right"
          @click="jumpTo('next')"
          color="gray"
          v-if="localCurrentPage !== totalPages"
        />
      </li>
      <li>
        <f-button flat label="Última" @click="jumpTo('last')" color="gray" />
      </li>
    </ul>
  </section>
</template>

<script>
import { FButton } from "../FButton";

export default {
  name: "f-pagination",
  components: {
    FButton
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
  }),
  computed: {
    totalPages() {
      if (!this.total || !this.perPage) return 0;
      return Math.ceil(this.total / this.perPage);
    },
    items() {
      return this.currentPage;
    },
    show() {
      let result = [];
      let base = this.localCurrentPage;
      let max = this.max;

      let factor = Math.ceil(max / 2);
      let pgFrom = base - factor;
      let pgTo = base <= this.totalPages ? base + factor : this.totalPages;

      result = [...Array(pgTo + 1)]
        .map((item, index) => index)
        .filter(
          item =>
            item >= pgFrom &&
            (item > 0 && item < pgTo) &&
            item <= this.totalPages
        );

      result = result.filter(item => item <= this.totalPages);

      return this.complete(result, max, this.totalPages);
    }
  },
  mounted() {
    this.localCurrentPage = this.currentPage;
  },
  methods: {
    setCurrentPage(value) {
      this.localCurrentPage = value;
      this.$emit("update:current_page", value);
    },
    jumpTo(position) {
      let value = parseInt(this.localCurrentPage);

      if (position === "first") this.setCurrentPage(1);
      if (position === "last") this.setCurrentPage(this.totalPages);

      if (position === "prev") {
        value--;
        if (value > 0) this.setCurrentPage(value);
      }

      if (position === "next") {
        value++;
        if (value <= this.totalPages) this.setCurrentPage(value);
      }
    },
    complete(arr, max, totalPages) {
      let count = arr.length;
      let completeWith = max - count;

      [...Array(completeWith)].map(() => {
        let up = arr[arr.length - 1];
        let down = arr[0];

        if (up + 1 < totalPages) arr.push(up + 1);
        if (down - 1 >= 1) arr.push(down - 1);

        arr.sort((a, b) => a - b);
      });

      return arr;
    }
  }
};
</script>

<style lang="scss" scoped>
.f-pagination {
  @apply select-none;
  ul,
  li {
    @apply inline-block min-h-full;
  }
  ul {
    @apply flex items-center content-center list-none;
    li {
    }
  }
  button {
    @apply capitalize p-2;
  }
}
</style>
