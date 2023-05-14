<template>
  <div>
    <stripe-checkout ref="checkoutRef" mode="payment" :pk="publishableKey" :line-items="lineItems"
      :success-url="successURL" :cancel-url="cancelURL" @loading="v => loading = v" />
    <button @click="submit" class="btn btn-primary">Pay now!</button>
  </div>
</template>
<script>
import { StripeCheckout } from '@vue-stripe/vue-stripe';
export default {
  components: {
    StripeCheckout,
  },
  data() {
    this.publishableKey = "pk_test_51IqiLvAwvgPZiPtRnGACXbozCUC9pqyOjCn89fTkD08m88i5TIm8CSZLWjE1BftgHGXEJUdKdhwpylRnjIYrErJO0018yrJS9t";
    return {
      loading: false,
      lineItems: [
        {
          price: '',
          quantity: 1,
        },
      ],
      successURL: 'http://localhost:8080/products',
      cancelURL: 'http://localhost:8080/products',
    };
  },
  props: {
    // THIS PROPERTY WILL BE INITIALIZED WITH A PRODUCT FROM AN EXTERNAL COMPONENT
    // (IN THIS CASE ITEM IS AN INJECTED PRODUCT)
    item: {
      type: Object,
      default() {
        return {}
      }
    },
    quantity: {
      default: 0,
      type: Number
    }
  }
    /*,
    computed:{
    ...mapGetters({
        'getLineItems' : 'product/getLineItems' ,
    }) 
    }*/,
  methods: {
    submit() {
      //You will be redirected to Stripe's secure checkout page
      console.log("PRICE FROM item passed from outside component  " + this.item.price);
      //Set localItems price
      this.lineItems[0].price = this.item.price;
      console.log(" ***** *** passed quantity" + this.quantity);
      this.lineItems[0].quantity = this.quantity;
      //console.log(" **** *** lineItems " + this.lineItems[0].quantity);
      //console.log("After setting item price " + this.lineItems[0].price);
      this.$refs.checkoutRef.redirectToCheckout();
    },
  },

};
</script>