const userServices = require('../../services/user/user.service');
const userservice = new userServices();
const jwt = require('jsonwebtoken');
const  bcrypt= require('bcrypt');

exports.registerUser = async (req,res)=>{
    try {
        let user = await userservice.getUser({email: req.body.email});
        if(user){
            return res.json({message:"User is already register."});
        }
        if(req.file){
            req.body.profile= req.file.path
        }
        let hashpassword = await bcrypt.hash(req.body.password,10);
        user =await userservice.addNewUser({...req.body,password:hashpassword});
        res.json({message:"User create a new account."});
    } catch (error) {
        console.log(error);
        res.json({message:"internal server error in register-C"});
    }
};

exports.loginUser = async (req,res)=>
{
    try {
        let user= await userservice.getUser({email: req.body.email,isDelete:false});
        if(!user){
                return res.json({message: "User invalid "});
            }
            const comparepassword = await bcrypt.compare(req.body.password, user.password);
            // console.log(comparepassword);
        if(!comparepassword){
            return res.json({message:"password is incorrect"});
        };
        let  payLoad ={
        userId : user._id
        }
        let token = jwt.sign(payLoad,"darshan");
        res.json({token,message:"user login successfully."});
    } catch (error) {
        console.log(error);
        res.json({message:"internal server error in login-C"});   
    }
}

exports.getProfile = async (req,res)=>{
        try {
            let user = req.user
            // console.log(fuser);
             res.json(user);
        } catch (error) {
            console.log(error);
        res.json({message:"internal server error in user-get-profile ...C"});  
        }
};

exports.updateUser = async (req,res)=>
{
    try {
        let user= await userservice.getUserById(req.user._id);
        if(!user){
                return res.json({message:"user isn't found.."});
            }
            user= await userservice.updateUser(user._id,{...req.body});
            res.json({user,message:"user update successful"})
            // console.log(fuser);
    } catch (error) {
        console.log(error);
        res.json({message:"internal server error in update user ...C"}); 
    }
};

exports.deleteUser = async (req,res)=>
{
    try {
        let user= await userservice.getUserById(req.user._id);
        if(!user){
            return res.json({message:"user isn't found.."});
        };
        
            user= await userservice.updateUser(user._id,{isDelete:true});
        // console.log(fuser);
            res.json({user,message:"user delete successful"})
    } catch (error) {
        console.log(error);
        res.json({message:"internal server error in update user ...C"}); 
    }
};


exports.updatePassword= async(req,res)=>
{
    try {
        const userId = req.user._id;
        const { oldPassword, newPassword, confirmPassword } = req.body;
        let user = await userservice.getUserById(userId);
        if(!user){
            return res.json({message:"user isn't found.."});
        };
        const comparepassword = await bcrypt.compare(oldPassword,user.password);
        if(!comparepassword){
            return res.json({message:"user incorrect passwrod."});
        }
        // console.log(fuser);
        if(oldPassword==newPassword){
            return res.json({message:"old  password and new password are same  ."});
        }
        if(newPassword!=confirmPassword){
            return res.json({message:"new passwrod and old password are not match ."});
        }
        const hashedNewPassword=  await bcrypt.hash(newPassword,10);
         user = await userservice.updateUser(userId,{password:hashedNewPassword});
         res.json({message:"user password updated."})
    } catch (error) {
        console.log(error);
        res.json({message:"internal server error in user update password ...C"}); 
      }
  
  }