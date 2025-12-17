const Order = require('../models/OrderModel');

// Create new order
const createOrder = async (req, res) => {
    try {
        const orderData = {
            ...req.body,
            estimatedDelivery: new Date(Date.now() + 30 * 60 * 1000) // 30 minutes from now
        };
        
        // Remove user field if not provided
        if (!orderData.user) {
            delete orderData.user;
        }
        
        // Clean items to remove product references if not provided
        if (orderData.items) {
            orderData.items = orderData.items.map(item => {
                const cleanItem = { ...item };
                if (!cleanItem.product) {
                    delete cleanItem.product;
                }
                return cleanItem;
            });
        }
        
        const order = new Order(orderData);
        const savedOrder = await order.save();
        res.status(201).json(savedOrder);
    } catch (error) {
        console.error('Order creation error:', error);
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
        
        // Try to find order by orderId field first
        let order = await Order.findOne({ orderId: orderId });
        
        // If not found and it's a demo order, return mock data
        if (!order && (orderId.startsWith('WV') || orderId.startsWith('ORD'))) {
            return res.json({
                id: orderId,
                status: 'out-for-delivery',
                estimatedDelivery: '2:30 PM',
                items: [
                    { name: 'Organic Red Apples', quantity: 2, price: 125 },
                    { name: 'Farm Fresh Milk', quantity: 1, price: 48 }
                ],
                total: 298,
                address: 'No. 45, Avinashi Road, Peelamedu, Coimbatore - 641004',
                deliveryPerson: 'Raj Kumar',
                phone: '+91 9876543210'
            });
        }
        
        if (!order) {
            return res.status(404).json({ message: 'Order not found' });
        }
        
        res.json({
            id: order.orderId,
            status: order.status,
            estimatedDelivery: order.trackingInfo?.estimatedDelivery || order.estimatedDelivery,
            items: order.items,
            total: order.totals?.total || order.totalAmount,
            address: `${order.customerInfo?.address}, ${order.customerInfo?.city}`,
            deliveryPerson: 'Raj Kumar',
            phone: '+91 9876543210',
            trackingInfo: order.trackingInfo
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