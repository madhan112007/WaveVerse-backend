const express = require('express');
const router = express.Router();
const { submitContact } = require('../controllers/ContactController');
const Contact = require('../models/ContactModel');

router.post("/contact", submitContact);
router.get("/contacts", async (req, res) => {
    try {
        const contacts = await Contact.find();
        res.json(contacts);
    } catch (error) {
        res.status(500).json({ error: error.message });
    }
});

module.exports = router;