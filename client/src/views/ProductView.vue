<template>
  <div>
    <TopContainer :route=route> </TopContainer>
    <div class="container">
      <div class="row  d-flex justify-content-center" style="margin-top:5%">
        <h1> This is a title</h1>
      </div>
      <Loader :loading="showLoader" />
      <div class="row" style="margin-top:5%">
        <div class="col-md-3" v-for="item in getProducts" :key="item.id">
          <a :href="item.amzlink" v-on:click="updateCurrentItem(item)">
            <div class="card">
              <img :src="item.img" alt="Denim Jeans" style="width:100%;">
              <h3>{{ item.name }}</h3>
              <p class="price">$19.99</p>
              <p>{{ item.description }}</p>
              <p>{{ item.quantity }}</p>
            </div>
          </a>
        </div>
      </div>
      <Pagination v-if="listItems" :total-pages="totalPages" :per-page="recordsPerPage" :current-page="page"
        @pagechanged="onPageChange" />
    </div>
    <BottomContainer></BottomContainer>
  </div>
</template>

<script>
/* IMPORT COMPONENTS AND LIBRARIES */
import { mapGetters, mapActions, mapMutations } from 'vuex';
import Pagination from '@/components/PaginationView.vue'
import Loader from '@/components/LoaderView.vue'
//import StripeCheckout from '@/components/StripeCheckout.vue'
import TopContainer from '@/components/TopContainer.vue'
//import Selected from '@/views/SelectedProductView.vue'
import BottomContainer from '@/components/BottomContainer.vue'

export default {
  components: {
    Pagination,
    Loader,
    // StripeCheckout,
    TopContainer,
    BottomContainer
    //Selected
  },
  data() {
    return {
      randomNumber: 0,
      number: 0,
      selectedItem: null,
      showLoader: false,
      listItems: [],
      page: 1,
      totalPages: 0,
      totalRecords: 0,
      recordsPerPage: 4,
      enterpageno: '',
      route: 'product'
    }
  },
  computed: {
    ...mapGetters({
      'getInfo': 'profile/getInfo',
      'getProjects': 'profile/getProjects',
      'getProducts': 'product/getProducts',
      'getTotalProducts': 'product/getTotalProducts',
    })
  },
  created() {
    this.loadListItem()
  },
  methods: {
    //...mapMutations({ 'setLineItems': 'product/setLineItems' }),
    ...mapActions({ 'actionLoadListProduct': 'product/actionLoadListProduct' }),
    ...mapActions({ 'actionTotalProducts': 'product/actionTotalProducts' }),
    ...mapMutations({ 'setCurrentProduct': 'product/setCurrentProduct' }),
    loadListItem() {
      this.totalRecords = this.getTotalProducts;
      console.log("total Product -->> " + this.totalRecords);
      this.totalPages = Math.ceil(this.totalRecords / this.recordsPerPage);
      console.log("total page -->> " + this.totalPages);
      this.showLoader = true
      //console.log(this.recordsPerPage)
      if (this.actionLoadListProduct({ page: this.page, recordsPerPage: this.recordsPerPage, showLoader: this.showLoader })) {
        this.showLoader = false;
      }
    },
    increment() {
      this.number++;
    },
    decrement() {
      this.number--;
    },
    onPageChange(page) {
      console.log("onPageChange::" + page)
      //When I change the page I get the next products from the
      this.page = page
      this.loadListItem()
    },
    onChangeRecordsPerPage() {
      this.loadListItem()
    },
    gotoPage() {
      if (!isNaN(parseInt(this.enterpageno))) {
        this.page = parseInt(this.enterpageno)
        this.loadListItem()
      }
    },
    updateCurrentItem(item) {
      this.setCurrentProduct(item);
      this.$router.push('/selected-product')
    },
    random() {
      this.randomNumber = Math.floor((Math.random() * 4) + 1);
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

  .button1 {
    background-color: #4CAF50;
  }

  /* Green */

}

#btn-add {
  border: none;
  color: white;
  padding: 15px 32px;
  text-align: center;
  text-decoration: none;
  display: inline-block;
  font-size: 16px;
  margin: 4px 2px;
  cursor: pointer;
  background-color: orange;
}

#btn-add:hover {
  background-color: green;
}

.card:hover {
  box-shadow: 8px 8px 5px green;
  transform: scale(1.1);
}
</style>
