const express = require("express");
const { profile } =require("../../controllers");

const router = express.Router();

/**
 * Route: GET /products/helloworld
 * Description: test
 * This endpoint test
 */
router.post(
  "/add",
  profile.addUser
);


module.exports = router;