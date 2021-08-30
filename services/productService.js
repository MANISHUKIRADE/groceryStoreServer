const mongoosePaginate = require('mongoose-paginate-v2');
const {createConnection}  = require('../dbConnection/connect')
const  {ProductSchema} = require('../mongo/productSchema');

ProductSchema.plugin(mongoosePaginate)

async function getModel(){
      let conn = await createConnection();
      return conn.model('ProductModel',ProductSchema)
}


async function getAllProducts(inputs){
    const options = {
        page: inputs.pageNo,
        limit: inputs.limit | 10,
      };
      try{
        let productModel = await getModel()
        let result = await productModel.paginate({},options)
        return result;
      }catch(err){
          console.log(`[ERROR]:: error at [productService]`)
          throw(err)
      }
   
}

module.exports = {getAllProducts:getAllProducts}