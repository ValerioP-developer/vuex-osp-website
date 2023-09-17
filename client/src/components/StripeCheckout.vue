<template>
  <div>
    <stripe-checkout ref="checkoutRef" mode="payment" :pk="publishableKey" :line-items="lineItems"
      :success-url="successURL" :cancel-url="cancelURL" @loading="v => loading = v" />

    <div class="btn-group" role="group" aria-label="Basic example">
      <button type="button" class="btn btn-secondary" v-on:click="counter -= 1">-</button>
      <span class="btn"> {{ counter }}</span>
      <button type="button" class="btn btn-secondary" v-on:click="counter += 1">+</button>
      <button @click="submit" class="btn btn-danger">Buy</button>
    </div>
  </div>
</template>
<script>
import { StripeCheckout } from '@vue-stripe/vue-stripe';
import { mapActions } from 'vuex';
export default {
  components: {
    StripeCheckout,
  },
  data() {
    this.publishableKey = "pk_test_51IqiLvAwvgPZiPtRnGACXbozCUC9pqyOjCn89fTkD08m88i5TIm8CSZLWjE1BftgHGXEJUdKdhwpylRnjIYrErJO0018yrJS9t";
    return {
      loading: false,
      counter: 1,
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
    }
    /*,
    quantity: {
      default: 0,
      type: Number
    }*/
  }
    /*,
    computed:{
    ...mapGetters({
        'getLineItems' : 'product/getLineItems' ,
    }) 
    }*/,
  methods: {
    //FOR TEST PURPOSE ONLY 
    ...mapActions({ 'actionPay': 'stripe/actionPay' }),
    ...mapActions({ 'createToken': 'stripe/createToken' }),
    ...mapActions({ 'createSubscription': 'stripe/createSubscription' }),
    ...mapActions({ 'deleteSubscription': 'stripe/deleteSubscription' }),
    //>>>> ############ NOTE: NEED TO ADD MAP ACTION FOR UPDATE SUBSCRIPTION FUNCTIONALITY #########
    submit() {
      //alert(this.counter);
      //VERSION 1 ********* SAFETY CHECKOUT WITH STRIPE SESSION CUSTOMER ********
      //INITIALIZE ITEM WITH SELECTED PRODUCT VALUE
      this.lineItems[0].price = this.item.price;
      alert(this.lineItems[0].price);
      this.lineItems[0].quantity = this.counter;
      this.lineItems[0].name = this.item.name;
      this.actionPay(this.lineItems[0]);
      /* OTHERS FUNCTIONALITIES */
      //this.createToken();
      //this.createSubscription();
      //this.deleteSubscription();
      //*************************************************************** */

      /*
      //VERSION 2 ********* FAST CHECKOUT withOUR STRIPE SESSION CUSTOMER ********
       //You will be redirected to Stripe's secure checkout page
       console.log("PRICE FROM item passed from outside component  " + this.item.price);
       //Set localItems price
       this.lineItems[0].price = this.item.price;
       console.log(" ***** *** passed quantity" + this.quantity);
       this.lineItems[0].quantity = this.quantity;
       //console.log(" **** *** lineItems " + this.lineItems[0].quantity);
       //console.log("After setting item price " + this.lineItems[0].price);
       this.$cookies.set("quantity", this.quantity);
       alert("test -> cookie browser" + this.$cookies.get("quantity"));
       this.$refs.checkoutRef.redirectToCheckout();
       */
    },
  },

};
</script>