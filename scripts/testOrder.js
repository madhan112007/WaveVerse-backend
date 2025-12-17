const mongoose = require('mongoose');
require('dotenv').config();

async function testOrder() {
    try {
        await mongoose.connect(process.env.MONGO_URL);
        console.log('Connected to MongoDB');

        // Create order directly in database
        const orderData = {
            orderId: 'ORD-' + Date.now().toString().slice(-6),
            items: [{
                name: 'Test Item',
                price: 100,
                quantity: 1
            }],
            customerInfo: {
                firstName: 'Test',
                lastName: 'User',
                email: 'test@test.com',
                phone: '1234567890',
                address: 'Test Address',
                city: 'Test City',
                state: 'Test State',
                pincode: '123456',
                paymentMethod: 'cod'
            },
            totals: {
                subtotal: 100,
                shipping: 0,
                tax: 10,
                total: 110
            },
            totalAmount: 110,
            paymentMethod: 'cod',
            status: 'pending',
            trackingInfo: {
                currentLocation: 'Order Placed',
                estimatedDelivery: new Date(Date.now() + 2 * 24 * 60 * 60 * 1000),
                updates: [{
                    status: 'pending',
                    message: 'Order placed successfully',
                    timestamp: new Date(),
                    location: 'WaveVerse Store, Coimbatore'
                }]
            }
        };

        const result = await mongoose.connection.db.collection('orders').insertOne(orderData);
        console.log('Order created:', result.insertedId);
        console.log('Order ID:', orderData.orderId);

        process.exit(0);
    } catch (error) {
        console.error('Error:', error);
        process.exit(1);
    }
}

testOrder();