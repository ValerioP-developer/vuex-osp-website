const productService = require("../services/products");
const Post = require('../models/post');
const logger = require("../../utils/logger");


/**
 * THIS IS A TEST METHOD THAT I USED JUST TO UNDERSTAND THE STRUCTURE OF THE PROJECT
 * Handle the  '/products/helloworld/:'
 * 
 */
const getHelloWorld = async (req, res) => {
  try {
    console.log("CONTROLLERS-GET-HELLOWORLD")
    //await productService.getHelloWorld();

    // Return success message to the frontend
    res.json({ status: 200, message: "Hello World products" });
  } catch (error) {
    // Handle errors and send an error response
    res.status(500).json({
      status: error.statusCode || 500,
      error: error.message,
    });
  }
};
/*
API(post): http://localhost:3000/post
PRODUCT: { 
          title (String),
          description (String),
          content (String),
          date (String),
        }
*/
const createPost = async (req, res) => {
  try {
  const {title,description,content1,content2,content3,date} = req.body;
  const post = new Post({
    title,description,content1,content2,content3,date
  });
  console.log(post);
  await post.save()
    .then(function (post) {
      logger.info("Post Saved successfully into the DB:", {
        post: post
      });
       res.json({ status: 200, post: post });
    })
  }catch (error) {
    // Handle errors and send an error response
    res.status(500).json({
      status: error.statusCode || 500,
      error: error.message,
    });
  }
};

/*
GET (itemPerPage) POSTS TO DISPLAY BASED ON THE CURRENT PAGE
API(get): http://localhost:3000/:page/:size
          page ->Current Page
          size ->Number of Item to display
*/
const  loadPostsByPage = async (req, res, next) => {
  try {
  var currentPage = req.params.page;
  var itemPerPage = req.params.size;
  var stop = itemPerPage * currentPage;
  var start = stop - itemPerPage;

  await Post.find({}).skip(start).limit(itemPerPage)
    .then(function (posts) {
      logger.info("Group of selected post Request successfully done", {
        posts: posts
      });
      res.json({ status: 200, posts: posts });
      //res.json({ posts: post });
    })
  }catch (error) {
    res.status(500).json({
      status: error.statusCode || 500,
      error: error.message,
    });
  }
};

/*
GET NUMBER OF TOTAL PRODUCT STORED INTO DB
API(get): http://localhost:3000/totalposts
*/
const totalPost = async (req, res, next) => {
  try {
  await Post.count({})
    .then(function (total) {
      res.json({ status: 200, total: total });
    })
  }catch (error) {
    res.status(500).json({
      status: error.statusCode || 500,
      error: error.message,
    });
  }
};

module.exports = {
  getHelloWorld,
  createPost,
  loadPostsByPage,
  totalPost
};
