<template>
    <div>

        {{ getCurrentProduct }}
        <!-- Button trigger modal 
        <button type="button" class="btn btn-primary" data-toggle="modal" data-target="#exampleModal">
            Launch demo modal
        </button>
        <div class="modal fade" id="exampleModal" tabindex="-1" role="dialog" aria-labelledby="exampleModalLabel"
            aria-hidden="true">
            <div class="modal-dialog" role="document">
                <div class="modal-content">
                    <div class="modal-header">
                        <h5 class="modal-title" id="exampleModalLabel">Modal title</h5>
                        <button type="button" class="close" data-dismiss="modal" aria-label="Close">
                            <span aria-hidden="true">&times;</span>
                        </button>
                    </div>
                    <div class="modal-body">
                        <p>
                            {{ item.name }}<br>
                            {{ item.quantity }}<br>
                            {{ item.description }}
                        </p>
                    </div>
                    <div class="modal-footer">
                        <button type="button" class="btn btn-secondary" data-dismiss="modal">Close</button>
                        <button type="button" class="btn btn-primary">Save changes</button>
                    </div>
                </div>
            </div>
        </div>
-->
    </div>
</template>

<script>
import { mapGetters } from 'vuex';
export default {
    name: 'SelectedProductView',
    components: {

    },
    data() {
        return {

        }
    },
    computed: {
        ...mapGetters({
            'getCurrentProduct': 'product/getCurrentProduct'
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

