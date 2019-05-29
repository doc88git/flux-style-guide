import Vue from "vue";
import App from "./App.vue";

Vue.config.productionTip = false;

Vue.prototype.$f = {
  linkComponent: "vue" // nuxt
};

new Vue({
  render: h => h(App)
}).$mount("#app");
