<template>
  <div class="home">
    <img alt="Vue logo" src="../assets/logo.png">
    <HelloWorld msg="Welcome to Your Vue.js App"/>
   <!-- {{getTotalProducts}}-->
  </div>
</template>

<script>
// @ is an alias to /src
import HelloWorld from '@/components/HelloWorld.vue'
import {mapGetters ,mapActions} from 'vuex';

export default {
  name: 'HomeView',
  components: {
    HelloWorld
  },
  data () {
    return {
      totalPages: 0
     }
  },
  computed:{
    ...mapGetters({
        'getTotalProducts' : 'product/getTotalProducts'
    }) 
  },
  created () {
     this.loadTotalProducts()
  },
  methods: {
      ...mapActions({'actionTotalProducts': 'product/actionTotalProducts'}),
      /* Load total number of products for pagination purpose*/
      loadTotalProducts(){
        this.actionTotalProducts();
      //  console.log("this action is from HOME VIEW");
      }
  }


}
</script>
