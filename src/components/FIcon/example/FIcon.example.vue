<template>
  <div class="FIconExample">
    <div>
      <ul class="FIconExample__example-1">
        <li
          v-for="(size, index) in sizes"
          :key="index"
          @click="setCurrentSize(size)"
        >
          <f-icon
            name="home"
            :color="currentSize === size ? 'blue' : 'gray'"
            :size="size"
            lib="flux"
            class="FIconExample__icon-example"
          />
          <div>{{ size }}</div>
        </li>
      </ul>
    </div>
    <div>
      <f-input v-model="search" name="search" placeholder="Search" />
    </div>
    <h2>Icons</h2>
    <div class="FIconExample__list">
      <div
        position="top"
        :label="icon"
        v-for="(icon, index) in icons"
        :key="index"
      >
        <f-tooltip>
          <template>
            <f-icon :name="icon" lib="flux" :size="currentSize" />
          </template>
          <template v-slot:content>
            {{ icon }}
          </template>
        </f-tooltip>
      </div>
    </div>
  </div>
</template>

<script>
import { FIcon } from '@/components/FIcon'
import { FInput } from '@/components/FField'
import list from '@doc88/flux-icon/dist/list.json'

export default {
  name: 'FIconExample',
  components: { FIcon, FInput },
  data: () => ({
    list,
    search: '',
    sizes: ['xs', 'sm', 'base', 'lg', 'xl', '2xl'].reverse(),
    currentSize: 'lg'
  }),
  computed: {
    icons() {
      return list
        .filter(i => i.name.includes('16px'))
        .map(item => item.name.replace(/-16px.vue$/, ''))
        .filter(item => this.iconSearch(item))
    },
    icons16() {
      return list
        .filter(i => i.name.includes('16px'))
        .map(item => item.name.replace(/-16px.vue$/, ''))
        .filter(item => this.iconSearch(item))
    },
    icons24() {
      return list
        .filter(i => i.name.includes('24px'))
        .map(item => item.name.replace(/-24px.vue$/, ''))
        .filter(item => this.iconSearch(item))
    }
  },
  methods: {
    setCurrentSize(size) {
      this.currentSize = size
    },
    iconSearch(s) {
      if (!this.search) return true
      const expression = new RegExp(this.search.toUpperCase(), 'g')
      return s.toUpperCase().match(expression)
    }
  }
}
</script>

<style lang="scss" scoped>
.FIconExample {
  h2 {
    margin: 16px 0;
  }
  &__example-1 {
    margin-bottom: 20px;
    display: flex;
    justify-content: center;
    align-items: flex-end;
    list-style-type: none;
    li {
      justify-self: center;
      margin: 0 16px;
      text-align: center;
      cursor: pointer;
      opacity: 1;
      transition: opacity ease 0.2s;

      &:hover {
        opacity: 0.5;
      }

      .FIconExample__icon-example {
        display: inline-block;
      }
    }
  }
  &__list {
    max-width: 100%;
    display: grid;
    grid-template-columns: repeat(8, 1fr);
    grid-gap: 8px;
    text-align: center;
  }
}
</style>
