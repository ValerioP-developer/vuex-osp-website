//EXPRESS
const express = require('express');
const router = express.Router();
const stripeController = require('../controllers/stripe');

//
router.get('/configuration',  stripeController.configuration   );
//
router.get('/checkout-session' , stripeController.checkoutSession );
//
router.post('/create-checkout-session' , stripeController.createCheckoutSession );


module.exports = router;