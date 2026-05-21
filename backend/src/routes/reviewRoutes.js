const express = require('express');
const { listReviews } = require('../controllers/reviewController');
const { protect, admin } = require('../middleware/authMiddleware');

const router = express.Router();

router.get('/', protect, admin, listReviews);

module.exports = router;
