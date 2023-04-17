import Vue from "vue";
import Vuex from "vuex";
//import { baseApiURL } from "@/config/env";
//import axios from "axios";

/*const stripe = require("stripe")(
  "sk_test_51ILXLOImdHoREZzeCeqmjDi7zI0vWIT3WzYGh9DV9RFT3lebYQ1FkOb0oFjwreviwQjok8kZqvFc2FbcJJDClAYO00imWDSt3p"
);*/

Vue.use(Vuex);

const state = {
  //TOTAL POSTS FROM DB
  totalPosts: 0,
  //ARRAY USED TO LOAD POSTS
  posts: [
    {
      name: "post2",
    },
    {
      name: "post2",
    },
    {
      name: "post3",
    },
  ],
};
//GETTERS
const getters = {
  //GET TOTAL PRODUCT ARRAY
  getPosts: (state) => {
    return state.posts;
  },
  //GET TOTAL POSTS NUMBER
  getTotalPosts: (state) => {
    return state.totalPosts;
  },
};
//MUTATIONS
const mutations = {};
//ACTIONS
const actions = {
  actionLoadListPosts: (context, info) => {
    console.log(context);
    console.log(info);

    /*
    console.log(info);
    console.log(context);
    //this.showLoader = true
    axios
      .get(`${baseApiURL}/posts/${info.page}/${info.recordsPerPage}`)
      .then((response) => {
        info.showLoader = false;
        //listItems = response.data.products
        state.posts = response.data.posts;
        console.log(state.posts);
        return true;
      });*/
  },
  actionTotalPosts: (context) => {
    console.log(context);
    state.totalPosts = 3;
    /*
    console.log(context);
    axios.get(`${baseApiURL}/posts/total`).then((response) => {
      state.totalPosts = response.data;
    });*/
  },
};

export default {
  namespaced: true,
  state,
  actions,
  mutations,
  getters,
};
