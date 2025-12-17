const mongoose = require('mongoose');
require('dotenv').config();

const User = require('../models/SignUpModel');

async function cleanupUsers() {
    try {
        // Connect to MongoDB
        await mongoose.connect(process.env.MONGO_URL);
        console.log('Connected to MongoDB');

        // Keep only admin and test user
        const keepEmails = ['codethetrend@gmail.com', 'user@test.com'];
        
        const result = await User.deleteMany({
            email: { $nin: keepEmails }
        });

        console.log(`Removed ${result.deletedCount} users`);
        console.log('Kept admin (codethetrend@gmail.com) and test user (user@test.com)');

        // Verify remaining users
        const remainingUsers = await User.find({}, 'firstName lastName email role');
        console.log('Remaining users:', remainingUsers);

        process.exit(0);
    } catch (error) {
        console.error('Cleanup failed:', error);
        process.exit(1);
    }
}

cleanupUsers();