const FavouriteServices = require('../../services/user/foveritr.user.service');

const favouriteservice = new FavouriteServices();


exports.addFavourite = async (req, res) => {
    try {
        let favourite=await favouriteservice.getcart({favoriteItem:req.body.favoriteItem,user:req.user._id});
        if(favourite){
            return res.json({message:"Favourite is empty..."})
        }
         await favouriteservice.addcart({ ...req.body, user: req.user._id });
        res.json({ message: "Add favourite success...",favourite});
    } catch (error) {
        // console.log({ error, message: "Error in add favourite controller" });
        res.json({ error: "Internal Server Error" });
    }
};

exports.getSpecificFavourite = async (req, res) => {
    try {
        const result = await favouriteservice.getcart({ _id: req.params.id, user: req.user._id });
        if (!result) {
            return res.json({ message: "Favorite item not found for the user" });
        }
        res.json(result);
    } catch (error) {
        // console.log({ error, message: "Error in get specific favourite controller" });
        res.json({ error: "Internal Server Error" });
    }
};

exports.getAllFavourite = async (req, res) => {
    try {
        const result = await favouriteservice.getallcart({ user: req.user._id });
        res.json(result);
    } catch (error) {
        // console.log({ error, message: "Error in get all favourite controller" });
        res.json({ error: "Internal Server Error" });
    }
};

exports.updateFavourite = async (req, res) => {
    try {
        const result = await favouriteservice.updatecart(req.params.id, req.body);
        res.json({ message: "Update favourite success...", data: result });
    } catch (error) {
        // console.log({ error, message: "Error in update favourite controller" });
        res.json({ error: "Internal Server Error" });
    }
};
