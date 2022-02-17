const mongoose = require('mongoose');
const Address = require('Cart');
const Product = require('Product');



const UserSchema = mongoose.Schema({
    userID: String,
    email: String,
    firstName: String,
    lastName: String,
    mobile: String,
    defaultAddressID: String,
    addresses: [Address],
    wishlistID: String,
    loyaltyID: String,
    cartID:String
});

const LoyaltySchema = mongoose.Schema({
    loyaltyID: String,
    memberShipNumber: String,
    availablePoints: Number,
    joiningDate: {type: Date, default: Date.now},
    dateOfBirth: Date
});

const Wishlist = mongoose.Schema({
    wishlistID: String,
    products: [Product],
});

module.exports = mongoose.model('Address', AddressSchema);
module.exports = mongoose.model('OrderItem', OrderItemSchema);
module.exports = mongoose.model('Cart', CartSchema);
module.exports = mongoose.model('Order', OrderSchema);
