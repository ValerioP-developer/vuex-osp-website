<template>
    <div>
        <TopContainer> </TopContainer>
        <div class="container">

            <Loader :loading="showLoader" />
            <div class="row">
                <div class="col-md-6" v-for="item in getPosts" :key="item.id">
                    <div class="card">
                        <img src="../assets/watch.jpg" alt="Denim Jeans" style="width:100%">
                        <h3>{{ item.title }} <span style="font-size:18px;"> ({{ item.date }}) </span>
                        </h3>
                        <p>
                            {{ item.description }}
                            <a href="#" v-on:click="updateCurrentItem(item)">More info ...</a>
                        </p>
                    </div>
                </div>
            </div><!--
        <ul class="flex-container">
            <li v-for="item in getPosts" :key="item.id" class="flex-item">
                <div class="card">
                    <img src="../assets/watch.jpg" alt="Denim Jeans" style="width:100%">
                    <h3>{{ item.title }}</h3>
                    <p>Post Description</p>
                    <p> Post Date </p>
                    <p>
                        Content : this is a content bla blaa blaaaa
                        flkasjlfajs jklasdjflkj sjalksfjdl ksalajsf
                        sjalkfs klasdjflkj alksfjlk lkasjfl asdlk
                    </p>
                </div>
            </li>
           <li v-if="listItems.length === 0" class="flex-item center">No Record Found</li>
        <li v-if="listItems.length === 0" class="flex-item center">No Record Found</li> 
        </ul>-->
            <Pagination v-if="listItems" :total-pages="totalPages" :per-page="recordsPerPage" :current-page="page"
                @pagechanged="onPageChange" />
        </div>
    </div>
</template>
  
<script>
/* IMPORT COMPONENTS AND LIBRARIES */
import { mapGetters, mapActions, mapMutations } from 'vuex';
import Pagination from '@/components/PaginationView.vue'
import Loader from '@/components/LoaderView.vue'
import TopContainer from '@/components/TopContainer.vue'
export default {
    components: {
        Pagination,
        Loader,
        TopContainer
    },
    data() {
        return {
            number: 0,
            selectedItem: null,
            showLoader: false,
            listItems: [],
            page: 1,
            totalPages: 0,
            totalRecords: 0,
            recordsPerPage: 2,
            enterpageno: '',
        }
    },
    computed: {
        ...mapGetters({
            'getInfo': 'profile/getInfo',
            'getPosts': 'blog/getPosts',
            'getTotalPosts': 'blog/getTotalPosts'
        })
    },
    created() {
        this.loadListItem()
    },
    methods: {
        ...mapActions({ 'actionLoadListPosts': 'blog/actionLoadListPosts' }),
        ...mapActions({ 'actionTotalPosts': 'blog/actionTotalPosts' }),
        ...mapMutations({ 'setCurrentPost': 'blog/setCurrentPost' }),
        loadListItem() {
            this.totalRecords = this.getTotalPosts;
            console.log("total POSTS -->> " + this.totalRecords);
            this.totalPages = Math.ceil(this.totalRecords / this.recordsPerPage);
            console.log("total page -->> " + this.totalPages);
            this.showLoader = true
            //console.log(this.recordsPerPage)
            if (this.actionLoadListPosts({ page: this.page, recordsPerPage: this.recordsPerPage, showLoader: this.showLoader })) {
                this.showLoader = false;
            }
        },
        onPageChange(page) {
            console.log("onPageChange::" + page)
            //When I change the page I get the next posts from the
            this.page = page
            this.loadListItem()
        },
        onChangeRecordsPerPage() {
            this.loadListItem()
        },
        gotoPage() {
            if (!isNaN(parseInt(this.enterpageno))) {
                this.page = parseInt(this.enterpageno);
                this.loadListItem();
            }
        },
        updateCurrentItem(item) {
            alert(item.title);
            this.setCurrentPost(item);
            this.$router.push('/selected-post')
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
            padding-top: random($limit: 20);
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
</style>
  