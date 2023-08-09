const express = require("express");
const {getProductById,getAllProducts,deleteProductById} = require("../controller/getProductById.js");

const products = express.Router();


products.get("/products/:id",getProductById)
products.get("/products",getAllProducts)
products.delete("/products/:id",deleteProductById)

module.exports = products;