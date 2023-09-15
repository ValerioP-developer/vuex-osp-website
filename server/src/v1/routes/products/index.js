const express = require("express");
const { products } = require("../../controllers");

//const { stripeValidation } = require("../../middlewares");

const router = express.Router();

/**
 * Route: GET /products/helloworld
 * Description: test
 * This endpoint test
 */
router.get(
  "/helloworld",
 // stripeValidation.validateDeleteSubscription,
 products.getHelloWorld
);

/**
 * Route: GET /products/helloworld
 * Description: test
 * This endpoint test
 */
router.post(
  "/product",
 products.createProduct
);

/**
 * Route: GET /product
 * Description: test
 * This endpoint test
 */
router.get(
  "/:page/:size",products.loadIndexPage
);
/**
 * Route: GET /product
 * Description: test
 * This endpoint test
 */
router.get(
  "/product",
 products.totalProduct
);

module.exports = router;