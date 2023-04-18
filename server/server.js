//EXPRESS
const express = require("express");
//APP
const app = express();
//BODY PARSER
const bodyParser = require("body-parser");
//PATH
const path = require("path");
const connectDB = require("./utils/connection");
//SESSION
const session = require("express-session");
//PORT CONNECTION PROJECT
var PORT = process.env.PORT || 3000;
app.use(session({ secret: "ssshhhhh" }));
//PRODUCT ROUTE
const product = require("./routes/product");
//STRIPE ROUTE
const stripe = require("./routes/stripe");
//BLOG ROUTE
const blog = require("./routes/blog");

//BODY PARSER
app.use(bodyParser.json());
app.use("/", product);
app.use("/", stripe);
app.use("/", blog);
connectDB();
app.listen(PORT);
console.log(`Server is running on http://localhost:` + PORT);
