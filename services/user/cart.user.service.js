const cart = require('../../models/cart.model')

module.exports = class cartServices{

//add cart
async addcart(body) {
    try {
       return cart.create(body);
    } catch (error) {
        return error.message;
    }
}
//get one
async getcart(body) {
    try {
        let result = await cart.findOne(body);
        return result;
    } catch (error) {
        return error.message;
    }
}
// all cart
async getallcart(body) {
    try {
        let result = await cart.find(body);
        return result;
    } catch (error) {
        return error.message;
    }
}
// update cart
async  updatecart(id,body) {
    try {
        let result = await cart.findByIdAndUpdate(id,{$set : body},{new: true})
        return result;
    } catch (error) {
        return error.message;
    }
}



}