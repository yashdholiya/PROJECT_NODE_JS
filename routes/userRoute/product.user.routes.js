const express = require('express');
const productRoutes = express.Router();
const { upload } = require('../../helpers/imageUpload');
// const { adminverifyToken } = require('../../helpers/verifyToken');
const {GETPRODUCT, GETALLPRODUCT} = require('../../controller/user/product.user.conlroller');

productRoutes.get('/getAllProducts',upload.none(),GETALLPRODUCT );
productRoutes.get('/getProduct',upload.none(),GETPRODUCT);

module.exports = productRoutes