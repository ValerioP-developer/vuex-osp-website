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
    console.log(info);
    console.log(context);
    console.log("action list posts in bloggg " + info.recordsPerPage);
    axios
      .get(`${baseApiURL}/posts/${info.page}/${info.recordsPerPage}`)
      .then((response) => {
        info.showLoader = false;
        console.log("response posts " + response);
        //listItems = response.data.products
        state.posts = response.data.posts;
        console.log("posts iside actionloadPost " + state.posts[0].title);
        return true;
      });
  },
  actionTotalPosts: (context) => {
    console.log(context);
    axios.get(`${baseApiURL}/totalposts`).then((response) => {
      state.totalPosts = response.data;
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
