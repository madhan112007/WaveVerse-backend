const Return = require('../models/ReturnModel');

// Create return request
const createReturn = async (req, res) => {
    try {
        const returnRequest = new Return(req.body);
        const savedReturn = await returnRequest.save();
        res.status(201).json({ message: 'Return request submitted successfully', return: savedReturn });
    } catch (error) {
        res.status(400).json({ message: error.message });
    }
};

// Get all returns (Admin)
const getAllReturns = async (req, res) => {
    try {
        const returns = await Return.find().sort({ createdAt: -1 });
        res.json(returns);
    } catch (error) {
        res.status(500).json({ message: error.message });
    }
};

// Update return status
const updateReturnStatus = async (req, res) => {
    try {
        const { status } = req.body;
        const returnRequest = await Return.findByIdAndUpdate(
            req.params.id,
            { status },
            { new: true }
        );
        if (!returnRequest) {
            return res.status(404).json({ message: 'Return request not found' });
        }
        res.json(returnRequest);
    } catch (error) {
        res.status(400).json({ message: error.message });
    }
};

module.exports = {
    createReturn,
    getAllReturns,
    updateReturnStatus
};