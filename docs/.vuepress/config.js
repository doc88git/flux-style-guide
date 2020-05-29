const path = require('path')
const webpack = require('webpack')
const CopyPlugin = require('copy-webpack-plugin')
const extendMarkdown = require('./utils/use-markdown-it-vue-example.js')
const getConfig = require('vuepress-bar')
const WriteFilePlugin = require('write-file-webpack-plugin')
const { CleanWebpackPlugin } = require('clean-webpack-plugin')
const requireContext = require('./utils/require-context')

//const getExamples = require('./utils/get-examples')
//const examples = getExamples()
const examplesDir = path.resolve(__dirname, 'components/examples')
const exampleFiles = requireContext(examplesDir, true, /.example.vue$/).keys()

const barConfig = getConfig(`${__dirname}/..`)

module.exports = {
  extraWatchFiles: exampleFiles,
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
      new CopyPlugin({
        patterns: [
          {
            from: path.resolve(__dirname, '../../src/components/**/*.example.vue'),
            to: path.resolve(__dirname, 'components/examples'),
            toType: 'file',
            force: true,
            transformPath: (targetPath, absolutePath) => {
              const componentName = absolutePath.split('/').pop()
              const target = path.resolve(__dirname, 'components/examples')
              //console.log({ path: `${targetPath}/${componentName}`, _path })
              return `${target}/${componentName}`
            }
          }
        ]
      }),
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
