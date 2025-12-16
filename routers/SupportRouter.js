const express = require('express');
const router = express.Router();
const {
    createSupport,
    getAllSupport,
    updateSupportStatus
} = require('../controllers/SupportController');

router.post('/', createSupport);
router.get('/all', getAllSupport);
router.put('/:id/status', updateSupportStatus);

module.exports = router;