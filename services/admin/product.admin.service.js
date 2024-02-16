
const Product = require('../../models/product.model');

module.exports = class ProductServices {
    // Add New Product
    async addProduct(body) {
        try {
            let result = await Product.create(body);
            return result;
        } catch (error) {
            return error.message;
        }
    };

    // get All Products
    async getAllProducts(body) {
        try {
            let result = await Product.find(body);
            return result;
        } catch (error) {
            return error.message;
        }
    };

    // get Product
    async getSpeProduct(body) {
        try {
            let result = await Product.findOne({body});
            return result;
        } catch (error) {
            return error.message;
        }
    };

    async getProduct(id) {
        try {
            let result = await Product.findById(id);
            return result;
        } catch (error) {
            return error.message;
        }
    };
    
    

    // update Product by ID
    async updateProduct(id, body) {
        try {
            let result = await Product.findByIdAndUpdate(id, { $set: body }, { new: true });
            return result;
        } catch (error) {
            return error.message;
        }
    };

   // delete product 
// async deleteProduct(id) {
//     try {
//         let result = await Product.findByIdAndDelete(id);
//         if (result) {
//             return "Product deleted successfully";
//         } else {
//             return "Product not found";
//         }
//     } catch (error) {
//         return error.message;
//     }
// }


async deleteProduct(Id) {
    try {
        let product = await Product.findById(tId);
        
        if (!product) {
            throw new Error("Product not found");
        }

        // Update the product by setting isDelete to true
        product = await Product.findByIdAndUpdate(Id, { isDelete: true }, { new: true });

        // Additional logic can be added here if needed

        return "Product deleted successfully";
    } catch (error) {
        console.error(error);
        throw new Error("Error deleting product");
    }
}

}


