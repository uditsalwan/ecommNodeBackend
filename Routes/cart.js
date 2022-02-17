const express = require('express');
const Cart = require('../models/Cart');
const router = express.Router();

router.get('/cart/:cartID', async (req, res) => {
    try {
        const cart = await Cart.find(cartID);
        res.status(200).json(cart);
    } catch(error) {
        res.json({message: err});
    }
});

//router.post('/cart', async (req, res) => {
//    const cart = new Cart({
//        id: req.body.id,
//        title: req.body.title
//    })
//
//    try {
//        const savedCategory = await category.save();
//        res.status(200).json(savedCategory);
//    } catch(err) {
//        res.json({message: err});
//    }
//});

const Cart = mongoose.model('Parent', parentSchema);
const cart = new Cart({ children: [{ name: 'Matt' }, { name: 'Sarah' }] })
parent.children[0].name = 'Matthew';

// `parent.children[0].save()` is a no-op, it triggers middleware but
// does **not** actually save the subdocument. You need to save the parent
// doc.
cart.save(callback);

module.exports = router;