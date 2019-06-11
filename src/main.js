import Vue from "vue";
import App from "./App.vue";
import VeeValidate from "vee-validate";

import "@/assets/f-style-guide.scss";

Vue.config.productionTip = false;

Vue.use(VeeValidate);

Vue.prototype.$f = {
  linkComponent: "vue" // nuxt
};

new Vue({
  render: h => h(App)
}).$mount("#app");
