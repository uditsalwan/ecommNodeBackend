const mongoose = require('mongoose');

const CategorySchema = mongoose.Schema({
    id: String,
    title: String,
    logoURL: String,
    updatedAt: Date,
});

module.exports = mongoose.model('Category', CategorySchema);
