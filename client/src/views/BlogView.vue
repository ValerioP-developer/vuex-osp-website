<template>
    <div>
        <TopContainer :route=route> </TopContainer>
        <div class="container">
            <Loader :loading="showLoader" />
            <div class="row  d-flex justify-content-center" style="margin-top:5%">
                <h1> This is a title</h1>
            </div>
            <div class="row" style="margin-top:5%">
                <div class="col-xs-12 col-sm-6" v-for="item in getPosts" :key="item.id">
                    <div class="card">
                        <a class="img-card">
                            <img
                                src="https://1.bp.blogspot.com/-Bii3S69BdjQ/VtdOpIi4aoI/AAAAAAAABlk/F0z23Yr59f0/s640/cover.jpg" />
                        </a>
                        <div class="card-content">
                            <h4 class="card-title">
                                <a href="http://www.fostrap.com/2016/03/bootstrap-3-carousel-fade-effect.html">
                                    {{ item.title }} <span style="font-size:18px;"> ({{ item.date }}) </span>
                                </a>
                            </h4>
                            <p class="description-content">
                                {{ item.description }} </p>
                        </div>
                        <div class="card-read-more">
                            <a href="#" class="btn btn-link btn-block" v-on:click="updateCurrentItem(item)">
                                Read More
                            </a>
                        </div>
                    </div>
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
import TopContainer from '@/components/TopContainer.vue'
import BottomContainer from '@/components/BottomContainer.vue'
export default {
    components: {
        Pagination,
        Loader,
        TopContainer,
        BottomContainer
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
            route: 'blog'
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
        this.totalRecords = this.$session.get("totalRecordsPost");
        this.page = this.$session.get("pagePost");
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
            //SAVE IN SESSION
            this.$session.set("totalRecordsPost", this.totalRecords);
            this.$session.set("pagePost", this.page);
            //this.$session.set("recordsPerPage", this.recordsPerPage);
            //this.$session.set("totalPages", this.totalPages);
            //--------------------------------------
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

/*
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

*/

.card {
    display: block;
    margin-bottom: 20px;
    line-height: 1.42857143;
    background-color: #fff;
    border-radius: 2px;
    box-shadow: 0 2px 5px 0 rgba(0, 0, 0, 0.16), 0 2px 10px 0 rgba(0, 0, 0, 0.12);
    transition: box-shadow .25s;
}

.card:hover {
    box-shadow: 0 8px 17px 0 rgba(0, 0, 0, 0.2), 0 6px 20px 0 rgba(0, 0, 0, 0.19);
}

.img-card {
    width: 100%;
    height: 200px;
    border-top-left-radius: 2px;
    border-top-right-radius: 2px;
    display: block;
    overflow: hidden;
}

.img-card img {
    width: 100%;
    height: 200px;
    object-fit: cover;
    transition: all .25s ease;
}

.card-content {
    padding: 15px;
    text-align: left;
}

.card-title {
    margin-top: 0px;
    font-weight: 700;
    font-size: 1.65em;
}

.card-title a {
    color: #000;
    text-decoration: none !important;
}

.card-read-more {
    border-top: 1px solid #D4D4D4;
}

.card-read-more a {
    text-decoration: none !important;
    padding: 10px;
    font-weight: 600;
    text-transform: uppercase
}
</style>
  