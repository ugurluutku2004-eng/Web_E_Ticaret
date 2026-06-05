const Order = require('../models/Order');
const asyncHandler = require('../utils/asyncHandler');

const createOrder = asyncHandler(async (req, res) => {
  const order = await Order.create({
    ...req.body,
    user: req.user._id,
  });
  res.status(201).json({ success: true, data: order });
});

const getMyOrders = asyncHandler(async (req, res) => {
  const orders = await Order.find({ user: req.user._id }).sort({ createdAt: -1 });
  res.json({ success: true, data: orders });
});

const getOrderById = asyncHandler(async (req, res) => {
  const order = await Order.findById(req.params.id).populate('user', 'name email');
  if (!order) {
    res.status(404);
    throw new Error('Order not found');
  }
  res.json({ success: true, data: order });
});

const listOrders = asyncHandler(async (req, res) => {
  const orders = await Order.find().populate('user', 'name email');
  res.json({ success: true, data: orders });
});

const updateOrderStatus = asyncHandler(async (req, res) => {
  const { status } = req.body;
  const order = await Order.findById(req.params.id);
  if (!order) {
    res.status(404);
    throw new Error('Order not found');
  }
  order.status = status || order.status;
  const updated = await order.save();
  res.json({ success: true, data: updated });
});

const cancelMyOrder = asyncHandler(async (req, res) => {
  const order = await Order.findOne({ _id: req.params.id, user: req.user._id });
  if (!order) {
    res.status(404);
    throw new Error('Order not found');
  }
  if (order.status === 'delivered') {
    res.status(400);
    throw new Error('Delivered orders cannot be cancelled');
  }
  if (order.status === 'cancelled') {
    res.status(400);
    throw new Error('Order already cancelled');
  }
  order.status = 'cancelled';
  if (order.isPaid) {
    order.isPaid = false;
    order.paidAt = undefined;
  }
  const updated = await order.save();
  res.json({ success: true, data: updated });
});

module.exports = {
  createOrder,
  getMyOrders,
  getOrderById,
  listOrders,
  updateOrderStatus,
  cancelMyOrder,
};
