require('dotenv').config();
const express = require('express');
const server = express(); 
const cors = require('cors');
const path = require('path');
const imagePath = path.join(__dirname,'public','images');

PORT= process.env.PORT;
dbURL = process.env.MONGO_URL;

const { default: mongoose } = require('mongoose');

server.use(express.json());
server.use(express.urlencoded({extended:true}));
server.use(cors());
server.use('/public/images',express.static(imagePath));

server.get('/',(req,res)=>
{
   res.json({message : 'welcome to express server'});
});

const userRoutes = require('./routes/userRoute/user.routes');
const AdminRoutes = require('./routes/adminRoute/admin.routes');
const productRoutes =require('./routes/adminRoute/product.admin.routes');

// const productroutes= require("./routes/fproduct.routes");

server.use('/api/user',userRoutes);
server.use('/api/Admin',AdminRoutes);
server.use('/api/product',productRoutes);
// server.use('/api/fproduct',productroutes);




server.listen(PORT,()=>
{
   try  {
         mongoose.connect(dbURL);
         console.log('mongodb start');
     } catch (error) {
       handleError(error);
     }
   console.log('server is start at', 'http://localhost:5555');
})