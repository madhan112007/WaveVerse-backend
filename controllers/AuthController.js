const User = require('../models/SignUpModel');
const jwt = require('jsonwebtoken');

// Login user
const loginUser = async (req, res) => {
    try {
        const { email, password } = req.body;
        
        // Find user by email
        const user = await User.findOne({ email });
        if (!user) {
            return res.status(401).json({ message: 'Invalid email or password' });
        }
        
        // Check password (plain text for now)
        console.log('Login attempt:', { email, providedPassword: password });
        console.log('User found:', { email: user.email, storedPassword: user.password, role: user.role });
        
        if (user.password !== password) {
            console.log('Password mismatch');
            return res.status(401).json({ message: 'Invalid email or password' });
        }
        
        console.log('Login successful for:', user.email, 'Role:', user.role);
        
        // Generate JWT token
        const token = jwt.sign(
            { userId: user._id, email: user.email },
            process.env.JWT_SECRET || 'your-secret-key',
            { expiresIn: '24h' }
        );
        
        res.json({
            message: 'Login successful',
            token,
            user: {
                id: user._id,
                firstName: user.firstName,
                lastName: user.lastName,
                email: user.email,
                phone: user.phone,
                role: user.role || 'user'
            }
        });
    } catch (error) {
        res.status(500).json({ message: error.message });
    }
};

// Get user profile
const getUserProfile = async (req, res) => {
    try {
        const user = await User.findById(req.params.id).select('-password');
        if (!user) {
            return res.status(404).json({ message: 'User not found' });
        }
        res.json(user);
    } catch (error) {
        res.status(500).json({ message: error.message });
    }
};

// Update user profile
const updateUserProfile = async (req, res) => {
    try {
        const { firstName, lastName, phone } = req.body;
        const user = await User.findByIdAndUpdate(
            req.params.id,
            { firstName, lastName, phone },
            { new: true }
        ).select('-password');
        
        if (!user) {
            return res.status(404).json({ message: 'User not found' });
        }
        
        res.json(user);
    } catch (error) {
        res.status(400).json({ message: error.message });
    }
};

module.exports = {
    loginUser,
    getUserProfile,
    updateUserProfile
};