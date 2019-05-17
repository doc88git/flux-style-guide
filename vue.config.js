module.exports = {
  css: {
    modules: true,
    loaderOptions: {
      sass: {
        data: `
          @import "@/assets/f-variables.scss";
          @import "~/material-design-icons/iconfont/material-icons.css";
        `
      }
    }
  }
};
