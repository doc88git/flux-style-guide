module.exports = {
  css: {
    loaderOptions: {
      sass: {
        prependData: `@import "./src/assets/settings/settings.scss";`
      }
    }
  },
  chainWebpack: config => {
    const svgRule = config.module.rule('svg')
    svgRule.uses.clear()
    config.module
      .rule('svg')
      .test(/\.svg$/)
      .use('html-loader')
      .loader('html-loader')
      .end()
  }
}
