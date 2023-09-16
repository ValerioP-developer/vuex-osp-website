import Vue from "vue";
import Vuex from "vuex";
import { baseApiURL } from "@/config/env";
import axios from "axios";

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
  actionLoadListPostsReset: (context) => {
    console.log(context);
    axios
      .get(`${baseApiURL}/blog/${1}/${4}`, {
        headers: {
          Authorization: `System b24b3b0e-9257-466b-949e-8c0c3841eeb5`,
        },
      })
      .then((response) => {
        state.posts = response.data.posts;
        console.log("FIRST TIME@@@@@@  Posts" + state.posts);
        return true;
      });
  },
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
