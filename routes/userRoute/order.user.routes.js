const express = require("express");
const orderRoute = express.Router();
const { verifyToken, userverifyToken } = require("../../helpers/verifyToken");
const { addNewOrder, getOrder, getAllOrder, deleteOrder} = require('../../controller/user/order.user.controller');

orderRoute.post('/addorder',userverifyToken,addNewOrder);
orderRoute.get('/getone',userverifyToken,getOrder);
orderRoute.get('/getallorder',userverifyToken,getAllOrder);
orderRoute.delete('/deleteorder',userverifyToken,deleteOrder);

module.exports = orderRoute;