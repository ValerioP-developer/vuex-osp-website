<template>
  <div class="home">
    <!--
    <img alt="Vue logo" src="../assets/logo.png">
    <HelloWorld msg="Welcome to Your Vue.js App" />
    <h2> TOTAL PRODUCT:{{ getTotalProducts }} </h2>
    <h2> TOTAL posts:{{ getTotalPosts }} </h2>
    <button @click="click()">Click</button>-->

    <TopContainer> </TopContainer>
    <div class="container">
      <div class="row">
        <div class="col-6">
          <p style="font-size:18px"> Let's check the product of the day
            <img style="float: right;"
              src="https://media.gq-magazine.co.uk/photos/63495c79cda0e0ecb3900192/16:9/w_1920%2Cc_limit/owh_HP.jpg"
              alt="test">
          </p>
        </div>
        <div class="col-6" style="margin-top:10%">
          <p style="font-size:18px"> Let's check the product of the day
            <img style="float: center;"
              src="https://media.gq-magazine.co.uk/photos/63495c79cda0e0ecb3900192/16:9/w_1920%2Cc_limit/owh_HP.jpg"
              alt="test">
          </p>
        </div>
      </div>
      <div class="row">
        <div class="col-6">
          <img style="width: 60%;"
            src="https://images.freeimages.com/images/large-previews/2e5/fireplace-with-fire-1639928.jpg" alt="test">
          <a href="test">Read more ...</a>
        </div>
        <div class="col-6" style="margin-top:10%">
          This is a template for a simple marketing or informational website. It includes a large callout called a
          jumbotron and three supporting pieces of content. Use it as a starting point to create something more unique.
        </div>
      </div>
      <div class="row">
        <div class="col-6" style="padding-left: 20%;padding-top: 10%;">
          <img style="width: 60%;" src="http://clipart-library.com/images/qiBAkbnoT.png" alt="test">
        </div>
        <div class="col-6" style="margin-top:10%">
          <a href="test"> My articleee jumbotron and three supporting pieces of content. Use it as a starting </a>
        </div>
      </div>
      <div class="row" style="padding-top: 10%;">
        <div class="col-3" style="width: 80%;">
          <img src="https://media.gq-magazine.co.uk/photos/63495c79cda0e0ecb3900192/16:9/w_1920%2Cc_limit/owh_HP.jpg"
            alt="test">
        </div>
        <div class="col-3" style="width: 80%;">
          <img src="https://media.gq-magazine.co.uk/photos/63495c79cda0e0ecb3900192/16:9/w_1920%2Cc_limit/owh_HP.jpg"
            alt="test">
        </div>
        <div class="col-3" style="width: 80%;">
          <img src="https://media.gq-magazine.co.uk/photos/63495c79cda0e0ecb3900192/16:9/w_1920%2Cc_limit/owh_HP.jpg"
            alt="test">
        </div>
        <div class="col-3" style="width: 80%;">
          <img src="https://media.gq-magazine.co.uk/photos/63495c79cda0e0ecb3900192/16:9/w_1920%2Cc_limit/owh_HP.jpg"
            alt="test">
        </div>
      </div>
      <footer id="sticky-footer" class="flex-shrink-0 py-4 bg-dark text-white-50">
        <div class="container text-center">
          <small>Copyright &copy; Your Website</small>
        </div>
      </footer>
    </div>

  </div>
</template>
<script src="https://js.stripe.com/v3/"></script>   
<script>
// @ is an alias to /src
import HelloWorld from '@/components/HelloWorld.vue'
import StripeCheckout from '@/components/StripeCheckout.vue'
import TopContainer from '@/components/TopContainer.vue'
import {mapGetters ,mapActions} from 'vuex';
export default {
  name: 'HomeView',
  components: {
    HelloWorld,
    TopContainer
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
<style>
.jumbotron {
  background: url('https://www.webnode.com/blog/wp-content/uploads/2019/04/blog2.png') no-repeat center center;
  background-size: cover;
  padding-top: 10%;
  padding-bottom: 10%;
}

p,
h1 {
  color: black;
}
</style>