const config = require("config");
//const createError = require("http-errors");
//const stripeInstance = require("stripe");
const logger = require("../../utils/logger");
const Product = require('../models/product');


/**
 * THIS IS A TEST METHOD THAT I USED JUST TO UNDERSTAND THE STRUCTURE OF THE PROJECT
 *  /v1/products/helloworld/:
 */
const getHelloWorld = async  => {
  try {
     // Log successful subscription deletion
    logger.info("Hello world:", {
      message: "Hello world"
    });

    return {
      message: "Hello world"
    };
  } catch (error) {
    // Log the error
    logger.error("Error Helloworld:", { error: error.message });
    throw error;
  }
};


const createProduct=async (req,res)=> {
  try {
  const product = new Product({
    name:req.body.name,
    description:req.body.description,
    category:req.body.category,
    price:req.body.price,
    quantity:req.body.quantity,
    img:req.body.img,
    amzlink: req.body.amzlink
  });
  await product.save()
  .then(function(product) {
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



module.exports = {

  getHelloWorld
};
