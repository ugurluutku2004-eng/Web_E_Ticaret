const User = require('../models/User');
const asyncHandler = require('../utils/asyncHandler');

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

module.exports = { updateProfile, changePassword, listUsers, deleteUser };
