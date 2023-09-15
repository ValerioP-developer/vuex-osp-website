import Vue from "vue";
import App from "./App.vue";
import router from "./router";
import VueCookies from "vue-cookies";
import store from "./store";
//import GoogleSignInButton from "vue-google-signin-button-directive";
import VueSessionStorage from "vue-sessionstorage";
Vue.use(VueSessionStorage);
Vue.config.productionTip = false;
Vue.use(VueCookies);

import GoogleAuth from "@/config/google_oAuth.js";
const gauthOption = {
  clientId:
    "707231563844-e5cpkqrlt62gncmj6b84of5sml9lp8g9.apps.googleusercontent.com",
  scope: "profile email",
  prompt: "select_account",
};
Vue.use(GoogleAuth, gauthOption);
Vue.config.productionTip = false;

new Vue({
  //GoogleSignInButton,
  VueSessionStorage,
  router,
  store,
  render: (h) => h(App),
}).$mount("#app");
