const useMarkdownItVueExample = require('./utils/use-markdown-it-vue-example')
const getConfig = require('vuepress-bar')
const barConfig = getConfig(`${__dirname}/..`)

console.log(JSON.stringify(barConfig.sidebar, null, 2))

module.exports = {
  themeConfig: {
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
    lineNumbers: true,
    config: useMarkdownItVueExample
  },
}
