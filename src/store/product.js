import Vue from 'vue'
import Vuex from 'vuex'
import { baseApiURL } from '@/config/env'
import axios from 'axios'

Vue.use(Vuex)

  const state= {
    /*
    username: 'dddd',
    password: '',
    info:[{address:'elem1'},
          {cellphone:'33+(303)987-988'},
          {employer:true}
          ],*/
    listItems:[
      {}
    ],
    product: {    
              name:'',
              description:'',
              category:'' ,
              picture:'' ,
              quantity:'' ,
    },
    products:[{
      /*
      p1  : {    
        name:'pr1',
        description:'descr1',
        category:'cat1' ,
        picture:'pic1' ,
        quantity:'qua1' ,
      },
      p2  : {    
        name:'pr2',
        description:'descr2',
        category:'cat2' ,
        picture:'pic2' ,
        quantity:'qua2' ,
      },
      p3  : {    
        name:'pr3',
        description:'descr3',
        category:'car3' ,
        picture:'pic3' ,
        quantity:'qua3',
      },
      p4  : {    
        name:'pr4',
        description:'descr3',
        category:'car3' ,
        picture:'pic3' ,
        quantity:'qua3',
      },
      p5  : {    
        name:'pr5',
        description:'descr3',
        category:'car3' ,
        picture:'pic3' ,
        quantity:'qua3',
      }, 
      p6  : {    
        name:'pr6',
        description:'descr3',
        category:'car3' ,
        picture:'pic3' ,
        quantity:'qua3',
      }*/
    }]

  };
  const getters= {
    getProducts:state=>{
      return state.products ;
    }
  };
  const mutations= {
      setProduct :(state,other) =>{
        state.product= other;
      //  console.log( state.product);
      },
  };
  const actions= {
    actionLoadListProduct : (context,info) => {
      console.log(info)
      console.log(context)
      //this.showLoader = true
      axios.get(`${baseApiURL}/${info.page}/${info.recordsPerPage}`)
      .then(response => {
          info.showLoader = false
          //listItems = response.data.products
          state.products=response.data.products;
          console.log(state.products)
          return true;
         // console.log("page-->  "+info.page+"size "+info.size+"showLoader   "+info.showLoader)
          //this.totalPages = Math.ceil(response.data.totalPassengers / this.recordsPerPage) // Calculate total records
          //this.totalRecords = response.data.totalPassengers
      })
    }
  };
   
export default {
    namespaced : true,
    state,
    actions,
    mutations,
    getters
}