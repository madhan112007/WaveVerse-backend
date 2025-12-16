const Support = require('../models/SupportModel');

// Create support request
const createSupport = async (req, res) => {
    try {
        const supportRequest = new Support(req.body);
        const savedSupport = await supportRequest.save();
        res.status(201).json({ message: 'Support request submitted successfully', support: savedSupport });
    } catch (error) {
        res.status(400).json({ message: error.message });
    }
};

// Get all support requests (Admin)
const getAllSupport = async (req, res) => {
    try {
        const supports = await Support.find().sort({ createdAt: -1 });
        res.json(supports);
    } catch (error) {
        res.status(500).json({ message: error.message });
    }
};

// Update support status
const updateSupportStatus = async (req, res) => {
    try {
        const { status } = req.body;
        const supportRequest = await Support.findByIdAndUpdate(
            req.params.id,
            { status },
            { new: true }
        );
        if (!supportRequest) {
            return res.status(404).json({ message: 'Support request not found' });
        }
        res.json(supportRequest);
    } catch (error) {
        res.status(400).json({ message: error.message });
    }
};

module.exports = {
    createSupport,
    getAllSupport,
    updateSupportStatus
};