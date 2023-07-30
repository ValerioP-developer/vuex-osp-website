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
                    <img style="width: 100%;"
                        src="https://images.freeimages.com/images/large-previews/2e5/fireplace-with-fire-1639928.jpg"
                        alt="test">
                </div>
                <div class="col-md-6">
                    <p>
                        {{ selectedProduct.description }}
                    </p>
                </div>
            </div>
            <div class="row">
                <div class="col-md-6">
                </div>
                <div class="col-md-3 col-sm-6 col-6">
                    <button type="button" v-on:click="counter += 1" class="btn btn-warning">+</button>
                    <span class="btn"> {{ counter }}</span>
                    <button type="button" v-on:click="counter -= 1" class="btn btn-warning">-</button>
                </div>
                <div class="col-md-3  col-sm-6 col-6">
                    <StripeCheckout :item=selectedProduct :quantity=counter></StripeCheckout>
                </div>
            </div>
            <div class="row">
                <a href="#" @click="back"> <img style="transform:rotate(180deg);width: 10%;float: left;margin-top: 5%;"
                        src="http://clipart-library.com/images/qiBAkbnoT.png" alt="test"></a>
            </div>

            <div class="row " style="margin-top:10%">
                <div class="col-4" style="background-color: red;">
                    <img class="img-fluid " style="width: 60%;" :src="getImgBottom1" alt="test">

                </div>
                <div class="col-4" style="background-color: red;">
                    <img class="img-fluid" style="width: 60%;" :src="getImgBottom2" alt="test">

                </div>
                <div class="col-4" style="background-color: red;">
                    <img class="img-fluid" style="width: 60%;" :src="getImgBottom3" alt="test">
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

