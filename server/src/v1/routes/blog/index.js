const express = require("express");
const { blog } = require("../../controllers");

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
 blog.getHelloWorld
);

router.post(
  "/post",
 // stripeValidation.validateDeleteSubscription,
 blog.createPost
);

router.get(
  "/:page/:size",
 // stripeValidation.validateDeleteSubscription,
 blog.loadPostsByPage
);

router.get(
  "/post",
  blog.totalPost
);
module.exports = router;