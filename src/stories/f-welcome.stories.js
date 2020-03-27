import { storiesOf } from '@storybook/vue'
import * as Components from '../components'
import pkg from '../../package.json'

const today = new Date()

storiesOf(`Welcome|Flux Style Guide`, module).add('About', () => ({
  components: {
    FContainer: Components.FContainer,
    FBadge: Components.FBadge
  },
  data: () => ({
    version: `v${pkg.version}`,
    today
  }),
  props: {},
  methods: {},
  template: `
    <FContainer>
      <div style="margin: 50px auto; width: 100%; text-align: center;">
        <h1>Flux Style Guide <f-badge :label="version" align="top" /></h1>
      </div>
      <div style="position: absolute;bottom: 50px;width: 99%;text-align: center;">
        <h6>
          Fron-tend development team ${today.getFullYear()}
        </h6>
        <p style="font-size: 16px">
          <a targe="_blank" href="https://doc88.com.br">Doc88</a> | <a targe="_blank" href="https://github.com/doc88git/flux-style-guide">Github</a>
        </p>
      </div>
    </FContainer>`
}))
