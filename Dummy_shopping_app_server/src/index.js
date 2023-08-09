const dotenv = require("dotenv");
const express = require("express");
const path = require("path");
const app = express();
const mongoose = require("mongoose");
const staticPath = path.join(__dirname,'../public')

const products = require('../src/routers/products');
const employes = require("./routers/employes");
dotenv.config({path:'../config.env'});
const DB = process.env.DATABASE || "mongodb+srv://rmsyadav:Rmsyadav567@cluster0.c0yw0eo.mongodb.net/ShoppingData?retryWrites=true&w=majority";
mongoose.connect(DB, {
        useNewUrlParser: true,
        useUnifiedTopology: true
      }).then((response)=>{
          console.log("Connection successfull");
      }).catch((error)=>{
          console.log(error);
      })

const port = process.env.PORT || 8082;

app.use(express.json());

app.use("/staticweb",express.static(staticPath));

app.use("/shopping/api/v1",products);

app.use("/shopping/api/v1", employes)

app.listen(port,(err)=>{
    if (err) console.log(err);
    console.log("Server listening on PORT", port);
})
