import Vue from "vue";
import Vuex from "vuex";

Vue.use(Vuex);
import profile from "./profile";
import product from "./product";
import blog from "./blog";
import home from "./home";
import stripe from "./stripe";

export default new Vuex.Store({
  modules: {
    profile,
    product,
    blog,
    home,
    stripe
  },
});
