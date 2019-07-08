<template>
  <section class="f-table">
    <f-card>
      <div class="f-table__header">
        <div class="f-table__header__left">
          <slot name="header_left" />
        </div>
        <div class="f-table__header__center">
          <slot name="header_center" />
        </div>
        <div class="f-table__header__right">
          <slot name="header_right" />
        </div>
      </div>
      <FCardSeparator />
      <FCardBody>
        <div class="f-table__body" style="height: 400px">
          <table class="f-table__content">
            <thead>
              <tr>
                <th
                  v-for="head in keysHeaders"
                  :key="`th:${head}`"
                  @click="setSortBy(head)"
                >
                  <f-icon
                    dense
                    :name="sortIcon"
                    color="gray"
                    v-if="sortBy === head"
                  />
                  {{ header[head] }}
                </th>
              </tr>
            </thead>
            <tbody>
              <slot name="tr" v-for="(row, index) in show" v-bind="row">
                <tr :key="`tr:${index}`">
                  <td v-for="head in keysHeaders" :key="`td:${head}`">
                    {{ row[head] }}
                  </td>
                </tr>
              </slot>
            </tbody>
          </table>
        </div>
      </FCardBody>
      <FCardActions align="center">
        <div class="f-table__footer">
          <div class="f-table__footer__left">
            <slot name="footer_left" />
          </div>
          <div class="f-table__footer__center">
            <slot name="footer_center" />
          </div>
          <div class="f-table__footer__right">
            <slot name="footer_right" />
          </div>
        </div>
      </FCardActions>
    </f-card>
  </section>
</template>

<script>
import collect from "collect.js";
import { FCard, FCardSeparator, FCardBody, FCardActions } from "../FCard";
import { FIcon } from "../FIcon";

export default {
  name: "f-table",
  components: {
    FCard,
    FCardSeparator,
    FCardBody,
    FIcon,
    FCardActions
  },
  props: {
    data: Array,
    header: Object
  },
  data: () => ({
    sortBy: "",
    sortDirection: "asc"
  }),
  computed: {
    keysHeaders() {
      return Object.keys(this.header);
    },
    sortIcon() {
      return this.sortDirection === "asc" ? "arrow_downward" : "arrow_upward";
    },
    content() {
      let data = this.data.length ? this.data : [];
      return collect(data);
    },
    show() {
      let data = this.content;

      if (this.sortBy) {
        let method = this.sortDirection === "desc" ? "sortByDesc" : "sortBy";
        data = this.content[method](this.sortBy);
      }

      data.keyBy(item => this.getContent(item));

      return data.all();
    }
  },
  methods: {
    getContent(item) {
      this.keysHeaders.map(h => {
        item[h] = h.split(".").reduce((o, i) => o[i], item);
      });

      return item;
    },
    setSortBy(item) {
      this.sortBy = item;
      this.setSortDirection();
    },
    setSortDirection() {
      this.sortDirection = this.sortDirection === "asc" ? "desc" : "asc";
    }
  }
};
</script>

<style lang="scss" scoped>
.f-table {
  &__header,
  &__footer {
    @apply flex flex-no-wrap items-center justify-between;
    &__left {
      @apply text-left;
    }
    &__center {
      @apply text-center;
    }
    &__right {
      @apply text-right;
    }
  }
  &__body {
    @apply overflow-auto;
    table {
      @apply table-auto bg-white w-full;
      th,
      td {
        @apply p-4 whitespace-no-wrap text-left align-middle;
      }
      thead {
        th {
          @apply border-gray-600 mb-4 bg-white  select-none;
          border-bottom-width: 1px;
          &:hover {
            @apply opacity-75 cursor-pointer;
          }
          .f-icon {
            @apply -ml-2 text-xs;
          }
        }
      }
      tbody {
        tr {
          &:hover {
            @apply bg-gray-100;
          }
          td {
            @apply border-gray-200 mb-4;
            border-bottom-width: 1px;
          }
        }
      }
    }
  }
}
</style>
