const express = require('express');
const productRoutes = express.Router();
const { upload } = require('../../helpers/imageUpload');
const { adminverifyToken } = require('../../helpers/verifyToken');
const { deleteProduct, addProduct, getAllProduct, getSpeProduct, updateProduct } = require('../../controller/admin/product.admin.controller');

productRoutes.post('/addproduct', upload.single('productImage'), addProduct);
productRoutes.delete('/deleteproduct',upload.none(), adminverifyToken, deleteProduct);
productRoutes.get('/getAllProducts',upload.none(), getAllProduct);
productRoutes.get('/getProduct',upload.none(), getSpeProduct);
productRoutes.put('/updateProduct',upload.none(), updateProduct);


    


module.exports = productRoutes;