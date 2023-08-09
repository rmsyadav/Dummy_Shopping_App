const fs = require('fs');
const path = require("path");
const jsonToken = require("jsonwebtoken");
const employesModel = require("../Schema/EmployessModal");

var dummyJsonData = fs.readFileSync(path.join(__dirname,'../Database/dummy.json'),'utf-8');
const secrateKey = "abcfshteidf";

const login = async(req,res) =>{
      const users = req.body;
      const isUserFound = await employesModel.find(users);
      
      if(isUserFound.length > 0)
      {
        console.log(isUserFound);
        jsonToken.sign({users},secrateKey,{expiresIn:'300s'},(error,token)=>{
        res.send({users:isUserFound,token:token});
        })
      } else {
        res.send("userName or password is wrong! please check once");
      }

};
const register = async(req,res) =>{
  console.log(req.body)
  const user = new employesModel(req.body);
  await user.save();
  res.send(req.body);
} 
const profile = (req,res) =>{
    
    jsonToken.verify(req.token,secrateKey,(error,token)=>{
         if(error){
            res.send({
                message:"Invalid auth code!"
            })
         } else {
            res.send({
                message:"profile accepted!"
            })
         }
    });
      

};

const userVerify = (req,res,next) => {
  const header = req.headers['authorization'];
  const authCode = header.split(" ")[1];
  if(typeof authCode !== undefined)
  {
    req.token = authCode;
    next();
  } else {
    res.send("invalid auth code!");
  }
 }

module.exports = {login,profile,userVerify,register};