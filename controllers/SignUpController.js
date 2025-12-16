const user = require("../models/SignUpModel");


const signUpUser = async (req, res) => {
    try{
    console.log('Received signup data:', req.body);
    const { firstName,lastName,email,phone,password,role } = req.body;
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
        message: "User registered successfully",
        data: savedUser,
    });
    }
    catch(error){
        console.log('Signup error:', error);
        res.status(500).json({
            message: "Internal server error",
            error: error.message,
        });
    }
};

module.exports = { signUpUser };