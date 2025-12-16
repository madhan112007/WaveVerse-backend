const User = require('../models/SignUpModel');
const Contact = require('../models/ContactModel');
const Order = require('../models/OrderModel');
const Return = require('../models/ReturnModel');
const Support = require('../models/SupportModel');

// Get dashboard stats
const getDashboardStats = async (req, res) => {
    try {
        const [userCount, contactCount, orderCount, returnCount, supportCount] = await Promise.all([
            User.countDocuments(),
            Contact.countDocuments(),
            Order.countDocuments(),
            Return.countDocuments(),
            Support.countDocuments()
        ]);

        const recentOrders = await Order.find()
            .populate('user', 'firstName lastName')
            .sort({ createdAt: -1 })
            .limit(5);

        const recentSupport = await Support.find()
            .sort({ createdAt: -1 })
            .limit(5);

        res.json({
            stats: {
                users: userCount,
                contacts: contactCount,
                orders: orderCount,
                returns: returnCount,
                support: supportCount
            },
            recentOrders,
            recentSupport
        });
    } catch (error) {
        res.status(500).json({ message: error.message });
    }
};

module.exports = {
    getDashboardStats
};