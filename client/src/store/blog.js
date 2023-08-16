import Vue from "vue";
import Vuex from "vuex";
import { baseApiURL } from "@/config/env";
import axios from "axios";

/*const stripe = require("stripe")(
  "sk_test_51ILXLOImdHoREZzeCeqmjDi7zI0vWIT3WzYGh9DV9RFT3lebYQ1FkOb0oFjwreviwQjok8kZqvFc2FbcJJDClAYO00imWDSt3p"
);*/

Vue.use(Vuex);

const state = {
  //TOTAL POSTS FROM DB
  totalPosts: 0,
  //ARRAY USED TO LOAD POSTS
  posts: [
    {},
    /*
    {
      name: "post2",
    },
    {
      name: "post2",
    },
    {
      name: "post3",
    },*/
  ],
  currentPost: {},
  mainTxt:
    "Few articles that can help you to make better choices or expand your knowlodges.",
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
  //GET CURRENT POST
  getCurrentPost: (state) => {
    return state.currentPost;
  },
  //GET CURRENT POST
  getMainText: (state) => {
    return state.mainTxt;
  },
};
//MUTATIONS
const mutations = {
  setCurrentPost(state, newPost) {
    state.currentPost = newPost;
    console.log("product mutation -->    " + state.currentPost.title);
  },
};
//ACTIONS
const actions = {
  actionLoadListPosts: (context, info) => {
    console.log(info);
    console.log(context);
    axios
      .get(`${baseApiURL}/blog/${info.page}/${info.recordsPerPage}`, {
        headers: {
          Authorization: `System b24b3b0e-9257-466b-949e-8c0c3841eeb5`,
        },
      })
      .then((response) => {
        info.showLoader = false;
        state.posts = response.data.posts;
        return true;
      });
  },
  actionTotalPosts: (context) => {
    console.log(context);
    axios
      .get(`${baseApiURL}/blog/post`, {
        headers: {
          Authorization: `System b24b3b0e-9257-466b-949e-8c0c3841eeb5`,
        },
      })
      .then((response) => {
        state.totalPosts = response.data.total;
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
