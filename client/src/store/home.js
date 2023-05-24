import Vue from "vue";
import Vuex from "vuex";

Vue.use(Vuex);

const state = {
  mainTxt: "Hey you!  Welcome to my blog ! Does it worth your time?",
  mainTxt2:
    "Depends... If you are courius about random exclusive contents. Definetly yes !",
  txtRow1Col1: "Who am I?",
  txtRow1Col2: "Be alway Curious to Explore ! New article",
  txtTitleRow2Col2: "Why this blog? and what you can find?",
  txtRow2Col2:
    "Well it is my hobby - hope you can pick up info and advices to save your time and money :) In addition with interesting topics and products!",
  txtRow3Col2: "******************* Title Row 3 Col2 *********************",
  imgRow1Col1:
    "https://media.gq-magazine.co.uk/photos/63495c79cda0e0ecb3900192/16:9/w_1920%2Cc_limit/owh_HP.jpg",
  imgRow1Col2:
    "https://images.freeimages.com/images/large-previews/2e5/fireplace-with-fire-1639928.jpg",
  imgRow2Col1:
    "https://images.freeimages.com/images/large-previews/2e5/fireplace-with-fire-1639928.jpg",
  imgRow3Col1: "http://clipart-library.com/images/qiBAkbnoT.png",
}; //GETTERS
const getters = {
  //GET TOTAL PRODUCT ARRAY
  getMainText: (state) => {
    return state.mainTxt;
  },
  getMainText2: (state) => {
    return state.mainTxt2;
  },
  getTxtRow1Col1: (state) => {
    return state.txtRow1Col1;
  },
  getTxtRow1Col2: (state) => {
    return state.txtRow1Col2;
  },
  getTitleRow2Col2: (state) => {
    return state.txtTitleRow2Col2;
  },
  getTxtRow2Col2: (state) => {
    return state.txtRow2Col2;
  },
  geTxtRow3Col2: (state) => {
    return state.txtRow3Col2;
  },
  getImgRow1Col1: (state) => {
    return state.imgRow1Col1;
  },
  getImgRow1Col2: (state) => {
    return state.imgRow1Col2;
  },
  getImgRow2Col1: (state) => {
    return state.imgRow2Col1;
  },
  getImgRow3Col1: (state) => {
    return state.imgRow3Col1;
  },
};
//MUTATIONS
const mutations = {
  setTxtRow1Col1(state, newTxt) {
    state.txtRow1Col1 = newTxt;
    console.log("txtRow1Col1 -->    " + state.txtRow1Col1);
  },
  setTxtRow1Col2(state, newTxt) {
    state.txtRow1Col2 = newTxt;
    console.log("txtRow1Col2 -->    " + state.txtRow1Col2);
  },
};
//ACTIONS
const actions = {};

export default {
  namespaced: true,
  state,
  actions,
  mutations,
  getters,
};
