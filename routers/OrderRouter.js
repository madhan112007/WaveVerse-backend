const express = require('express');
const router = express.Router();
const {
    createOrder,
    getUserOrders,
    getAllOrders,
    updateOrderStatus,
    getOrder,
    trackOrder
} = require('../controllers/OrderController');

router.post('/', createOrder);
router.get('/user/:userId', getUserOrders);
router.get('/all', getAllOrders);
router.get('/track/:orderId', trackOrder);
router.get('/:id', getOrder);
router.put('/:id/status', updateOrderStatus);

module.exports = router;