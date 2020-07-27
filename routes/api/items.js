const express = require('express');
const router = express.Router();

//Item Model
const Item = require('../../models/Item');

//route Get request to api/items
//description get all items
//access: has to do with authentication but this is public

router.get('/', (req, res) => {
    Item.find()
        .then(items => res.json(items))
});


//route post request to api/items
//description post an item
//access: public but for real app will be private we only want admins to be able to post

router.post('/', (req, res) => {
    const newItem = new Item({
        image: req.body.image,
        name: req.body.name,
        price: req.body.price,
        quantity: req.body.quantity
    });

    newItem.save().then(item => res.json(item))
})


module.exports = router;