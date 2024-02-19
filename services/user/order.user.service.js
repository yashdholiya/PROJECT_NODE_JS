const Order = require('../../models/order.model');

module.exports = class OrderService{
    async addNewOrder(body){
        try {
            return await Order.create(body);
        } catch (error) {
            console.log(error);
            return error.message;
        }
    };

    // Get Specific Order
    async getOrder(id) {
        try {
            return await Order.findById(id);
        } catch (error) {
            console.log(error);
            return res.json({ message: "Internal server error From: Order service " });
        }
    };

    // get All Order
    async getAllOrder(body) {
        try {
            let results = await Order.find(body);
            return results;
        } catch (error) {
            console.log(error);
            return res.json({ message: "Internal server error From: Cart service " });
        }
    };

    // Delete Order
    async deleteOrder(id, body) {
        try {
            let results = await Order.findByIdAndUpdate(id, { $set: body }, { new: true });
            return results;
        } catch (error) {
            console.log(error);
            return res.json({ message: "Internal Server Error From Delete Service" });
        }
    };
}
