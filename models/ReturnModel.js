const mongoose = require('mongoose');

const returnSchema = new mongoose.Schema({
    orderId: { type: String, required: true },
    itemName: { type: String, required: true },
    reason: { type: String, required: true },
    description: String,
    contactNumber: { type: String, required: true },
    status: { 
        type: String, 
        enum: ['pending', 'approved', 'rejected', 'completed'],
        default: 'pending'
    },
    createdAt: { type: Date, default: Date.now }
});

module.exports = mongoose.model('Return', returnSchema);