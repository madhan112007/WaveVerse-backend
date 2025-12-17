const mongoose = require('mongoose');

const simpleOrderSchema = new mongoose.Schema({
    orderId: { type: String, required: true },
    items: [{
        name: String,
        price: Number,
        quantity: Number,
        image: String
    }],
    customerInfo: {
        firstName: String,
        lastName: String,
        email: String,
        phone: String,
        address: String,
        city: String,
        state: String,
        pincode: String,
        paymentMethod: String
    },
    totals: {
        subtotal: Number,
        shipping: Number,
        tax: Number,
        total: Number
    },
    totalAmount: Number,
    paymentMethod: String,
    status: { type: String, default: 'pending' },
    trackingInfo: {
        currentLocation: String,
        estimatedDelivery: Date,
        updates: [{
            status: String,
            message: String,
            timestamp: Date,
            location: String
        }]
    },
    orderDate: { type: Date, default: Date.now },
    createdAt: { type: Date, default: Date.now }
});

module.exports = mongoose.model('SimpleOrder', simpleOrderSchema);