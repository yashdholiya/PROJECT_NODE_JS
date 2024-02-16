const mongoose = require('mongoose')

const foveritecartSchema = mongoose.Schema({
    user:{
        type : mongoose.Schema.Types.ObjectId,
        ref: 'users'
    },
    favoriteItem:{
        type: mongoose.Schema.Types.ObjectId,
        ref :'product'
    },
    isDelete: {
        type: Boolean,
        default: false
    }
},
 {
    timestamps: true,
    versionKey: false
})

module.exports =  mongoose.model('favorites', foveritecartSchema);
