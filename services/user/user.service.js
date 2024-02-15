const user = require('../../models/user.model');

module.exports = class userServices{
    // register 
    async addNewUser (body)
    {
        try {
            return await user.create(body);
        } catch (error) {
            console.log({error,message:"Error is in register-service"});
            return error.message;
        }
    };

     // login 
     async getUser (body)
     {
         try {
             return await user.findOne(body);
         } catch (error) {
             console.log({error,message:"Error is in register-service"});
             return error.message;
         }
     };

      // get all user 
    async getUserById (id)
    {
        try {
            return await user.findById(id);
        } catch (error) {
            console.log({error,message:"Error is in register-service"});
            return error.message;
        }
    };

    //update user 
    async updateUser(id,body){
        try {
            return await user.findByIdAndUpdate(id,{$set : body},{new: true})
        } catch (error) {
            console.log({error,message:"Error is inpdate-service"});
            return error.message;   
        }
    }
}