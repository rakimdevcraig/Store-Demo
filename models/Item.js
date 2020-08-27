const mongoose = require('mongoose')

//create schema
const ItemSchema = new mongoose.Schema({
    productImage: {
        type: String,
    },
    name: {
        type: String,
    },
    price: {
        type: String,
    },
    quantity: {
        type: Number
    }

});

module.exports = Item = mongoose.model('storedemo', ItemSchema);