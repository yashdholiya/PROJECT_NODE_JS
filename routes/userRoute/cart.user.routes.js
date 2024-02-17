const express = require('express');
const cartrouters = express.Router();
const {userverifyToken}  =require('../../helpers/verifyToken')
const { upload } = require('../../helpers/imageUpload');
const {addcart, getAllcart, getonecart, updatecart} = require('../../controller/user/cart.user.controller');



cartrouters.post('/addcart',upload.none(),userverifyToken,addcart);
cartrouters.get('/onecart',upload.none(),userverifyToken, getonecart);
cartrouters.get('/allcart',upload.none(), getAllcart);
cartrouters.put('/updatecart',upload.none(), updatecart);

module.exports = cartrouters