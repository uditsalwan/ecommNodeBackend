const express = require('express');
const Cart = require('../models/Cart');
const router = express.Router();

router.get('/cart', async (req, res) => {
    try {
        const cart = await Cart.find(req.body.cartID);
        res.status(200).json(cart);
    } catch(error) {
        res.json({message: err});
    }
});

router.post('/', async (req, res) => {
    const category = new Category({
        id: req.body.id,
        title: req.body.title
    })

    try {
        const savedCategory = await category.save();
        res.status(200).json(savedCategory);
    } catch(err) {
        res.json({message: err});
    }
});

module.exports = router;