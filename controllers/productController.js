const {getAllProducts} = require('../services/productService');

const  productListController = async function(req,res){
    const { pageNo, limit } = req.query;
    const inputs = {
        pageNo:pageNo,
        limit: limit
    }
    try{
        const result = await getAllProducts(inputs)
       return res.status(200).send(result)
    }catch(err){
         console.log(`[Error]: error while fetching the products ${JSON.stringify(err)}`)
         return res.status(500).send({
             code: "INTERNAL_SERVER_ERROR",
             message: "Internal server error"
         })
    }
}

module.exports = {productListController:productListController}