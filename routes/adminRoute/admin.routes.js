const express = require('express');
const AdminRoutes = express.Router();
const { upload } = require('../../helpers/imageUpload');
const { adminverifyToken } = require('../../helpers/verifyToken');
const { registerAdmin, getAllAdmin, logInAdmin, updateAdmin, deleteAdmin, updatePassword, getAdmin } = require('../../controller/admin/admin.controller');

AdminRoutes.post('/registerAdmin', upload.single('profileImage'), registerAdmin);
// AdminRoutes.get('/getAllAdmin',upload.none(), getAllAdmin);
AdminRoutes.get('/getAdmin',upload.none(), adminverifyToken, getAdmin);
AdminRoutes.get('/log-In_Admin',upload.none(), logInAdmin);
AdminRoutes.put('/updateAdmin',upload.none(), adminverifyToken, updateAdmin);
AdminRoutes.put('/updateAdminPass',upload.none(), adminverifyToken, updatePassword);
AdminRoutes.delete('/deleteAdmin',upload.none(), adminverifyToken, deleteAdmin);

module.exports = AdminRoutes;