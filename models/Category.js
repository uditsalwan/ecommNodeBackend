const mongoose = require('mongoose');

const CategorySchema = mongoose.Schema({
    id: String,
    title: String,
    logoURL: String,
    updatedAt: Date,
    //subCategories: [CategorySchema]
});

const OfferSchema = mongoose.Schema({
    offerID: String,
    description: String,
    percentDiscount: Number,
    flatDiscount: Number,
    categoryID: String
});

module.exports = mongoose.model('Category', CategorySchema);
module.exports = mongoose.model('Offer', OfferSchema);
