<template>
  <div>
    <div v-for="(objList, index) in obj" :key="index">
      <ul>
        <li v-for="(list, i) in objList" :key="i">
          <h3>{{ i }}</h3>
          <ul class="block-colors">
            <li v-for="(color, c) in list" :key="c">
              <div
                class="block"
                :class="{ [`color--background--${color[0]}`]: true }"
              />
              <div class="text">
                <span class="text-hash">{{ color[1] }}</span>
                <br />
                {{ color[0] }}
              </div>
            </li>
          </ul>
        </li>
      </ul>
    </div>
  </div>
</template>

<script>
import SassVariables from '@/assets/f-variables.scss'

const baseColors = [
  'primary',
  'secondary',
  'gray',
  'red',
  'orange',
  'yellow',
  'green',
  'teal',
  'blue',
  'indigo',
  'purple',
  'pink',
  'black|white'
]

export default {
  data: () => ({
    sassColos: [],
    colors: [],
    obj: []
  }),
  mounted() {
    Promise.all([this.getSassColors(), this.mountColorsObject()])
  },
  methods: {
    async getSassColors() {
      Object.keys(SassVariables).map(key => {
        const colorName = key.replace('colors-theme-', '')
        this.colors.push([colorName, SassVariables[key]])
      })
    },
    async mountColorsObject() {
      this.obj = baseColors.map(b => ({
        [b]: this.getColors(b)
      }))
    },
    getColors(color) {
      return this.colors.filter(c => {
        let rx = new RegExp(color, 'g')
        return c[0].match(rx)
      })
    }
  }
}
</script>

<style lang="scss" scoped>
h3 {
  text-transform: capitalize;
  margin: 4px 0 24px 0;
}
ul {
  list-style: none;
}
.block-colors {
  display: grid;
  grid-template-columns: repeat(4, 1fr);
  grid-gap: 5px;
  grid-auto-rows: minmax(auto, auto);
  margin: auto;
  width: 100%;
}
.block {
  width: 48px;
  height: 48px;
  margin: auto;
  border: 1px solid var(--color-gray-200);
  border-radius: 10px;
}
.text {
  text-transform: lowercase;
  text-align: center;
  font-size: var(--text-sm);
  line-height: var(--text-lg);
  margin: auto;
  padding: 4px 0;

  &-hash {
    font-weight: bold;
    text-transform: uppercase;
  }
}
</style>
