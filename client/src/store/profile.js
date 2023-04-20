import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

  const state= {
    username: 'dddd',
    password: '',
    info:[{address:'elem1'},
          {cellphone:'33+(303)987-988'},
          {employer:true}
          ],
    projects:[ {id:'id1',
                 name:'name1',
                 description:'descr1'
               },
               {id:'id2',
                 name:'name2',
                 description:'descr2'
               },
               {id:'id3',
                 name:'name3',
                 description:'descr3'
               }
             ]

  };
  const getters= {
    getUsername:state => {
        return state.username
    },
    getInfo:state=>{
        return state.info ;
    },
    getProjects:state=>{
      return state.projects ;
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