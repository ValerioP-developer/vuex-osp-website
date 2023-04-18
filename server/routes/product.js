//EXPRESS
const express = require("express");
const router = express.Router();
const delearController = require("../controllers/product");
//delearController.loadIndexPage
router.get("/:page/:size", delearController.loadIndexPage);
//delearController.totalProduct
router.get("/total", delearController.totalProduct);
//delearController.createProduct
router.post("/product", delearController.createProduct);
//delearController.productByName
router.get("/selected/:name", delearController.productByName);
//EXPORTS
module.exports = router;
