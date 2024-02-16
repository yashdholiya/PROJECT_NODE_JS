const favorites = require('../../models/foverite.model');


module.exports = class favouriteServices{

 //add cart
 async addcart(body) {
    try {
       return favorites.create(body);
    } catch (error) {
        return error.message;
    }
}
//get one
async getcart(body) {
    try {
        let result = await favorites.findOne(body);
        return result;
    } catch (error) {
        return error.message;
    }
}
// all cart
async getallcart(body) {
    try {
        let result = await favorites.find(body);
        return result;
    } catch (error) {
        return error.message;
    }
}
// update cart
async  updatecart(id,body) {
    try {
        let result = await favorites.findByIdAndUpdate(id,{$set : body},{new: true})
        return result;
    } catch (error) {
        return error.message;
    }
}

}