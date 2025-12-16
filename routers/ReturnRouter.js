const express = require('express');
const router = express.Router();
const {
    createReturn,
    getAllReturns,
    updateReturnStatus
} = require('../controllers/ReturnController');

router.post('/', createReturn);
router.get('/all', getAllReturns);
router.put('/:id/status', updateReturnStatus);

module.exports = router;