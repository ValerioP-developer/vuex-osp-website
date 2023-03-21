import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)
import profile from './profile'
import product from './product'


export default new Vuex.Store({
  
  modules: {
      profile,
      product
  }
})