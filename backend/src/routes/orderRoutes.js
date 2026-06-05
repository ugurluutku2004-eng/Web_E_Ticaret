const express = require('express');
const {
  createOrder,
  getMyOrders,
  getOrderById,
  listOrders,
  updateOrderStatus,
  cancelMyOrder,
} = require('../controllers/orderController');
const { protect, admin } = require('../middleware/authMiddleware');

const router = express.Router();

router.post('/', protect, createOrder);
router.get('/my', protect, getMyOrders);
router.put('/:id/cancel', protect, cancelMyOrder);
router.get('/:id', protect, getOrderById);
router.get('/', protect, admin, listOrders);
router.put('/:id/status', protect, admin, updateOrderStatus);

module.exports = router;
