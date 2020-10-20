const mongoose = require('mongoose')


//Create schema
const cartSchema = new mongoose.Schema({
    cartItems: [
        {
            product: { type: mongoose.Schema.Types.ObjectId },
            name: { type: String },
            quantity: { type: String, },
            productPicture: { type: String },
            price: { type: String }
        }
    ]
})

module.exports = Item = mongoose.model('cart2', cartSchema)