const fs = require('fs');

const path = require("path");

var dummyJsonData = fs.readFileSync(path.join(__dirname,'../Database/dummy.json'),'utf-8');

const getProductById = (req,res) =>{

    const tempDummyData = JSON.parse(dummyJsonData)
    const foundElement = tempDummyData.products.filter((element)=>
    {
       if(element.id == req.params.id)
       {
        return element;
       }   
    })
    res.send(JSON.stringify(foundElement)
        );

};
const getAllProducts = (req,res) => {
   console.log("all produts")
   res.send(dummyJsonData);  
}

const deleteProductById = (req,res) => {
  let tempDummyData = Array.from(JSON.parse(dummyJsonData).products);
  console.log(tempDummyData)
   for(let product of tempDummyData )
   {
      if(product.id == req.params.id)
       {
          let index = req.params.id -1
          var deletedproduct = tempDummyData.splice(index,1);
       }
   }
    dummyJsonData = tempDummyData;
    res.send(deletedproduct);
}
module.exports = {getProductById,getAllProducts,deleteProductById};