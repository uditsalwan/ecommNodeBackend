const mongoose = require('mongoose');

const ProductSpecificationSchema = mongoose.Schema({
    title: String,
    description: String
});

const ProductSchema = mongoose.Schema({
    id: String,
    name: String,
    description: String,
    additionalDescription: String,
    price: Number,
    salePrice: Number,
    rating: Number,
    stock: Number,
    categoryID: [String],
    images: [String],
    specifications: [ProductSpecification],
    similarProductsID: [String],
    countryOfOrigin: String
});

module.exports = mongoose.model('ProductSpecification', ProductSpecificationSchema);
module.exports = mongoose.model('Category', ProductSchema);
