import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

  const state= {
    username: 'dddd',
    password: '',
    info:[{address:'elem1'},
          {cellphone:'3330333'},
          {employer:true}
          ]
  };
  const getters= {
    getUsername:state => {
        return state.username
    },
    getInfo:state=>{
        return state.info ;
    }
  };
  const mutations= {


  };
  const actions= {
    actionProfile : (context,profile) => {
      setTimeout(()=>{
          console.log("store->index::action::"+profile.username);
          console.log(context);
      },2000);
  }
  
  };
   
export default {
    namespaced : true,
    state,
    actions,
    mutations,
    getters
}