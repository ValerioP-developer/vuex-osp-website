const stripeValidation = require("./validations/stripe");
//NEED TO INCLUDE ./validations/products
const auth = require("./auth");

module.exports = {
  stripeValidation,
  auth,
};
