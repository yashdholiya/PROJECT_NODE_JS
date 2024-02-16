const Product = require('../../models/product.model');


   module.exports = class productservices{ 
    //get All Products
    async GETALLPRODUCT(body) {
    try {
        let result = await Product.find(body);
        return result;
    } catch (error) {
        return error.message;
    }
};
//get product find  by id
async GETPRODUCT(id) {
    try {
        let result = await Product.findById(id);
        return result;
        
    } catch (error) {
        console.log(error);
        return error.message;
    }
};

   }