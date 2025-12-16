const mongoose = require('mongoose');

const supportSchema = new mongoose.Schema({
    name: { type: String, required: true },
    email: { type: String, required: true },
    phone: String,
    subject: { type: String, required: true },
    message: { type: String, required: true },
    category: { 
        type: String, 
        enum: ['orders', 'payment', 'account', 'products', 'technical', 'other'],
        default: 'other'
    },
    status: { 
        type: String, 
        enum: ['open', 'in-progress', 'resolved', 'closed'],
        default: 'open'
    },
    createdAt: { type: Date, default: Date.now }
});

module.exports = mongoose.model('Support', supportSchema);