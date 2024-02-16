const express = require('express');
const foveriteroutes = express.Router();
const {userverifyToken}  =require('../../helpers/verifyToken')
const { upload } = require('../../helpers/imageUpload');
const { addFavourite,getSpecificFavourite ,getAllFavourite,updateFavourite} = require('../../controller/user/foverite.user.controller');



// Routes
foveriteroutes.post('/addfoverite',upload.none(),userverifyToken,addFavourite);
foveriteroutes.get('/speone',upload.none(), getSpecificFavourite);
foveriteroutes.get('/all',upload.none(),userverifyToken, getAllFavourite);
foveriteroutes.put('/update',upload.none(), updateFavourite);

module.exports = foveriteroutes