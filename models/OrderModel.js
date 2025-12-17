const mongoose = require('mongoose');

const orderItemSchema = new mongoose.Schema({
    product: { type: mongoose.Schema.Types.ObjectId, ref: 'Product' },
    name: String,
    price: Number,
    quantity: { type: Number, required: true },
    image: String
});

const orderSchema = new mongoose.Schema({
    orderId: { type: String, required: true, unique: true },
    user: { type: mongoose.Schema.Types.ObjectId, ref: 'User' },
    items: [orderItemSchema],
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
    totalAmount: { type: Number, required: true },
    status: { 
        type: String, 
        enum: ['pending', 'processing', 'shipped', 'delivered', 'cancelled'],
        default: 'pending'
    },
    paymentMethod: { type: String, required: true },
    paymentStatus: { 
        type: String, 
        enum: ['pending', 'paid', 'failed'],
        default: 'pending'
    },
    trackingInfo: {
        currentLocation: String,
        estimatedDelivery: Date,
        updates: [{
            status: String,
            message: String,
            timestamp: Date,
            location: String,
            coordinates: {
                lat: Number,
                lng: Number
            }
        }]
    },
    orderDate: { type: Date, default: Date.now },
    createdAt: { type: Date, default: Date.now },
    updatedAt: { type: Date, default: Date.now }
});

module.exports = mongoose.model('Order', orderSchema);