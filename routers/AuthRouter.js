const express = require('express');
const router = express.Router();
const {
    loginUser,
    getUserProfile,
    updateUserProfile
} = require('../controllers/AuthController');

router.post('/login', loginUser);
router.get('/profile/:id', getUserProfile);
router.put('/profile/:id', updateUserProfile);

module.exports = router;