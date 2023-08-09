const express = require("express");
const { login, userVerify, profile,register } = require("../controller/getEmployes.js");

const employes = express.Router();


employes.post("/login",login);
employes.post("/profile",userVerify,profile);
employes.post("/register",register);


module.exports = employes;