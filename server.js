const express = require('express');
const cors = require('cors');
const app = express();

// CORS configuration - allow all origins
app.use(cors());
app.options('*', cors());
app.use(express.json());

// Create admin user endpoint (for setup) - must be before other routes
app.get('/api/setup-admin', async (req, res) => {
    try {
        const User = require('./models/SignUpModel');
        
        // Check if admin already exists
        const existingAdmin = await User.findOne({ email: 'codethetrend@gmail.com' });
        if (existingAdmin) {
            return res.json({ message: 'Admin user already exists', email: 'codethetrend@gmail.com' });
        }
        
        // Create admin user
        const adminUser = new User({
            firstName: 'Code',
            lastName: 'Trend',
            email: 'codethetrend@gmail.com',
            phone: 9363752456,
            password: 'Sarasmad@123',
            role: 'admin'
        });
        
        await adminUser.save();
        res.json({ message: 'Admin user created successfully', email: 'codethetrend@gmail.com', password: 'Sarasmad@123' });
    } catch (error) {
        res.status(500).json({ message: error.message });
    }
});

const userRouter = require('./routers/SignUpRouter');
const contactRouter = require('./routers/ContactRouter');
const productRouter = require('./routers/ProductRouter');
const orderRouter = require('./routers/OrderRouter');
const authRouter = require('./routers/AuthRouter');
const returnRouter = require('./routers/ReturnRouter');
const supportRouter = require('./routers/SupportRouter');
const adminRouter = require('./routers/AdminRouter');
const recipeRouter = require('./routers/RecipeRouter');
const SimpleOrder = require('./models/SimpleOrderModel');

app.use('/api/user', userRouter);
app.use('/api', contactRouter);
app.use('/api/products', productRouter);
app.use('/api/orders', orderRouter);
app.use('/api/auth', authRouter);
app.use('/api/returns', returnRouter);
app.use('/api/support', supportRouter);
app.use('/api/admin', adminRouter);
app.use('/api/recipes', recipeRouter);

// Simple order creation that works
app.post('/api/create-order', async (req, res) => {
    try {
        const order = new SimpleOrder(req.body);
        const savedOrder = await order.save();
        res.status(201).json({ 
            success: true,
            message: 'Order created successfully',
            orderId: savedOrder.orderId,
            id: savedOrder._id
        });
    } catch (error) {
        console.error('Order creation error:', error);
        res.status(500).json({ 
            success: false,
            message: error.message 
        });
    }
});
console.log('All routes registered including /api/recipes');

// Debug endpoint to list all users
app.get('/api/debug/users', async (req, res) => {
    try {
        const User = require('./models/SignUpModel');
        const users = await User.find({}, 'firstName lastName email role password');
        res.json({ users, count: users.length });
    } catch (error) {
        res.status(500).json({ message: error.message });
    }
});

// Fix password endpoint
app.post('/api/fix-password', async (req, res) => {
    try {
        const User = require('./models/SignUpModel');
        const { email, newPassword } = req.body;
        
        const user = await User.findOneAndUpdate(
            { email },
            { password: newPassword },
            { new: true }
        );
        
        if (!user) {
            return res.status(404).json({ message: 'User not found' });
        }
        
        res.json({ message: 'Password updated successfully', email });
    } catch (error) {
        res.status(500).json({ message: error.message });
    }
});

// Cleanup duplicate users endpoint
app.post('/api/cleanup-duplicates', async (req, res) => {
    try {
        const User = require('./models/SignUpModel');
        
        // Find all users grouped by email
        const duplicates = await User.aggregate([
            { $group: { _id: '$email', users: { $push: '$$ROOT' }, count: { $sum: 1 } } },
            { $match: { count: { $gt: 1 } } }
        ]);
        
        let removedCount = 0;
        
        for (const duplicate of duplicates) {
            // Sort by creation date (newest first) and keep the first one
            const sortedUsers = duplicate.users.sort((a, b) => new Date(b._id.getTimestamp()) - new Date(a._id.getTimestamp()));
            const usersToRemove = sortedUsers.slice(1); // Remove all except the newest
            
            for (const user of usersToRemove) {
                await User.findByIdAndDelete(user._id);
                removedCount++;
            }
        }
        
        res.json({ 
            message: 'Cleanup completed', 
            duplicatesFound: duplicates.length,
            usersRemoved: removedCount 
        });
    } catch (error) {
        res.status(500).json({ message: error.message });
    }
});

// Simple order creation endpoint
app.post('/api/simple-order', async (req, res) => {
    try {
        const orderData = {
            ...req.body,
            createdAt: new Date(),
            updatedAt: new Date()
        };
        
        const result = await mongoose.connection.db.collection('orders').insertOne(orderData);
        res.status(201).json({ 
            message: 'Order created successfully',
            orderId: orderData.orderId,
            id: result.insertedId 
        });
    } catch (error) {
        res.status(500).json({ message: error.message });
    }
});

// Health check endpoint
app.get('/api/health', (req, res) => {
    res.json({ 
        status: 'OK', 
        message: 'WaveVerse Backend is running',
        timestamp: new Date().toISOString(),
        endpoints: {
            users: '/api/user',
            auth: '/api/auth',
            contact: '/api/contact',
            products: '/api/products',
            orders: '/api/orders',
            returns: '/api/returns',
            support: '/api/support',
            admin: '/api/admin',
            recipes: '/api/recipes'
        }
    });
});

const mongoose = require('mongoose');
require('dotenv').config();
mongoose
.connect(process.env.MONGO_URL)
.then(() => {
    console.log('Connected to MongoDB');
})
.catch((err) => {
    console.log("Connection failed:"+err);
});

const PORT = process.env.PORT || 5000;
app.listen(PORT, () => {
    console.log(`Server is running on port ${PORT}`);
});