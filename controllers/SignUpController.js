const user = require("../models/SignUpModel");


const signUpUser = async (req, res) => {
    try{
        console.log('Received signup data:', req.body);
        const { firstName, lastName, email, phone, password, role } = req.body;
        
        // Check if user already exists
        const existingUser = await user.findOne({ email });
        if (existingUser) {
            return res.status(409).json({
                message: "Account already exists",
                error: "An account with this email address already exists. Please use a different email or try logging in."
            });
        }
        
        // Check if phone number already exists
        const existingPhone = await user.findOne({ phone });
        if (existingPhone) {
            return res.status(409).json({
                message: "Phone number already registered",
                error: "This phone number is already associated with another account. Please use a different phone number."
            });
        }
        
        const newUser = new user({
            firstName,
            lastName,
            email,
            phone,
            password,
            role: role || 'user'
        });
        
        const savedUser = await newUser.save();
        console.log('User saved:', savedUser);

        res.status(201).json({
            message: "Account created successfully",
            data: {
                id: savedUser._id,
                firstName: savedUser.firstName,
                lastName: savedUser.lastName,
                email: savedUser.email,
                phone: savedUser.phone,
                role: savedUser.role
            }
        });
    }
    catch(error){
        console.log('Signup error:', error);
        
        // Handle MongoDB duplicate key error
        if (error.code === 11000) {
            const field = Object.keys(error.keyPattern)[0];
            return res.status(409).json({
                message: "Account already exists",
                error: `An account with this ${field} already exists. Please use a different ${field}.`
            });
        }
        
        res.status(500).json({
            message: "Registration failed",
            error: "Unable to create account. Please try again later."
        });
    }
};

module.exports = { signUpUser };