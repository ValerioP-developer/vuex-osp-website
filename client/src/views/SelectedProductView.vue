<template>
    <div>
        <TopContainer> </TopContainer>
        <div class="container">
            <div class="row  justify-content-center">
                <h1> {{ selectedProduct.name }}</h1> <br>
            </div>
        </div>
        <div class="container">
            <div class="row" style="margin-top:5%">
                <div class="col-md-6" style="background-color: red;">
                    <img style="width: 100%;" :src=selectedProduct.img alt="test">
                    <StripeCheckout :item=selectedProduct></StripeCheckout>
                </div>
                <div class="col-md-6">
                    <p>
                        {{ selectedProduct.description }}
                    </p>
                </div>
            </div>
            <div class="row " style="margin-top:10%">
                <div class="col-4" style="background-color: red;">
                    <img class="img-fluid " style="width: 60%;" :src="getImgBottom1" alt="test">
                </div>

                <div class="col-8" style="background-color: red;">
                    <div id="carouselExampleControls" class="carousel slide" data-ride="carousel">
                        <div class="carousel-inner">
                            <div class="carousel-item active">
                                <img class="d-block w-100" src="images-loopstudio/desktop/image-hero.jpg" alt="First slide">
                            </div>
                            <div class="carousel-item">
                                <img class="d-block w-100" src="images-loopstudio/desktop/image-hero.jpg"
                                    alt="Second slide">
                            </div>
                            <div class="carousel-item">
                                <img class="d-block w-100" src="images-loopstudio/desktop/image-hero.jpg" alt="Third slide">
                            </div>
                        </div>
                        <a class="carousel-control-prev" href="#carouselExampleControls" role="button" data-slide="prev">
                            <span class="carousel-control-prev-icon" aria-hidden="true"></span>
                            <span class="sr-only">Previous</span>
                        </a>
                        <a class="carousel-control-next" href="#carouselExampleControls" role="button" data-slide="next">
                            <span class="carousel-control-next-icon" aria-hidden="true"></span>
                            <span class="sr-only">Next</span>
                        </a>
                    </div>
                </div>
            </div>

            <div class="d-flex justify-content-center">
                <div>
                    <a href="#" @click="back"> <img style="margin-top: 30%;width:80px;height:80px;" src="images/exit.png"
                            alt="test"></a>
                </div>
            </div>
        </div>
        <BottomContainer></BottomContainer>
    </div>
</template>

<script>
import { mapGetters } from 'vuex';
import StripeCheckout from '@/components/StripeCheckout.vue'
import TopContainer from '@/components/TopContainer.vue'
import BottomContainer from '@/components/BottomContainer.vue'
export default {
    name: 'SelectedProductView',
    components: {
        TopContainer,
        BottomContainer,
        StripeCheckout
    },
    data() {
        return {
            counter: 1,
            //The selected "item" from ProductView is saved in session after the click
            selectedProduct: this.$session.get("item")
        }
    },
    computed: {
        ...mapGetters({
            //'getCurrentProduct': 'product/getCurrentProduct',
            'getImgBottom1': 'product/getImgBottom1',
            'getImgBottom2': 'product/getImgBottom2',
            'getImgBottom3': 'product/getImgBottom3',
        })
    },
    created() {
    },
    methods: {
        back() {
            this.$router.push('/products')
        }
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
.card:hover {
    box-shadow: 8px 8px 5px blue;
    transform: scale(1.1);

}
</style>

