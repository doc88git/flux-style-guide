const path = require('path')
const resolve = dir => path.join(__dirname, dir)

module.exports = {
  css: {
    loaderOptions: {
      sass: {
        prependData: `
          @import "./src/assets/settings/settings.scss";
          @import "./src/assets/f-variables.scss";
        `
      }
    }
  },
  chainWebpack: config => {
    if (config.plugins.has('extract-css')) {
      const extractCSSPlugin = config.plugin('extract-css')
      extractCSSPlugin &&
        extractCSSPlugin.tap(() => [
          {
            filename: '[name].css',
            chunkFilename: '[name].css'
          }
        ])
    }
    config.resolve.alias.set('@components', resolve('src/components/'))
    config.resolve.alias.set('@plugins', resolve('src/plugins/'))
    config.resolve.alias.set('@directives', resolve('src/directives/'))
    config.resolve.alias.set('@mixins', resolve('src/mixins/'))
    config.resolve.alias.set('@stories', resolve('src/stories/'))
    config.resolve.alias.set('@utils', resolve('src/utils/'))
    config.resolve.alias.set('@assets', resolve('src/assets/'))
    config.resolve.alias.set('@', resolve('src/'))
  },
  configureWebpack: {
    output: {
      filename: '[name].js',
      chunkFilename: '[name].js'
    }
  }
}
