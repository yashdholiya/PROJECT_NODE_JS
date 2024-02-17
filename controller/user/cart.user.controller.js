const CartServices = require('../../services/user/cart.user.service');

const cartServices = new CartServices();


exports.addcart = async (req, res) => {
    try {
        let cart =await cartServices.getcart({cartItem:req.body.cartItem,user:req.user._id});
        if(cart){
            // console.log(cart);
            return res.json({message:"Favourite is empty..."})
        }
         await cartServices.addcart({ ...req.body, user: req.user._id });
        res.json({ message: "Add favourite success..."});
    } catch (error) {
        // console.log({ error, message: "Error in add favourite controller" });
        res.json({ error: "Internal Server Error in add to cart" });
    }
};
 exports.getonecart = async (req, res) => {
    try {
        const result = await CartServices.getcart({ _id: req.params.id, user: req.user._id });
        if (!result) {
            return res.json({ message: "Favorite item not found for the user" });
        }
        res.json(result);
    } catch (error) {
        // console.log({ error, message: "Error in get specific favourite controller" });
        res.json({ error: "Internal Server Error" });
    }
};

exports.getAllcart = async (req, res) => {
    try {
        const result = await CartServices.getallcart({ user: req.user._id });
        res.json(result);
    } catch (error) {
        // console.log({ error, message: "Error in get all favourite controller" });
        res.json({ error: "Internal Server Error" });
    }
};

exports.updatecart = async (req, res) => {
    try {
        const result = await CartServices.updatecart(req.params.id, req.body);
        res.json({ message: "Update favourite success...", data: result });
    } catch (error) {
        // console.log({ error, message: "Error in update favourite controller" });
        res.json({ error: "Internal Server Error" });
    }
};
