const express = require('express');
const { updateProfile, changePassword, listUsers, deleteUser } = require('../controllers/userController');
const { protect, admin } = require('../middleware/authMiddleware');

const router = express.Router();

router.put('/profile', protect, updateProfile);
router.put('/password', protect, changePassword);
router.get('/', protect, admin, listUsers);
router.delete('/:id', protect, admin, deleteUser);

module.exports = router;
