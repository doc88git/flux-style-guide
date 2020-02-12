module.exports = {
  css: {
    loaderOptions: {
      sass: {
        prependData: `@import "./src/assets/settings/settings.scss";`
      }
    }
  }
}
