const products = require('../product.json')
const {createConnection}  = require('../dbConnection/connect')

const {Schema, mongoose} = require('mongoose')

const ProductSchema = new Schema({
    "title": String,
    "type": String,
    "description": String,
    "filename": String,
    "height": Number ,
    "width": Number,
    "price": Number,
    "rating": Number
})
async function Insertdata(){
    let connection = await createConnection();
   let productModel=  connection.model('productModel', ProductSchema)
   for(let product of products){
       delete product.inCart;
      let productInsatnce = new productModel(product)
      try{
        let result = await productInsatnce.save()
        console.log(result)
      }catch(err){
          console.log(err)
      }
     
   }
}

Insertdata()