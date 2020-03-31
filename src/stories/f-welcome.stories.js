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
    today,
    urls: {
      doc88: 'https://doc88.com.br',
      fsgGithub: 'https://github.com/doc88git/flux-style-guide',
      iconsGithub: 'https://github.com/doc88git/flux-icon'
    }
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
          <a targe="_blank" :href="urls.doc88" style="font-size: var(--text-xl);">Doc88</a>
          Front-end Development Team - ${today.getFullYear()}
        </h6>
        <p style="font-size: var(--text-xl);">
          <a targe="_blank" :href="urls.fsgGithub">Github</a> |
          <a targe="_blank" :href="urls.iconsGithub">Flux Icons</a>
        </p>
      </div>
    </FContainer>`
}))
