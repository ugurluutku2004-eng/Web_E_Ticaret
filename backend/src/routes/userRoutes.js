const express = require('express');
const {
	updateProfile,
	changePassword,
	listUsers,
	deleteUser,
	getMyCards,
	addMyCard,
	deleteMyCard,
} = require('../controllers/userController');
const { protect, admin } = require('../middleware/authMiddleware');

const router = express.Router();

router.put('/profile', protect, updateProfile);
router.put('/password', protect, changePassword);
router.get('/cards', protect, getMyCards);
router.post('/cards', protect, addMyCard);
router.delete('/cards/:cardId', protect, deleteMyCard);
router.get('/', protect, admin, listUsers);
router.delete('/:id', protect, admin, deleteUser);

module.exports = router;
