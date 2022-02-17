const mongoose = require('mongoose');
const Address = require('Cart');

const StoreSchema = mongoose.Schema({
    storeID: String,
    storeName: String,
    address: Address,
    latitude: String,
    longitude: String,
    openingHours: String
});

module.exports = mongoose.model('Store', StoreSchema);
