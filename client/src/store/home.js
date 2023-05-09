import Vue from "vue";
import Vuex from "vuex";

Vue.use(Vuex);

const state = {
  txtRow1Col1: "title row1 col1",
  txtRow1Col2: "title row1 col2",
  txtTitleRow2Col2: "****** title Row2 Col2",
  txtRow2Col2:
    "Row2Col2 ****** This is a template for a simple marketing or informational website. It includes a large callout called a jumbotron and three supporting pieces of content. Use it as a starting point to create something more unique. jumbotron and three supporting pieces of content. Use it as a starting point to create something more unique. jumbotron and three supporting pieces of content. Use it as a starting point to create something more unique.",
  txtRow3Col2: "******************* Title Row 3 Col2",
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
