const mongoose = require('mongoose');
require('dotenv').config();

const User = require('../models/SignUpModel');

async function setupDatabase() {
    try {
        // Connect to MongoDB
        await mongoose.connect(process.env.MONGO_URL);
        console.log('Connected to MongoDB');

        // Remove duplicates - keep newest for each email
        console.log('Cleaning up duplicate users...');
        
        const duplicates = await User.aggregate([
            { $group: { _id: '$email', users: { $push: '$$ROOT' }, count: { $sum: 1 } } },
            { $match: { count: { $gt: 1 } } }
        ]);

        let removedCount = 0;
        for (const duplicate of duplicates) {
            const sortedUsers = duplicate.users.sort((a, b) => 
                new Date(b._id.getTimestamp()) - new Date(a._id.getTimestamp())
            );
            const usersToRemove = sortedUsers.slice(1);
            
            for (const user of usersToRemove) {
                await User.findByIdAndDelete(user._id);
                removedCount++;
            }
        }

        console.log(`Removed ${removedCount} duplicate users`);

        // Create unique indexes
        console.log('Creating unique indexes...');
        try {
            await User.collection.createIndex({ email: 1 }, { unique: true });
            await User.collection.createIndex({ phone: 1 }, { unique: true });
            console.log('Unique indexes created successfully');
        } catch (error) {
            console.log('Indexes may already exist:', error.message);
        }

        console.log('Database setup completed');
        process.exit(0);
    } catch (error) {
        console.error('Setup failed:', error);
        process.exit(1);
    }
}

setupDatabase();