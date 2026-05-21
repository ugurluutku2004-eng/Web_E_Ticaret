const Category = require('../models/Category');
const asyncHandler = require('../utils/asyncHandler');

const listCategories = asyncHandler(async (req, res) => {
  const categories = await Category.find().sort({ createdAt: -1 });
  res.json({ success: true, data: categories });
});

const createCategory = asyncHandler(async (req, res) => {
  const { name, slug, description } = req.body;
  const exists = await Category.findOne({ slug });
  if (exists) {
    res.status(400);
    throw new Error('Category slug already exists');
  }
  const category = await Category.create({ name, slug, description });
  res.status(201).json({ success: true, data: category });
});

const updateCategory = asyncHandler(async (req, res) => {
  const { name, slug, description } = req.body;
  const category = await Category.findById(req.params.id);
  if (!category) {
    res.status(404);
    throw new Error('Category not found');
  }
  category.name = name || category.name;
  category.slug = slug || category.slug;
  category.description = description || category.description;
  const updated = await category.save();
  res.json({ success: true, data: updated });
});

const deleteCategory = asyncHandler(async (req, res) => {
  const category = await Category.findById(req.params.id);
  if (!category) {
    res.status(404);
    throw new Error('Category not found');
  }
  await category.deleteOne();
  res.json({ success: true, message: 'Category deleted' });
});

module.exports = { listCategories, createCategory, updateCategory, deleteCategory };
