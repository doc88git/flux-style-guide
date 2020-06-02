const webpack = require('webpack')
const CopyPlugin = require('copy-webpack-plugin')
const extendMarkdown = require('./utils/use-markdown-it-vue-example.js')
const getConfig = require('vuepress-bar')
const WriteFilePlugin = require('write-file-webpack-plugin')
const { CleanWebpackPlugin } = require('clean-webpack-plugin')

const getExamples = require('./utils/get-examples')
const examples = getExamples()
const barConfig = getConfig(`${__dirname}/..`)

module.exports = {
  themeConfig: {
    head: [['link', { rel: 'icon', href: '/favico.ico' }]],
    logo: '/flux-logo.png',
    sidebar: [...barConfig.sidebar]
  },
  configureWebpack: {
    resolve: {
      alias: require(`${__dirname}/../../aliases.config`).webpack
    },
    plugins: [
      new CleanWebpackPlugin({
        cleanStaleWebpackAssets: false
      }),
      new WriteFilePlugin(),
      new CopyPlugin(examples, { logLevel: 'debug' }),
      new webpack.LoaderOptionsPlugin({
        options: {
          babel: {
            plugins: ['require-context-hook']
          }
        }
      })
    ]
  },
  markdown: {
    extendMarkdown,
    lineNumbers: true
  }
}
