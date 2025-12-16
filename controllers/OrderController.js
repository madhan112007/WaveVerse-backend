const Order = require('../models/OrderModel');

// Create new order
const createOrder = async (req, res) => {
    try {
        const order = new Order({
            ...req.body,
            estimatedDelivery: new Date(Date.now() + 30 * 60 * 1000) // 30 minutes from now
        });
        const savedOrder = await order.save();
        res.status(201).json(savedOrder);
    } catch (error) {
        res.status(400).json({ message: error.message });
    }
};

// Get user orders
const getUserOrders = async (req, res) => {
    try {
        const orders = await Order.find({ user: req.params.userId })
            .populate('items.product')
            .sort({ createdAt: -1 });
        res.json(orders);
    } catch (error) {
        res.status(500).json({ message: error.message });
    }
};

// Get all orders (Admin)
const getAllOrders = async (req, res) => {
    try {
        const orders = await Order.find()
            .populate('user', 'firstName lastName email')
            .populate('items.product')
            .sort({ createdAt: -1 });
        res.json(orders);
    } catch (error) {
        res.status(500).json({ message: error.message });
    }
};

// Update order status
const updateOrderStatus = async (req, res) => {
    try {
        const { status } = req.body;
        const order = await Order.findByIdAndUpdate(
            req.params.id,
            { status, updatedAt: Date.now() },
            { new: true }
        );
        if (!order) {
            return res.status(404).json({ message: 'Order not found' });
        }
        res.json(order);
    } catch (error) {
        res.status(400).json({ message: error.message });
    }
};

// Get single order
const getOrder = async (req, res) => {
    try {
        const order = await Order.findById(req.params.id)
            .populate('user', 'firstName lastName email')
            .populate('items.product');
        if (!order) {
            return res.status(404).json({ message: 'Order not found' });
        }
        res.json(order);
    } catch (error) {
        res.status(500).json({ message: error.message });
    }
};

// Track order by order ID
const trackOrder = async (req, res) => {
    try {
        const { orderId } = req.params;
        
        // For demo purposes, return mock data for WV order IDs
        if (orderId.startsWith('WV')) {
            return res.json({
                id: orderId,
                status: 'out-for-delivery',
                estimatedDelivery: new Date(Date.now() + 2 * 60 * 60 * 1000), // 2 hours from now
                items: [
                    { name: 'Organic Red Apples', quantity: 2, price: 125 },
                    { name: 'Farm Fresh Milk', quantity: 1, price: 48 }
                ],
                total: 298,
                address: {
                    street: 'No. 45, Avinashi Road',
                    city: 'Peelamedu, Coimbatore - 641004'
                }
            });
        }
        
        // Try to find real order by MongoDB _id
        const order = await Order.findById(orderId)
            .populate('items.product', 'name image')
            .select('status items totalAmount deliveryAddress estimatedDelivery createdAt');
        
        if (!order) {
            return res.status(404).json({ message: 'Order not found' });
        }
        
        res.json({
            id: order._id,
            status: order.status,
            estimatedDelivery: order.estimatedDelivery,
            items: order.items,
            total: order.totalAmount,
            address: order.deliveryAddress
        });
    } catch (error) {
        res.status(500).json({ message: error.message });
    }
};

module.exports = {
    createOrder,
    getUserOrders,
    getAllOrders,
    updateOrderStatus,
    getOrder,
    trackOrder
};