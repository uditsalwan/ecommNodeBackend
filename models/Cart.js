const mongoose = require('mongoose');

const Address = mongoose.Schema({
    addressID: String,
    firstName: String,
    lastName: String,
    phoneNumber: String,
    addressLine1: String,
    addressLine2: String,
    city: String,
    state: String,
    pincode: String,
    country: String,
});

const OrderItemSchema = mongoose.Schema({
    orderItemID: String,
    product: ProductSchema,
    quantity: Number,
    priceperItem: Number
});

const CartSchema = mongoose.Schema({
    cartID: String,
    cartItems: [OrderItemSchema],
    totalPrice: Number
});

const OrderSchema = mongoose.Schema({
    orderID: String,
    OrderItems: [OrderItemSchema],
    dateCreated: {type: Date, default: Date.now},
    shippingAddress: AddressSchema,
    totalPrice:Number,
    orderStatus: String,
    paymentInfo: String,
    userID: String
});

module.exports = mongoose.model('Address', AddressSchema);
module.exports = mongoose.model('OrderItem', OrderItemSchema);
module.exports = mongoose.model('Cart', CartSchema);
module.exports = mongoose.model('Order', OrderSchema);
