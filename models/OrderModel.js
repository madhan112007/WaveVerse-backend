const mongoose = require('mongoose');

const orderItemSchema = new mongoose.Schema({
    product: { type: mongoose.Schema.Types.ObjectId, ref: 'Product', required: true },
    name: String,
    price: Number,
    quantity: { type: Number, required: true },
    image: String
});

const orderSchema = new mongoose.Schema({
    user: { type: mongoose.Schema.Types.ObjectId, ref: 'User', required: true },
    items: [orderItemSchema],
    totalAmount: { type: Number, required: true },
    status: { 
        type: String, 
        enum: ['pending', 'confirmed', 'preparing', 'out-for-delivery', 'delivered', 'cancelled'],
        default: 'pending'
    },
    paymentMethod: { type: String, required: true },
    paymentStatus: { 
        type: String, 
        enum: ['pending', 'paid', 'failed'],
        default: 'pending'
    },
    deliveryAddress: {
        street: String,
        city: String,
        state: String,
        zipCode: String,
        phone: String
    },
    estimatedDelivery: Date,
    createdAt: { type: Date, default: Date.now },
    updatedAt: { type: Date, default: Date.now }
});

module.exports = mongoose.model('Order', orderSchema);