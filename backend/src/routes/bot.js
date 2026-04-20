const express = require('express');
const router = express.Router();
const { getSignal, runBacktest, getRiskParams } = require('../controllers/botController');

// Candidates must implement the controller functions — do not modify routes
router.post('/signal', getSignal);
router.post('/backtest', runBacktest);
router.get('/risk', getRiskParams);

module.exports = router;
