const Cart = require('../models/Cart');
const Product = require('../models/Product');
const asyncHandler = require('../utils/asyncHandler');

const getCart = asyncHandler(async (req, res) => {
  const cart = await Cart.findOne({ user: req.user._id }).populate('items.product');
  res.json({ success: true, data: cart || { user: req.user._id, items: [] } });
});

const addToCart = asyncHandler(async (req, res) => {
  const { productId, quantity = 1 } = req.body;
  const product = await Product.findById(productId);
  if (!product) {
    res.status(404);
    throw new Error('Product not found');
  }
  let cart = await Cart.findOne({ user: req.user._id });
  if (!cart) {
    cart = await Cart.create({ user: req.user._id, items: [] });
  }
  const item = cart.items.find((i) => i.product.toString() === productId);
  if (item) {
    item.quantity += Number(quantity);
  } else {
    cart.items.push({ product: productId, quantity: Number(quantity) });
  }
  await cart.save();
  res.status(201).json({ success: true, data: cart });
});

const updateCartItem = asyncHandler(async (req, res) => {
  const { quantity } = req.body;
  const cart = await Cart.findOne({ user: req.user._id });
  if (!cart) {
    res.status(404);
    throw new Error('Cart not found');
  }
  const item = cart.items.id(req.params.id);
  if (!item) {
    res.status(404);
    throw new Error('Cart item not found');
  }
  item.quantity = Number(quantity);
  await cart.save();
  res.json({ success: true, data: cart });
});

const removeCartItem = asyncHandler(async (req, res) => {
  const cart = await Cart.findOne({ user: req.user._id });
  if (!cart) {
    res.status(404);
    throw new Error('Cart not found');
  }
  cart.items = cart.items.filter((i) => i._id.toString() !== req.params.id);
  await cart.save();
  res.json({ success: true, data: cart });
});

module.exports = { getCart, addToCart, updateCartItem, removeCartItem };
