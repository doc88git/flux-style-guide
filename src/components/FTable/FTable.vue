<template>
  <section class="f-table">
    <f-card>
      <f-card-title v-if="table" v-text="title" />
      <div class="f-table__header">
        <div class="f-table__header__left">
          <slot name="header_left" />
          <f-button icon="add">Teste</f-button>
        </div>
        <div class="f-table__header__center">
          <slot name="header_center" />
        </div>
        <div class="f-table__header__right">
          <slot name="header_right" />
        </div>
      </div>
      <FCardSeparator />
      <FCardBody class="f-table__body" style="height: 400px">
        <table class="f-table__content">
          <thead>
            <tr>
              <th v-for="item in 20" :key="`th:${item}`">
                Col Title {{ item }}
              </th>
            </tr>
          </thead>
          <tbody>
            <tr v-for="line in 20" :key="`tr:${line}`">
              <td v-for="item in 20" :key="`td:${item}`">
                Content collum {{ item }}
              </td>
            </tr>
          </tbody>
        </table>
      </FCardBody>
    </f-card>
  </section>
</template>

<script>
import { FCard, FCardSeparator, FCardTitle, FCardBody } from "../FCard";
import { FButton } from "../FButton";
export default {
  name: "f-table",
  components: {
    FCard,
    FCardSeparator,
    FCardTitle,
    FCardBody,
    FButton
  },
  props: {
    title: String
  }
};
</script>

<style lang="scss" scoped>
.f-table {
  &__header {
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
      @apply table-auto bg-white;
      th,
      td {
        @apply p-2 whitespace-no-wrap;
      }
      thead {
        th {
          @apply border-gray-600 mb-4 bg-white;
          border-bottom-width: 1px;
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
