const express = require('express');
const router = express.Router();
const path = require("path")
const multer = require('multer')

//Item Model
const Item = require('../../models/Item');

//Cart Model
const Cart = require('../../models/Cart')

//Storage for multer will determine where files are stored and filename 
const storage = multer.diskStorage({
    destination: function (req, file, cb) {
        cb(null, './client/img/')
    },
    filename: function (req, file, cb) {
        cb(null, new Date().toISOString() + file.originalname)
    }
})

//choose what files can be uploaded we're gonna do png and img file
const fileFilter = (req, file, cb) => {
    if (file.mimetype === 'image/jpeg' || 'image/png' || 'img/jpeg' || 'img/png') {
        cb(null, true)
    } else {
        cb(null, false)
    }
}

const upload = multer({
    storage: storage,
    limits: {
        //won't take files more than 3mb's
        filesize: 1025 * 1024 * 3
    },
    fileFilter: fileFilter
})

//route Get request to api/items
//description get all items
//access: has to do with authentication but this is public

//make this the static folder where files will be accessible
var publicPath = path.join(__dirname, '../../client/');

router.get('/api/items', (req, res) => {
    Item.find()
        .then(items => res.json(items))
});

//Route  GET api/items
//description: Get All Cart Items from db in json
router.get('/api/cart', (req, res) => {
    Cart.find()
        .then(items => res.json(items))
})

router.get('/', (req, res) => {
    res.sendFile(publicPath + '/index.html');
})

router.get('/inventory', function (req, res) {
    res.sendFile(publicPath + '/inventory.html');
});

router.get('/cart', (req, res) => {
    res.sendFile(publicPath + '/cart.html');
})


//route post request to api/items
//description post an item
//access: public but for real app will be private we only want admins to be able to post

router.post('/api/items', upload.single('productPicture'), (req, res) => {
    console.log(req.file)
    const newItem = new Item({
        productPicture: req.file.filename,
        name: req.body.name,
        price: req.body.price,
        quantity: req.body.quantity
    });

    newItem.save().then(item => res.json(item))
})


//Add item to cart
router.post('/api/cart', (req, res) => {
    //gonna check if a cart exists because we only want to have 1 cart
    console.log('Req.id', req._id)
    Cart.findOne({ user: req._id })
        .exec((error, cart) => {
            if (error) return res.status(400).json({ error })
            if (cart) {
                //if cart already exists then update
                Cart.findOneAndUpdate({ user: req._id }, {
                    "$push": {
                        "cartItems": [req.body.cartItems]
                    }
                })
                    .exec((error, _cart) => {
                        if (error) return res.status(400).json({ error })
                        if (_cart) {
                            return res.status(201).json({ cart: _cart })
                        }
                    })
            } else {
                const cart = new Cart({
                    cartItems: [req.body.cartItems]
                })

                cart.save((error, cart) => {
                    if (error) return res.status(400).json({ error })
                    if (cart) {
                        return res.status(201).json({ cart })
                    }
                })
            }
        })
})

module.exports = router;