const Contact = require("../models/ContactModel");

const submitContact = async (req, res) => {
    try {
        console.log('Received contact data:', req.body);
        const { name, email, phone, subject, message } = req.body;
        
        const newContact = new Contact({
            name,
            email,
            phone,
            subject,
            message
        });
        
        const savedContact = await newContact.save();
        console.log('Contact saved:', savedContact);

        res.status(201).json({
            message: "Contact form submitted successfully",
            data: savedContact,
        });
    } catch (error) {
        console.log('Contact error:', error);
        res.status(500).json({
            message: "Internal server error",
            error: error.message,
        });
    }
};

module.exports = { submitContact };