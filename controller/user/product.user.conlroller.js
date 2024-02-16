const ProductServices= require('../../services/user/product.user.service');

const productservice= new ProductServices();

exports.GETALLPRODUCT = async(req,res)=>
{
    try {
        let product= await productservice.GETALLPRODUCT(req.query);
        if(!product){
            return res.json({message:"Product is not exist..."});
        }
        // res.json({product});
        res.json(product)
    } catch (error) {
        console.log(error);
        res.json({message:"internal server error in get all products controller..."});   
    }
};

exports.GETPRODUCT= async(req,res)=>
{
    try {
        let product = await productservice.GETPRODUCT(req.body.productId);
        if(!product){
            return res.json({message:"product is not exist..."});
        }
        res.json(product);
    } catch (error) {
        console.log(error);
        res.json({message:"internal server error in get-specific products controller..."});   
    }
}