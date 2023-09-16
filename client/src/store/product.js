import Vue from "vue";
import Vuex from "vuex";
import { baseApiURL } from "@/config/env";
import axios from "axios";
/*const stripe = require("stripe")(
  "sk_test_51ILXLOImdHoREZzeCeqmjDi7zI0vWIT3WzYGh9DV9RFT3lebYQ1FkOb0oFjwreviwQjok8kZqvFc2FbcJJDClAYO00imWDSt3p"
);*/

Vue.use(Vuex);

const state = {
  mainTxt: "Enjoy the best convenient deals of the moment! ",
  //TOTAL PRODUCTS FROM DB
  totalproducts: 0,
  //ARRAY USED TO LOAD PRODUCTS
  products: [{}],
  currentProduct: {
    name: "",
    description: "",
    category: "",
    price: "",
    quantity: 0,
  },
  imgBottom1:
    "https://images.freeimages.com/images/large-previews/2e5/fireplace-with-fire-1639928.jpg",
  imgBottom2:
    "https://images.freeimages.com/images/large-previews/2e5/fireplace-with-fire-1639928.jpg",
  imgBottom3:
    "https://images.freeimages.com/images/large-previews/2e5/fireplace-with-fire-1639928.jpg",
};
//GETTERS
const getters = {
  getMainText: (state) => {
    return state.mainTxt;
  },
  //GET TOTAL PRODUCT ARRAY
  getProducts: (state) => {
    return state.products;
  },
  //GET CURRENT SELECTED PRODUCT
  getCurrentProduct: (state) => {
    return state.currentProduct;
  },
  //GET TOTAL PRODUCT NUMBER
  getTotalProducts: (state) => {
    return state.totalproducts;
  },
  getImgBottom1: (state) => {
    return state.imgBottom1;
  },
  getImgBottom2: (state) => {
    return state.imgBottom2;
  },
  getImgBottom3: (state) => {
    return state.imgBottom3;
  },
};
//MUTATIONS
const mutations = {
  setCurrentProduct(state, newProduct) {
    state.currentProduct = newProduct;
    console.log("product mutation -->    " + state.currentProduct.name);
  },
};
//ACTIONS
const actions = {
  actionLoadListProductReset: (context) => {
    console.log(context);
    //this.showLoader = true
    axios
      .get(`${baseApiURL}/products/${1}/${4}`, {
        headers: {
          Authorization: `System b24b3b0e-9257-466b-949e-8c0c3841eeb5`,
        },
      })
      .then((response) => {
        //listItems = response.data.products
        state.products = response.data.products;
        console.log("FIRST TIME@@@@@@  PRODUCTS" + state.products);
        return true;
      });
  },
  actionLoadListProduct: (context, info) => {
    console.log(info);
    console.log(context);
    //this.showLoader = true
    axios
      .get(`${baseApiURL}/products/${info.page}/${info.recordsPerPage}`, {
        headers: {
          Authorization: `System b24b3b0e-9257-466b-949e-8c0c3841eeb5`,
        },
      })
      .then((response) => {
        info.showLoader = false;
        //listItems = response.data.products
        state.products = response.data.products;
        console.log(state.products);
        return true;
      });
  },
  actionTotalProducts: (context) => {
    console.log(context);
    axios
      .get(`${baseApiURL}/products/product`, {
        headers: {
          Authorization: `System b24b3b0e-9257-466b-949e-8c0c3841eeb5`,
        },
      })
      .then((response) => {
        state.totalproducts = response.data.total;
        console.log("total **** inside action" + response.data.total);
        //return   state.totalproducts;
      });
  },
};
/*
   FUTURE UPDATE:
   TO IMPROVE THE SECURITY MAKE SURE TO CREATE A SESSION EACH TIME THAT THE USER 
   START A PAYMENT CHECKOUT
  ,
  actionPay: (context) => {
    console.log(context);
    console.log(" ***payyy action*** !!!");

    fetch(`${baseApiURL}/configuration`).then(function (result) {
      console.log("configuration");
      return result.json();
    });
    /*
      .then(function (json) {
        window.config = json;
        window.stripe = Stripe(config.publicKey);
      });
  },
  actionPayClick: (context) => {
    console.log(context);
    console.log(" ***Action pay Click*** !!!");
    // Create the checkout session
    fetch(`${baseApiURL}/create-checkout-session`, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        //  quantity: quantity.value, // with the quantity
        quantity: 1,
      }),
    })
      .then(function (result) {
        return result.json();
      })
      .then(function (data) {
        // Redirect to Checkout. with the ID of the
        // CheckoutSession created on the server.
        alert(data.sessionId);
        stripe
          .redirectToCheckout({
            sessionId: data.sessionId,
          })
          .then(function (result) {
            // If redirection fails, display an error to the customer.
            if (result.error) {
              var displayError = document.getElementById("error-message");
              displayError.textContent = result.error.message;
            }
          });
      });
  },*/

export default {
  namespaced: true,
  state,
  actions,
  mutations,
  getters,
};
