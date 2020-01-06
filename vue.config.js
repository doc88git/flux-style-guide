module.exports = {
  css: {
    modules: true,
    loaderOptions: {
      sass: {
        data: `
          @import "@/assets/f-variables.scss";
        `
      }
    }
  }
}
