const express = require("express");
const stripeRoutes = require("./stripe");
const productRoutes = require("./products");
const blogRoutes = require("./blog");
const profileRoutes = require("./profile");
const { auth } = require("../middlewares");

// Create an instance of an Express Router
const router = express.Router();

/**
 * Define Routes
 *
 * Use the `router.use()` method to mount the sub-routers
 * under specific paths. This allows for modular and
 * organized routing in application.
 */

// Mount the `stripeRoutes` under the path '/stripe'
router.use("/stripe", auth, stripeRoutes);
router.use("/products", auth, productRoutes);
router.use("/blog", auth, blogRoutes);
router.use("/profile", auth, profileRoutes);
/**
 * Export Router
 *
 * Make the `router` instance available to other parts of
 * the application by exporting it. This allows the main
 * app.js file to use this router with a specific prefix.
 */

module.exports = router;
