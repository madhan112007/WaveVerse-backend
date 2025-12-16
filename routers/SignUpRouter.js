const express = require('express');
const router = express.Router();
const { signUpUser } = require('../controllers/SignUpController');
const User = require('../models/SignUpModel');

router.post("/signup", signUpUser);
router.get("/all", async (req, res) => {
    try {
        const users = await User.find();
        res.json(users);
    } catch (error) {
        res.status(500).json({ error: error.message });
    }
});

module.exports = router;