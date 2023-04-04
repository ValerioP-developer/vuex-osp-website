<template>
  <div id="app">
    <Loader :loading="showLoader" />
    <ul class="flex-container">
      <!--
      <li v-for="item in getProducts" :key="item.id" class="flex-item">
        <h4>Product: {{item.name}}</h4>
      </li> -->
      <li v-for="item in getProducts" :key="item.id" class="flex-item">
          <div class="card" >
            <img src="../assets/watch.jpg"  alt="Denim Jeans" style="width:100%" >
            <h3>{{item.name}}</h3>
            <p class="price">$19.99</p>
            <p>Some text about the jeans. Super slim and comfy lorem ipsum lorem jeansum. Lorem jeamsun denim lorem jeansum.</p>
            <button class="button button1"  style="  border: none;
     color: white;
  padding: 15px 32px;
  text-align: center;
  text-decoration: none;
  display: inline-block;
  font-size: 16px;
  margin: 4px 2px;
  cursor: pointer;background-color: orange;">Add to cart</button>
          </div>
      </li>
      <li v-if="listItems.length === 0" class="flex-item center">No Record Found</li>
      <li v-if="listItems.length === 0" class="flex-item center">No Record Found</li>
    </ul> <!--
    <ul class="showItems" >
      
      <li>
        Go to Page <input type="text" v-model="enterpageno"><button type="button" @click.prevent="gotoPage">Go</button>
      </li>
    </ul>-->
    <Pagination v-if="listItems" :total-pages="totalPages" :per-page="recordsPerPage" :current-page="page" @pagechanged="onPageChange" />
  </div>
</template>

<script>
//import axios from 'axios'
import {mapGetters ,mapActions} from 'vuex';
import Pagination from '@/components/PaginationView.vue'
import Loader from '@/components/LoaderView.vue'
//import { baseApiURL } from '@/config/env'
/* eslint-disable */
export default {
  components: {
    Pagination,
    Loader
  },
  data () {
    return {
      showLoader: false,
      listItems: [],
      page: 1,
      totalPages: 0,
      totalRecords: 0,
      recordsPerPage: 5,
      enterpageno: '',
    }
  },
  computed:{
    ...mapGetters({
        'getInfo' : 'profile/getInfo',
        'getProjects' : 'profile/getProjects',
        'getProducts' : 'product/getProducts'
  }) },
  created () {
    this.loadListItem()
  },
  methods: {
      
      ...mapActions({'actionLoadListProduct': 'product/actionLoadListProduct'}),
      ...mapActions({'actionTotalProducts': 'product/actionTotalProducts'}),
      loadListItem () {
      this.showLoader = true
      console.log(this.recordsPerPage)
      if(this.actionLoadListProduct({page:this.page,recordsPerPage: this.recordsPerPage , showLoader:this.showLoader})){
        this.showLoader = false
      }
      this.actionLoadListProduct();

      this.totalPages = 4 // Calculate total records
      this.totalRecords = 20
      /*
      axios.get(`${baseApiURL}/${this.page}/${this.recordsPerPage}`)
      .then(response => {
          this.showLoader = false
          this.listItems = response.data.products
          console.log('items'+ this.listItems)
          this.totalPages = Math.ceil(response.data.totalPassengers / this.recordsPerPage) // Calculate total records
          this.totalRecords = response.data.totalPassengers
      })*/
    },
    onPageChange (page){
      console.log("onPageChange::"+page)
      //When I change the page I get the next 3 products from the
      this.page = page
      this.loadListItem()
    },
    onChangeRecordsPerPage(){
      this.loadListItem()
    },
    gotoPage () {
      if (!isNaN(parseInt(this.enterpageno))) {
        this.page = parseInt(this.enterpageno)
        this.loadListItem()
      }
    }
  }
}

</script>

<style lang="scss"  scoped>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}
h2 {
  text-align: center;
}
ul li {
  list-style-type: none;
}

@media only screen and (min-width: 768px) {
ul.flex-container {
  background-color: blue;
  padding: 4%;
  margin: 0;
  list-style-type: none;
 // display: -webkit-box;
 // display: -moz-box;
 // display: -ms-flexbox;
 // display: -webkit-flex;
  display: flex;
 // -webkit-flex-flow: row wrap;
 // flex-direction: row wrap;
  flex-wrap: wrap;
  //justify-content: space-around;
  .flex-item {
    background: green;
    width: calc(100% / 4);
    padding: 5px;
    height: auto;
    color: black;
    font-weight: bold;
    text-align: center;
  }
  img {
    display: initial;
    width: 200px;
  }
}

}

@media only screen and (max-width: 767px) {
  ul.flex-container {
  background-color: blue;
  padding: 4%;
  margin: 0;
  list-style-type: none;
  display: flex;
  flex-wrap: wrap;
  //justify-content: space-around;
  .flex-item {
    background: green;
    width: calc(100% / 2);
    padding: 5px;
    height: auto;
    color: black;
    font-weight: bold;
    text-align: center;
  }
  img {
    display: initial;
    width: 200px;
  }
}

}


.showItems {
  display: inline-block;
  margin-left: -35px;
  li {
    list-style-type: none;
    display: inline-block;
    margin-left: 10px;
  }

  /*** CARD ***/ 

  .card {
  box-shadow: 0 4px 8px 0 rgba(0, 0, 0, 0.2);
  max-width: 300px;
  margin: auto;
  padding: 10px;
  text-align: center;
  font-family: arial;
}

.price {
  color: grey;
  font-size: 22px;
}

.card button {
  border: none;
  outline: 0;
  padding: 12px;
  color: white;
  background-color: #000;
  text-align: center;
  cursor: pointer;
  width: 100%;
  font-size: 18px;
}

.card button:hover {
  opacity: 0.7;
}
.button {
  border: none;
  color: white;
  padding: 15px 32px;
  text-align: center;
  text-decoration: none;
  display: inline-block;
  font-size: 16px;
  margin: 4px 2px;
  cursor: pointer;
}
.button1 {background-color: #4CAF50;} /* Green */

}
</style>
