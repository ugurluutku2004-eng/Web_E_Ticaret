const User = require('../models/User');
const asyncHandler = require('../utils/asyncHandler');

const sanitizeCard = (card) => ({
  _id: card._id,
  name: card.name,
  holderName: card.holderName,
  last4: card.last4,
  brand: card.brand,
  expMonth: card.expMonth,
  expYear: card.expYear,
});

const cardBrandFromNumber = (number) => {
  if (number.startsWith('4')) return 'visa';
  if (number.startsWith('5')) return 'mastercard';
  if (number.startsWith('34') || number.startsWith('37')) return 'amex';
  return 'unknown';
};

const updateProfile = asyncHandler(async (req, res) => {
  const { name, email, phone, address } = req.body;
  const user = await User.findById(req.user._id);
  if (!user) {
    res.status(404);
    throw new Error('User not found');
  }
  user.name = name || user.name;
  user.email = email || user.email;
  user.phone = phone || user.phone;
  user.address = address || user.address;
  const updated = await user.save();
  res.json({ success: true, data: updated });
});

const changePassword = asyncHandler(async (req, res) => {
  const { currentPassword, newPassword } = req.body;
  const user = await User.findById(req.user._id).select('+password');
  if (!user) {
    res.status(404);
    throw new Error('User not found');
  }
  const match = await user.matchPassword(currentPassword);
  if (!match) {
    res.status(400);
    throw new Error('Current password is incorrect');
  }
  user.password = newPassword;
  await user.save();
  res.json({ success: true, message: 'Password updated' });
});

const listUsers = asyncHandler(async (req, res) => {
  const users = await User.find().select('-password');
  res.json({ success: true, data: users });
});

const deleteUser = asyncHandler(async (req, res) => {
  const user = await User.findById(req.params.id);
  if (!user) {
    res.status(404);
    throw new Error('User not found');
  }
  await user.deleteOne();
  res.json({ success: true, message: 'User deleted' });
});

const getMyCards = asyncHandler(async (req, res) => {
  const user = await User.findById(req.user._id);
  if (!user) {
    res.status(404);
    throw new Error('User not found');
  }
  const cards = (user.cards || []).map(sanitizeCard);
  res.json({ success: true, data: cards });
});

const addMyCard = asyncHandler(async (req, res) => {
  const { name, holderName, number, expMonth, expYear, cvc } = req.body;
  if (!name || !holderName || !number || !expMonth || !expYear || !cvc) {
    res.status(400);
    throw new Error('Kart bilgileri eksik');
  }

  const digits = String(number).replace(/\D/g, '');
  if (digits.length < 12) {
    res.status(400);
    throw new Error('Kart numarası geçersiz');
  }

  const user = await User.findById(req.user._id);
  if (!user) {
    res.status(404);
    throw new Error('User not found');
  }

  const card = {
    name: String(name).trim(),
    holderName: String(holderName).trim(),
    number: digits,
    expMonth: Number(expMonth),
    expYear: Number(expYear),
    cvc: String(cvc).trim(),
    brand: cardBrandFromNumber(digits),
    last4: digits.slice(-4),
  };

  user.cards = user.cards || [];
  user.cards.push(card);
  await user.save();

  const cards = user.cards.map(sanitizeCard);
  res.status(201).json({ success: true, data: cards });
});

const deleteMyCard = asyncHandler(async (req, res) => {
  const { cardId } = req.params;
  const user = await User.findById(req.user._id);
  if (!user) {
    res.status(404);
    throw new Error('User not found');
  }

  const beforeCount = user.cards?.length || 0;
  user.cards = (user.cards || []).filter((card) => String(card._id) !== String(cardId));
  if (user.cards.length === beforeCount) {
    res.status(404);
    throw new Error('Kart bulunamadı');
  }
  await user.save();

  const cards = user.cards.map(sanitizeCard);
  res.json({ success: true, data: cards });
});

module.exports = {
  updateProfile,
  changePassword,
  listUsers,
  deleteUser,
  getMyCards,
  addMyCard,
  deleteMyCard,
};
