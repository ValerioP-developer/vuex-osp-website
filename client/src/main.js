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

new Vue({
  //GoogleSignInButton,
  VueSessionStorage,
  router,
  store,
  render: (h) => h(App),
}).$mount("#app");
