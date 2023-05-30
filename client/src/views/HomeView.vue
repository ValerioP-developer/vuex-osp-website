<template>
  <div class="home">
    <!--
    <img alt="Vue logo" src="../assets/logo.png">
    <HelloWorld msg="Welcome to Your Vue.js App" />
    <h2> TOTAL PRODUCT:{{ getTotalProducts }} </h2>
    <h2> TOTAL posts:{{ getTotalPosts }} </h2>
    <button @click="click()">Click</button>-->

    <TopContainer :route=route> </TopContainer>
    <div class="container">
      <div class="row common-margin">
        <div class="col-md-6 col-sm-12 row1-col1">
          <h1> <span class="txt-row1">{{ getTxtRow1Col1 }}<br> </span></h1>
          <!--<img id="img-row1-col1" :src="getImgRow1Col1" alt="test">-->
          <!-- <a href="https://www.amazon.com/dp/B09CYL1C2X?pd_rd_i=B09CYL1C2X&pd_rd_w=Kxeri&content-id=amzn1.sym.69ca2181-e709-4fb6-8519-6d92fc9fe017&pf_rd_p=69ca2181-e709-4fb6-8519-6d92fc9fe017&pf_rd_r=DYKESRT0GASYEMYE2X0P&pd_rd_wg=QDHSd&pd_rd_r=a3d1a57c-cd6c-47c3-b9d1-d34269806d70&s=electronics&sp_csd=d2lkZ2V0TmFtZT1zcF9kZXRhaWxfdGhlbWF0aWM&smid=A1I6K2WI6BM9L1&spLa=ZW5jcnlwdGVkUXVhbGlmaWVyPUFPQ0I2Sk0zR0k1Q1kmZW5jcnlwdGVkSWQ9QTA3MjQ1NzRRRkM4UkVaTTdLRUkmZW5jcnlwdGVkQWRJZD1BMDA3Mjc5NzJDRjRZRzBCVlpCMzkmd2lkZ2V0TmFtZT1zcF9kZXRhaWxfdGhlbWF0aWMmYWN0aW9uPWNsaWNrUmVkaXJlY3QmZG9Ob3RMb2dDbGljaz10cnVl&th=1&linkCode=li2&tag=pvl1-20&linkId=7407c9007163846dc698ce868451e2db&language=en_US&ref_=as_li_ss_il"
              target="_blank"><img border="0"
                src="//ws-na.amazon-adsystem.com/widgets/q?_encoding=UTF8&ASIN=B09CYL1C2X&Format=_SL160_&ID=AsinImage&MarketPlace=US&ServiceVersion=20070822&WS=1&tag=pvl1-20&language=en_US"></a>
           -->
          <p>
            A human being with several years of work experience in the IT, E-commerce, etc ...
          </p>
        </div>
        <div class="col-md-6 col-sm-12 row1-col2">

          <span class="txt-row1" style="font-size: 25px;color: orange;">{{ getTxtRow1Col2 }}</span>
          <img id="img-row1-col2" :src="getImgRow1Col2" alt="test">

        </div>
      </div> <!-- end 1 row #################################### -->
      <div class="row">
        <div class="col-md-6">
          <p>
            <img id="img-row2-col1" :src="getImgRow2Col1" alt="test">
          </p>
        </div>
        <div class="col-md-6  row2-col2">

          <h2><span> {{ getTitleRow2Col2 }}</span><br><br></h2>
          <p class="text-center"> <span id="txt-row3-col2"> {{ getTxtRow2Col2 }}</span>
          </p>
        </div>
      </div> <!-- end 2 row #################################### -->
      <div class="row">
        <div class="col-md-3 col-sm-12">
          <p>
            <img id="img-row3-col1" :src="getImgRow3Col1" alt="test">
          </p>
        </div>
        <div class="col-md-9 col-sm-12">
          <!--<h3 id="txt-row3-col2"> {{ geTxtRow3Col2 }}</h3></h3>-->
          <h3 id="txt-row3-col2"> Let's check it out these deals!Top niche selection always different.
            Something looks interesting and you need it? Search and selection already done...Trust it and save your time
            :)
            <router-link to="/products">GO</router-link> !
          </h3>
        </div>
      </div> <!-- #################################### end 3 row #################################### -->

    </div>
    <BottomContainer></BottomContainer>
  </div>
</template>
<script src="https://js.stripe.com/v3/"></script>   
<script>
// @ is an alias to /src
import HelloWorld from '@/components/HelloWorld.vue'
import StripeCheckout from '@/components/StripeCheckout.vue'
import TopContainer from '@/components/TopContainer.vue'
import {mapGetters ,mapActions} from 'vuex';
import BottomContainer from '@/components/BottomContainer.vue'
export default {
  name: 'HomeView',
  components: {
    HelloWorld,
    TopContainer,
    BottomContainer
  },
  data () {
    return {
      route: 'home'
     }
  },
  computed:{
    ...mapGetters({
       'getTotalProducts' : 'product/getTotalProducts' ,
       'getTotalPosts' : 'blog/getTotalPosts' ,
       'getTxtRow1Col1' : 'home/getTxtRow1Col1' ,
       'getTxtRow1Col2' : 'home/getTxtRow1Col2' ,
       'getTitleRow2Col2' : 'home/getTitleRow2Col2' ,
       'getTxtRow2Col2' : 'home/getTxtRow2Col2' ,
       'geTxtRow3Col2' : 'home/geTxtRow3Col2' ,
       'getImgRow1Col1':'home/getImgRow1Col1' ,
       'getImgRow1Col2':'home/getImgRow1Col2' ,
       'getImgRow2Col1':'home/getImgRow2Col1',
       'getImgRow3Col1' :'home/getImgRow3Col1'
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

  /*################################## ROW 3 ###################################*/
  #img-row3-col1 {
    width: 40%;
    float: center;
    transform: rotate(90deg);
    margin-top: 5%;
  }

  #txt-row3-col2 {
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
    float: center;
    margin-top: 5%;
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

  /*################################## ROW 3 ###################################*/
  #img-row3-col1 {
    width: 40%;
    float: left;
    margin-top: 30%;
  }

  #txt-row3-col2 {
    margin-top: 15%;
  }
}
</style>