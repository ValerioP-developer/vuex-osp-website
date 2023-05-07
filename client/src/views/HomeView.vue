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
      <div class="row common-margin">
        <div class="col-md-6 col-sm-12 row1-col1">
          <p> <span class="txt-row1">Let's check the product of the day</span>
            <img id="img-row1-col1"
              src="https://media.gq-magazine.co.uk/photos/63495c79cda0e0ecb3900192/16:9/w_1920%2Cc_limit/owh_HP.jpg"
              alt="test">
          </p>
        </div>
        <div class="col-md-6 col-sm-12 row1-col2">
          <p><span class="txt-row1">Let's check the product of the day</span>
            <img id="img-row1-col2"
              src="https://media.gq-magazine.co.uk/photos/63495c79cda0e0ecb3900192/16:9/w_1920%2Cc_limit/owh_HP.jpg"
              alt="test">
          </p>
        </div>
      </div> <!-- end 1 row #################################### -->
      <div class="row">
        <div class="col-md-6">
          <p>
            <img id="img-row2-col1"
              src="https://images.freeimages.com/images/large-previews/2e5/fireplace-with-fire-1639928.jpg" alt="test">
          </p>
        </div>
        <div class="col-md-6  row2-col2">
          <p class="text-center">
            <span> TITLE BLA BLA BLA</span><br><br>
            This is a template for a simple marketing or informational website. It includes a large callout called a
            jumbotron and three supporting pieces of content. Use it as a starting point to create something more
            unique.
            jumbotron and three supporting pieces of content. Use it as a starting point to create something more
            unique.
            jumbotron and three supporting pieces of content. Use it as a starting point to create something more
            unique.
          </p>
        </div>
      </div> <!-- end 2 row #################################### -->
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

@media (max-width: 767px) {

  /*################################## ROW 1 ###################################*/
  #img-row1-col1 {
    float: center;
  }

  #img-row1-col2 {
    float: center;
  }

  #img-row1-col1,
  #img-row1-col2 {
    margin-top: 4%;
    width: 50%;
  }

  .row1-col1 {
    margin-top: 0%;
  }

  .row1-col2 {
    margin-top: 5%;
  }

  /*################################## ROW 2 ###################################*/
  #img-row2-col1 {
    width: 80%;
    margin-top: 10%;
  }

  .row2-col2 {
    margin-top: 5%;
  }
}

@media (min-width: 767px) {

  /*################################## ROW 1 ###################################*/
  .common-margin {
    margin-top: 10%;
  }

  #img-row1-col1 {
    float: left;
  }

  #img-row1-col2 {
    float: right;
  }

  .row1-col1 {
    margin-top: 0%;
  }

  .row1-col2 {
    margin-top: 15%;
  }

  #img-row1-col1,
  #img-row1-col2 {
    width: 40%;
  }

  /*################################## ROW 2 ###################################*/
  #img-row2-col1 {
    width: 80%;
    margin-left: 0;
    margin-top: 0
  }

  .row2-col2 {
    margin-top: 15%;
  }
}
</style>