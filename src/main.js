import Vue from "vue";
import App from "./App.vue";
import BootstrapVue from "bootstrap-vue";
import { store } from "./store";
import { FontAwesomeIcon } from "@fortawesome/vue-fontawesome";
import { library } from "@fortawesome/fontawesome-svg-core";
import { faCircle, faBan } from "@fortawesome/free-solid-svg-icons";

import "bootstrap/dist/css/bootstrap.css";
import "bootstrap-vue/dist/bootstrap-vue.css";
import "./assets/main.css";

Vue.config.productionTip = false;
Vue.use(BootstrapVue);
Vue.component("font-awesome-icon", FontAwesomeIcon);
library.add(faCircle);
library.add(faBan);

Vue.prototype.$store = store;

new Vue({
  store,
  render: h => h(App)
}).$mount("#app");
