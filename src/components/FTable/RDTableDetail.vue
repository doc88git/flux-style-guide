<template>
  <transition name="fade">
    <div>
      <h2>{{ title }}</h2>
      <div class="detail-user__info">
        <table class="table">
          <thead>
            <tr>
              <th
                v-for="(header, i) in headersDetail"
                :key="`header-${i}`"
                class="font-bold"
              >
                {{ header }}
              </th>
            </tr>
          </thead>
          <tbody>
            <slot name="info"></slot>
          </tbody>
        </table>
      </div>
    </div>
  </transition>
</template>

<script>
import { mapState } from 'vuex'
export default {
  name: 'RDTableDetail',
  transition: 'fade',
  props: {
    id: {
      type: Number,
      default: 0
    },
    title: {
      type: String,
      default: ''
    },
    headers: {
      type: Function,
      default: () => ({})
    },
    body: {
      type: Function,
      default: () => ({})
    },
    info: {
      type: [Array, Object],
      default: () => ({})
    },
    headersDetail: {
      type: Array,
      default: () => ({})
    }
  },
  computed: mapState({
    detailHeaders: state => state.users.rowDetail,
    userInfo: state => state.users.userInfo
  }),
  methods: {}
}
</script>
