import Vue from "vue";
import Vuex from "vuex";
//import { baseApiURL } from "@/config/env";
import { stripeCheckoutAPI } from "@/config/env";
import axios from "axios";
//import router from "@/router";
Vue.use(Vuex);

const state = {};

const getters = {};
//MUTATIONS
const mutations = {
  /*
  setCurrentProduct(state, newProduct) {
    state.currentProduct = newProduct;
    console.log("product mutation -->    " + state.currentProduct.name);
  },*/
};
//ACTIONS
const actions = {
  actionPay: (context, item) => {
    //console.log(context);
    //console.log("action payy  111111 *** quantity" + item);
    axios
      .post(
        `${stripeCheckoutAPI}/checkout/sessions`,
        {
          name: item.name,
          amount: item.price,
        },
        {
          headers: {
            Authorization: `System b24b3b0e-9257-466b-949e-8c0c3841eeb5`,
          },
        }
      )
      .then((response) => {
        console.log("REDIRECT CUSTOMER TO THE CHECKOUT ");
        window.location.href = response.data.checkoutUrl;
      })
      .catch((error) => {
        console.log(error);
      });
  },
  createToken: (context) => {
    console.log(context);
    console.log("create Token *************");
    axios
      .post(
        `${stripeCheckoutAPI}/token`,
        {
          number: 4242424242424242,
          exp_month: 5,
          exp_year: 2024,
          cvc: 232,
        },
        {
          headers: {
            Authorization: `System b24b3b0e-9257-466b-949e-8c0c3841eeb5`,
          },
        }
      )
      .then((response) => {
        console.log(response.data);
        console.log("TOKEN CREATED SUCCESSFULLY!");
      })
      .catch((error) => {
        console.log(error);
      });
  },
  createSubscription: (context) => {
    console.log(context);
    console.log("create Subscription *************");
    axios
      .post(
        `${stripeCheckoutAPI}/subscription`,
        {
          email: "subtest@gmail.com",
          token: "tok_1NYeV9AwvgPZiPtRH4Go6t8X",
          plan_id: "price_1NX7icAwvgPZiPtRhS9QbaQn",
        },
        {
          headers: {
            Authorization: `System b24b3b0e-9257-466b-949e-8c0c3841eeb5`,
          },
        }
      )
      .then((response) => {
        console.log(response.data);
        console.log("SUBSCRIPTION CREATED SUCCESSFULLY!");
      })
      .catch((error) => {
        console.log(error);
      });
  },
  deleteSubscription: (context) => {
    console.log(context);
    console.log("delete Subscription *************");
    axios
      .delete(`${stripeCheckoutAPI}/subscription/cus_OLLU3b5IJnerMs`, {
        headers: {
          Authorization: `System b24b3b0e-9257-466b-949e-8c0c3841eeb5`,
        },
      })
      .then((response) => {
        console.log(response.data);
        console.log("SUBSCRIPTION DELETED SUCCESSFULLY!");
      })
      .catch((error) => {
        console.log(error);
      });
  },
  updateSubscription: (context) => {
    console.log(context);
    console.log("update Subscription *************");
    axios
      .delete(`${stripeCheckoutAPI}/subscription/cus_OLLU3b5IJnerMs`, {
        headers: {
          Authorization: `System b24b3b0e-9257-466b-949e-8c0c3841eeb5`,
        },
      })
      .then((response) => {
        console.log(response.data);
        console.log("SUBSCRIPTION DELETED SUCCESSFULLY!");
      })
      .catch((error) => {
        console.log(error);
      });
  },
};

export default {
  namespaced: true,
  state,
  actions,
  mutations,
  getters,
};
