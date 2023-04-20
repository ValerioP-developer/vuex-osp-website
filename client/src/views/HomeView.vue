<template>
  <div class="home">
    <img alt="Vue logo" src="../assets/logo.png">
    <HelloWorld msg="Welcome to Your Vue.js App" />
    <h2> TOTAL PRODUCT:{{ getTotalProducts }} </h2>
    <h2> TOTAL posts:{{ getTotalPosts }} </h2>
    <!--<button @click="click()">Click</button>-->
  </div>
</template>
<script src="https://js.stripe.com/v3/"></script>   
<script>
// @ is an alias to /src
import HelloWorld from '@/components/HelloWorld.vue'
import StripeCheckout from '@/components/StripeCheckout.vue'
import {mapGetters ,mapActions} from 'vuex';
export default {
  name: 'HomeView',
  components: {
    HelloWorld,
  },
  data () {
    return {
     }
  },
  computed:{
    ...mapGetters({
       'getTotalProducts' : 'product/getTotalProducts' ,
       'getTotalPosts' : 'blog/getTotalPosts' ,
    }) 
  },
  created () {
     /*CURRENTLY THIS ACTION LOAD FROM THE DATABASE THE TOTAL NUMBER OF PRODUCTS 
      THIS INFO IS MANDATORY FOR THE PAGINATION FUNCTIONALITY 
     */
     this.actionTotalProducts();
     this.actionTotalPosts();
  },
  methods: {
      //ACTIONS
      ...mapActions({'actionTotalProducts': 'product/actionTotalProducts'}),
      ...mapActions({ 'actionTotalPosts': 'blog/actionTotalPosts' }),
          /*
          ...mapActions({'actionPay': 'product/actionPay'}),
          ...mapActions({'actionPayClick': 'product/actionPayClick'}),
          click(){
            this.actionPayClick();
          }
          */
  }
}
</script>