const mongoose = require('mongoose');
require('dotenv').config();

async function createOrder() {
    try {
        await mongoose.connect(process.env.MONGO_URL);
        console.log('Connected to MongoDB');

        // Sample order data like what frontend sends
        const orderData = {
            orderId: 'ORD-' + Date.now().toString().slice(-6),
            items: [
                {
                    name: 'Organic Apples',
                    price: 120,
                    quantity: 2,
                    image: 'https://example.com/apple.jpg'
                },
                {
                    name: 'Fresh Milk',
                    price: 45,
                    quantity: 1,
                    image: 'https://example.com/milk.jpg'
                }
            ],
            customerInfo: {
                firstName: 'John',
                lastName: 'Doe',
                email: 'john@example.com',
                phone: '9876543210',
                address: '123 Main Street',
                city: 'Coimbatore',
                state: 'Tamil Nadu',
                pincode: '641001',
                paymentMethod: 'cod'
            },
            totals: {
                subtotal: 285,
                shipping: 0,
                tax: 15,
                total: 300
            },
            totalAmount: 300,
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
            },
            orderDate: new Date(),
            createdAt: new Date(),
            updatedAt: new Date()
        };

        // Insert directly into orders collection
        const result = await mongoose.connection.db.collection('orders').insertOne(orderData);
        
        console.log('✅ Order created successfully!');
        console.log('Order ID:', orderData.orderId);
        console.log('Database ID:', result.insertedId);
        console.log('Customer:', orderData.customerInfo.firstName, orderData.customerInfo.lastName);
        console.log('Total Amount: ₹', orderData.totalAmount);
        console.log('Items:', orderData.items.length);

        // Verify the order was saved
        const savedOrder = await mongoose.connection.db.collection('orders').findOne({orderId: orderData.orderId});
        console.log('✅ Order verified in database:', savedOrder ? 'Found' : 'Not found');

        process.exit(0);
    } catch (error) {
        console.error('❌ Error creating order:', error);
        process.exit(1);
    }
}

createOrder();