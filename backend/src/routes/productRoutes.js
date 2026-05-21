const express = require('express');
const {
  listProducts,
  getProductById,
  createProduct,
  updateProduct,
  deleteProduct,
  addReview,
  getProductReviews,
} = require('../controllers/productController');
const { protect, admin } = require('../middleware/authMiddleware');

const router = express.Router();

router.get('/', listProducts);
router.get('/:id', getProductById);
router.get('/:id/reviews', getProductReviews);
router.post('/', protect, admin, createProduct);
router.put('/:id', protect, admin, updateProduct);
router.delete('/:id', protect, admin, deleteProduct);
router.post('/:id/reviews', protect, addReview);

module.exports = router;
