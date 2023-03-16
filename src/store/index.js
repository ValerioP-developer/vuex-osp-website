import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)
import profile from './profile'

export default new Vuex.Store({
  
  modules: {
    profile
  }
})