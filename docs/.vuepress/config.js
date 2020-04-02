const extendMarkdown = require('./utils/use-markdown-it-vue-example.js')
const getConfig = require('vuepress-bar')

const barConfig = getConfig(`${__dirname}/..`)

// console.log(JSON.stringify(barConfig.sidebar, null, 2))

module.exports = {
  themeConfig: {
    head: [
      ['link', { rel: 'icon', href: '/favico.ico' }]
    ],
    logo: '/flux-logo.png',
    sidebar: [
      ...barConfig.sidebar
    ]
  },
  configureWebpack: {
    resolve: {
      alias: require(`${__dirname}/../../aliases.config`).webpack,
    },
  },
  markdown: {
    extendMarkdown,
    lineNumbers: true
  }
}
