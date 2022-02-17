const express = require('express');
const Category = require('../models/Category');
const router = express.Router();

router.get('/', async (req, res) => {
    try {
        const categories = await Category.find();
        res.status(200).json(categories);
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