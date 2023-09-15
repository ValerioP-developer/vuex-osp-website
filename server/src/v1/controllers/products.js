const productService = require("../services/products");
const Product = require('../models/product');
const logger = require("../../utils/logger");

/**
 * THIS IS A TEST METHOD THAT I USED JUST TO UNDERSTAND THE STRUCTURE OF THE PROJECT
 * Handle the  '/products/helloworld/:'
 * 
 */
const getHelloWorld = async (req, res) => {
  try {
    console.log("CONTROLLERS-GET-HELLOWORLD")
    await productService.getHelloWorld();

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
ADD NEW PRODUCT INTO DB

API(post): products/product
PRODUCT: {
          name (String),
          description (String),
          category (String),
          price (String),
          quantity (Number)
        }
*/
const createProduct=async (req,res)=> {
  try {
    const {name,description,category,price,quantity,img,amzlink} =  req.body;
    const product = new Product({name,description,category,price,quantity,img,amzlink})
    
    await product.save()
  .then(function(product) {
      // Log the successful
      logger.info("Product Saved successfully into the DB:", {
        product: product
      });
       res.json({ status: 200, product: product });
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
GET NUMBER OF TOTAL PRODUCT STORED INTO DB
API(get): http://localhost:3000/product
*/
const totalProduct= async (req,res,next) => {
  try {
   await Product.count({}).
    then(function(total) {
     // Log the successful
     logger.info("Total product request successfully done:", {
      total: total
    });
    res.json({ status: 200, total: total });
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
GET (itemPerPage) PRODUCTS TO DISPLAY BASED ON THE CURRENT PAGE
API(get): http://localhost:3000/:page/:size
          page ->Current Page
          size ->Number of Item to display
*/
const loadIndexPage= async (req,res,next) => {
    try {
    var currentPage = req.params.page;
    var itemPerPage=req.params.size;
    var stop = itemPerPage * currentPage;
    var start = stop - itemPerPage;
  
    await Product.find({}).skip(start).limit(itemPerPage)
    .then(function(products) {
      logger.info("Group of selected product Request successfully done", {
        products: products
      });
      res.json({ status: 200, products: products });
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
  createProduct,
  totalProduct,
  loadIndexPage
};
