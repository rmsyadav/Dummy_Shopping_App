const dotenv = require("dotenv");
const express = require("express");
const path = require("path");
const hbs = require('hbs');
const app = express();
const mongoose = require("mongoose");
const staticPath = path.join(__dirname,'../public')
const templatePath = path.join(__dirname,'./Templates')
const products = require('../src/routers/products');
const employes = require("./routers/employes");
const chat = require("./routers/Chat");
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

app.use(express.json(),express.urlencoded({ extended: true }));

app.set("view engine",'hbs');
app.set('views',templatePath);

app.use("/staticweb",express.static(staticPath));

app.use("/shopping/api/v1",products);

app.use("/shopping/api/v1", employes)

app.use("/shopping/api/v1",chat);

app.listen(port,(err)=>{
    if (err) console.log(err);
    console.log("Server listening on PORT", port);
})