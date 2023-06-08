<template>
    <div>
        <TopContainer> </TopContainer>
        <div class="container">
            <div class="row  justify-content-center">
                <!--  <h1> {{ getCurrentPost }}</h1> -->
            </div>
        </div>
        <div class="container">
            <div class="row ">
                <div class="col-md-12" style="background-color: greenyellow;">
                    <!--blog post
                    <img style="width: 100%;"
                        src="https://images.freeimages.com/images/large-previews/2e5/fireplace-with-fire-1639928.jpg"
                        alt="test">-->
                    <div class="card" style="background: transparent;border: none">
                        <h2 class="card-title">{{ getCurrentPost.title }} <span style="font-size:18px;"> ({{
                            getCurrentPost.date }})
                            </span></h2>
                        <img class="card-img-top " style="width: 70%;margin-top: 5%;"
                            src="https://images.freeimages.com/images/large-previews/2e5/fireplace-with-fire-1639928.jpg"
                            alt="Card image cap">
                        <div class="card-body">
                            <p class="text-center card-text" style="margin-left: 15%;margin-right: 15%;">
                                {{ getCurrentPost.content1 }}<br>
                                {{ getCurrentPost.content2 }}<br>
                                {{ getCurrentPost.content3 }}<br>
                                <a href="#" @click="back"> <img
                                        style="transform:rotate(180deg);width: 10%;float: left;margin-top: 5%;"
                                        src="http://clipart-library.com/images/qiBAkbnoT.png" alt="test"></a>
                            </p>
                        </div>
                    </div>
                </div>
            </div>
        </div>
        <BottomContainer></BottomContainer>
    </div>
</template>

<script>
import { mapGetters } from 'vuex';
import TopContainer from '@/components/TopContainer.vue'
import BottomContainer from '@/components/BottomContainer.vue'
export default {
    name: 'SelectedProductView',
    components: {
        TopContainer,
        BottomContainer
    },
    data() {
        return {
            counter: 1,
        }
    },
    computed: {
        ...mapGetters({
            'getCurrentPost': 'blog/getCurrentPost'
        })
    },
    created() {

    },
    methods: {
        back() {
            this.$router.push('/blog')
        }
        /*ACTIONS
        //...mapActions({ 'actionTotalProducts': 'product/actionTotalProducts' }),
        //...mapActions({ 'actionTotalPosts': 'blog/actionTotalPosts' }),
         
        click(){
          this.actionPayClick();
        }
        */
    },
    props: {
        // THIS PROPERTY WILL BE INITIALIZED WITH A PRODUCT FROM AN EXTERNAL COMPONENT
        // (IN THIS CASE ITEM IS AN INJECTED PRODUCT)
        item: {
            type: Object,
            default() {
                return {}
            }
        }
    }
}

</script>

<style lang="scss"  scoped>
.card-title {
    margin-top: 5%;
}
</style>

