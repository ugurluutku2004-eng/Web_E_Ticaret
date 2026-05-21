const Review = require('../models/Review');
const asyncHandler = require('../utils/asyncHandler');

const listReviews = asyncHandler(async (req, res) => {
  const reviews = await Review.find().populate('user', 'name').populate('product', 'name');
  res.json({ success: true, data: reviews });
});

module.exports = { listReviews };
