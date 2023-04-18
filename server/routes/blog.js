//EXPRESS
const express = require("express");
const router = express.Router();
const blogController = require("../controllers/blog");
//blogController.loadPostsByPage
router.get("/posts/:page/:size", blogController.loadPostsByPage);
//blogController.createPost
router.post("/post", blogController.createPost);
//blogController.totalPost
router.get("/totalposts", blogController.totalPost);
//EXPORTS
module.exports = router;
