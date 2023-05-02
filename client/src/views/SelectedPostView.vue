<template>
    <div>
        <TopContainer> </TopContainer>
        <!-- {{ getCurrentProduct }}-->
        <div class="container">
            <div class="row  justify-content-center">
                <h1> {{ getCurrentPost }}</h1>
            </div>
        </div>
        <div class="container">
            <div class="row ">
                <div class="col-md-12" style="background-color: red;">
                    blog post
                    <img style="width: 100%;"
                        src="https://images.freeimages.com/images/large-previews/2e5/fireplace-with-fire-1639928.jpg"
                        alt="test">
                </div>
            </div>
        </div>
    </div>
</template>

<script>
import { mapGetters } from 'vuex';
import TopContainer from '@/components/TopContainer.vue'
export default {
    name: 'SelectedProductView',
    components: {
        TopContainer
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

<style lang="scss"  scoped></style>

