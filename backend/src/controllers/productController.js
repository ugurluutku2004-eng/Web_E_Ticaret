const Product = require('../models/Product');
const Review = require('../models/Review');
const asyncHandler = require('../utils/asyncHandler');

const listProducts = asyncHandler(async (req, res) => {
  const { keyword, page = 1, limit = 12, category } = req.query;
  const query = {};
  if (keyword) query.$text = { $search: keyword };
  if (category) query.category = category;

  const skip = (Number(page) - 1) * Number(limit);
  const [items, total] = await Promise.all([
    Product.find(query)
      .populate('category', 'name slug')
      .populate('seller', 'name email')
      .skip(skip)
      .limit(Number(limit))
      .sort({ createdAt: -1 }),
    Product.countDocuments(query),
  ]);

  res.json({
    success: true,
    data: items,
    pagination: { page: Number(page), limit: Number(limit), total },
  });
});

const getProductById = asyncHandler(async (req, res) => {
  const product = await Product.findById(req.params.id)
    .populate('category', 'name slug')
    .populate('seller', 'name email');
  if (!product) {
    res.status(404);
    throw new Error('Product not found');
  }
  res.json({ success: true, data: product });
});

const createProduct = asyncHandler(async (req, res) => {
  const { name, model, short, description, price, oldPrice, stock, images, category } = req.body;
  const product = await Product.create({
    name,
    model: model || '',
    short: short || '',
    description,
    price,
    oldPrice: oldPrice || 0,
    stock,
    images: images || [],
    category,
    seller: req.user._id,
  });
  res.status(201).json({ success: true, data: product });
});

const updateProduct = asyncHandler(async (req, res) => {
  const product = await Product.findById(req.params.id);
  if (!product) {
    res.status(404);
    throw new Error('Product not found');
  }
  const { name, model, short, description, price, oldPrice, stock, images, category, isActive } = req.body;
  product.name = name || product.name;
  product.model = model ?? product.model;
  product.short = short ?? product.short;
  product.description = description || product.description;
  product.price = price ?? product.price;
  product.oldPrice = oldPrice ?? product.oldPrice;
  product.stock = stock ?? product.stock;
  product.images = images || product.images;
  product.category = category || product.category;
  product.isActive = isActive ?? product.isActive;
  const updated = await product.save();
  res.json({ success: true, data: updated });
});

const deleteProduct = asyncHandler(async (req, res) => {
  const product = await Product.findById(req.params.id);
  if (!product) {
    res.status(404);
    throw new Error('Product not found');
  }
  await product.deleteOne();
  res.json({ success: true, message: 'Product deleted' });
});

const addReview = asyncHandler(async (req, res) => {
  const { rating, comment } = req.body;
  const product = await Product.findById(req.params.id);
  if (!product) {
    res.status(404);
    throw new Error('Product not found');
  }
  const review = await Review.create({
    user: req.user._id,
    product: product._id,
    rating,
    comment,
  });
  const reviews = await Review.find({ product: product._id });
  product.numReviews = reviews.length;
  product.avgRating = reviews.reduce((sum, r) => sum + r.rating, 0) / reviews.length;
  await product.save();
  res.status(201).json({ success: true, data: review });
});

const getProductReviews = asyncHandler(async (req, res) => {
  const reviews = await Review.find({ product: req.params.id }).populate('user', 'name');
  res.json({ success: true, data: reviews });
});

module.exports = {
  listProducts,
  getProductById,
  createProduct,
  updateProduct,
  deleteProduct,
  addReview,
  getProductReviews,
};
