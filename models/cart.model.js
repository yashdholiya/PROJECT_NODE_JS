const mongoose = require('mongoose')

const cartSchema = mongoose.Schema({
    user:{
        type : mongoose.Schema.Types.ObjectId,
        ref: 'users'
    },
    cartItem:{
        type: mongoose.Schema.Types.ObjectId,
        ref :'product'
    },
    quentity:{
        type: Number,
        default:1
    },
    isDelete: {
        type: Boolean,
        default: false
    },
   
},
 {
    timestamps: true,
    versionKey: false
})

module.exports =  mongoose.model('cart', cartSchema);
